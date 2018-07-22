<template>
  <div id="failure">
      <h1>COŚ POSZŁO NIE TAK<br>Komunikat błędu to :<br>{{serverResp}}</h1>
  </div>
</template>

<script>
export default {
  name: 'failure',
  data () {
    return {
      
    }
  },
  methods: {
      
  },
  props: {
      serverResp: String
  }
}
</script>

<style lang="scss">
    #failure {
        color: #ccc;
        text-align: center;
        font-size: 50px;
    }
</style>
