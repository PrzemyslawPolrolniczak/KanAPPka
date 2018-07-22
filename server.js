const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');
// ## If you have MongoDB setup, remove this uncomment that chunk of code.
// const MongoClient = require('mongodb').MongoClient; 

app.use('/', express.static(__dirname + '/dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// KANAPPKA //
// If you use MongoDB, delete orders variable and all it references
var orders = [];
var key = 0;

app.post('/order',(req, res) => {
        let klucz = req.body.klucz;
        if(klucz == key) {
            let valid = true;

            let imie = req.body.imie;
            let koszyk = req.body.koszyk;
            let uwagi = req.body.uwagi;            
            
            let iloscKanapek = 0;

            for (let i = 0; i < koszyk.length; i++) {
                iloscKanapek += koszyk[i].ammount;
            }

            if (iloscKanapek > 6) {
                console.log('error, za dużo kanapek!')
                res.send(JSON.stringify({status: 'failure', value: 'Za dużo kanapek!'}))
                valid = false;
            }
            

            if (imie == '' || imie == null || imie.length > 30) {
                console.log('złe imie!')
                res.send(JSON.stringify({status: 'failure', value: 'Imię jest niepoprawne!'}))                
                valid = false
            }

            if (uwagi.length > 500) {
                res.send(JSON.stringify({status: 'failure', value: 'Uwagi są za długie!'})) 
                valid = false;
            }

            if(valid) {
                orders.push({imie: imie, koszyk: koszyk, uwagi: uwagi})
                console.log('')
                console.log('---Zamówienie---')
                console.log(imie)
                console.log(JSON.stringify(koszyk))
                console.log(uwagi)            
                console.log('---------------------');
                // ## If you have MongoDB setup, remove this uncomment that chunk of code.
                // MongoClient.connect('mongodb://localhost:27017/Kanappka', (err, database) => { 
                //     if(err) throw err;

                //     var db = database.db('api')
                    
                    
                //     db.collection('Orders', function (err, collection) {
                //         console.log('success');
                //         collection.insert({ imie: imie, uwagi: uwagi,iloscKanapek: iloscKanapek , koszyk: koszyk});
                //     });
                // }) 
                res.send(JSON.stringify({status: 'success', value: iloscKanapek})) 
            }
        } else {
            res.send(JSON.stringify('Formularz został błędnie wysłany.'))
        }
})

app.get('/orderKey',(req, res) => {
    key = Math.floor(Math.random() * 1001);
    res.send(JSON.stringify(key));
})

app.get('/orders',(req, res) => {
    res.sendFile(__dirname + '/orders.html');
})

app.get('/orders/get',(req, res) => {
    res.send(orders)
    // ## If you have MongoDB setup, remove this uncomment that chunk of code.
    // MongoClient.connect('mongodb://localhost:27017/Kanappka', (err, database) => {
    //     let db = database.db('api') 
    //     db.collection('Orders', function (err, collection) {
        
    //         collection.find().toArray(function(err, items) {
    //            if(err) throw err;    
    //            res.send(items);         
    //        });
           
    //    });
    // }) 
})

app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
} )