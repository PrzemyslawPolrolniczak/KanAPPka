<template>
  <div id="app">
    <component @orderStatus="changeTab" :serverResp="serverResp" :is="activeComponent"></component>
    <menu-component v-on:change-tab="activeComponent = $event"></menu-component>
  </div>
</template>

<script>
import menuComponent from './components/Menu.vue';
import kanappka from './components/Kanappka.vue';
import success from './components/Success.vue';
import failure from './components/Failure.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeComponent: 'kanappka',
      serverResp: ''
    }
  },
  components: {
    'menuComponent': menuComponent,
    'kanappka': kanappka,
    'success': success,
    'failure': failure
  },
  methods: {
    changeTab(e) {
      this.activeComponent = e.status;
      this.serverResp = e.value
    }
  }
}
</script>

<style lang="scss">
body {
  padding-left: 100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
