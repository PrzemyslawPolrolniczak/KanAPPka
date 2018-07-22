<template>
  <div id="preview">
      <h1>Cześć, tu <span>{{imie}}</span><b v-if="gotSandwitch">, mam ochotę na następujące kanapki:</b></h1>
      <h1 v-for="kanapka in koszyk" :key="kanapka.id" v-if="kanapka.ammount != 0"><span>{{kanapka.ammount}}x</span> Kanapka <span>{{kanapka.name}}</span></h1>
      <h1 v-if="uwagi != ''">Dodatkowo proszę o uwzględnienie tych uwag:</h1>
      <h1><span>{{uwagi}}</span></h1>
      <!-- <button type="submit">Wyślij</button> -->
  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {

    }
  },
  props: {
      imie: String,
      uwagi: String,
      koszyk: Array
  },
  computed: {
      gotSandwitch() {
        let res = [];
          for (let i = 0; i < this.koszyk.length; i++) {
              if(this.koszyk[i].ammount != 0) {
                  res.push(true);
              }
          }
          return res.includes(true)
      }
  }
}
</script>

<style lang="scss" scoped>
    #preview {
        margin-top: 20px;
    }
    span {
        color: green;
    }
    h1 {
        margin: 0;
    }
</style>
