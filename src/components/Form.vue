<template>
  <div id="contact-form">
      <form action="POST">
          <div class="kanapka-list">
            <kanapka v-for="(kanapka, index) in kanapki" :iloscKanapek="iloscKanapek" :key="index" @iloscChange="iloscChange(index, $event)">
                <h2>{{kanapka.name}}</h2>
                <p>({{kanapka.description}})</p>
            </kanapka>
          </div>
        <label for="imie">Imie:
            <input v-model="imie" @change="changeName" name="imie" type="text" spellcheck="false">
        </label>
        <br><br>
        <label for="uwagi">Uwagi do zamówienia:<br>
            <textarea v-model="uwagi" @change="changeComment" name="uwagi" id="" cols="30" rows="5" spellcheck="false"></textarea>
        </label>        
      </form>
      <preview v-if="imie != ''" :imie="imie" :uwagi="uwagi" :koszyk="koszyk"></preview>
  </div>
</template>

<script>
import kanapka from './Kanapka.vue';
import preview from './Preview.vue';

export default {
  name: 'contact-form',
  data () {
    return {
        kanapki: [
            {name: 'Standard', description: 'Szynka, ser żółty, majonez, pomidor, ogórek zielony'},
            {name: 'Masło orzechowe', description: 'Masło orzechowe, banan'},
            {name: 'Kiszony', description: 'Szynka, ogórek kiszony, majonez'},
            {name: 'Jajo', description: 'Szynka, jajko, ser żółty, majonez'},
            {name: 'Pasztet', description: 'Pasztet, sałata, zielony ogórek'}            
        ],
        imie: '',
        uwagi: ''
    }
  },
  components: {
      'kanapka': kanapka,
      'preview': preview
  },
  methods: {
      iloscChange(i, e) {
          this.$emit('zamowienie', {id: i, name: this.kanapki[i].name, ammount: e})
      },
      changeName() {
          this.$emit('changeName', this.imie)
      },
      changeComment() {
          this.$emit('changeComment', this.uwagi)
      }
  },
  props: {
      koszyk: Array,
      iloscKanapek: Number
  }
}
</script>

<style lang="scss" scoped>
    #contact-form {
        border: 1px solid #ccc;
        background-color: rgba(0,0,0,0.3);
        padding: 50px;
        width: 50%;
        margin: 0 auto;
        input, textarea {
            font-family: 'Caveat', cursive;
            background: none;
            color: #ccc;
            border: none;
            outline: none;
            font-size: 24px;
        }
        input {
            border-bottom: 1px solid #ccc;
        }
        textarea {
            border: 1px solid #ccc;
            width: 100%;
        }
    }
</style>
