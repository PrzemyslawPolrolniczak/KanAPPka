<template>
  <div id="success">
      <h1 @click="test">Zamówienie zostało przyjęte. Dziękuję za skorzystanie z usługi.<br>Koszt zamówienia wynosi {{serverResp * 3.00}}zł</h1>
  </div>
</template>

<script>
export default {
  name: 'success',
  data () {
    return {
      
    }
  },
  methods: {
    test() {
        console.log(this.iloscKanapek);
    }
  },
  props: {
      serverResp: Number
  }
}
</script>

<style lang="scss">
#success {
    h1 {
        text-align: center;
        font-size: 50px;
        color: #ccc;
        position: absolute;
        left: 52%;
        top: 40%;
        transform: translate(-50%,-50%);
    }
}
</style>
