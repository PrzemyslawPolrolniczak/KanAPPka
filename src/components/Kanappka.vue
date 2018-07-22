<template>
  <div id="kanappka">
      <div class="opacity-div"></div>
      <h1 class="title">Zamów kanapkę</h1>
      <contact-form @zamowienie="updateKoszyk" @changeComment="zamowienie.uwagi = $event" @changeName="zamowienie.imie = $event" :koszyk="zamowienie.koszyk" :iloscKanapek="iloscKanapek"></contact-form>
      <div class="button-wrapper">
        <span @click="saveOrder" class="button" v-if="gotSandwitch && zamowienie.imie != ''">Wyślij</span>
      </div>
  </div>
</template>

<script>
import contactForm from './Form.vue';
export default {
  name: 'kanappka',
  data () {
    return {
        zamowienie: {
            klucz: 0,
            imie: '',
            koszyk: [],
            uwagi: ''
        },
        isFetch: false,
        iloscKanapek: 0,
    }
  },
  components: {
      'contact-form': contactForm,
  },
  methods: {
      updateKoszyk(e) {
        let results = []
        for (let i = 0; i < this.zamowienie.koszyk.length; i++) {
            if (this.zamowienie.koszyk[i].id == e.id) {
                results.push(true);
                this.zamowienie.koszyk[i].ammount = e.ammount;
            }
        }
        if (!results.includes(true)) {
            this.zamowienie.koszyk.push(e);
            results = [];
        }
        this.obliczKanapki()
      },
      saveOrder() {
        this.isFetch = true;

        fetch('orderKey', {
            method: 'GET'
        })
        .catch(error => console.error('Error: ', error))
        .then(response => {
            response.json().then(data => {
                this.zamowienie.klucz = data;
                fetch('order', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.zamowienie)
                })
                .catch(error => this.$emit('orderStatus', data))
                .then(response => {
                    response.json().then(data => {
                        this.isFetch = false;
                        this.$emit('orderStatus', data)
                    })
                })
            })
        });
      },
      obliczKanapki() {
        this.iloscKanapek = 0;
        for (let i = 0; i < this.zamowienie.koszyk.length; i++) {
            this.iloscKanapek += this.zamowienie.koszyk[i].ammount;
        }
      }
  },
  computed: {
      gotSandwitch() {
        let res = [];
          for (let i = 0; i < this.zamowienie.koszyk.length; i++) {
              if(this.zamowienie.koszyk[i].ammount != 0) {
                  res.push(true);
              }
          }
          return res.includes(true)
      }
  }
}
</script>

<style lang="scss">
#kanappka {
    font-size: 24px;
    color: #e2e2e2;
    font-family: 'Caveat', cursive;
    top: 0;
    right: 0;
    left: 100px;
    bottom: 0;
    position: fixed;
    overflow: auto;
    .title {
        text-align: center;
    }
    .button-wrapper {
        margin-top: 20px;
        margin-bottom: 50px;
        text-align: center;
         .button {
            font-size: 35px;
            cursor: pointer;
            padding: 10px 28px 10px 20px;
            background-color: darkgreen;
            display: inline-block;
            text-align: center;
            &:hover {
                box-shadow: 0px 0px 2px 3px #ccc;
            }
        }
    }
}
</style>
