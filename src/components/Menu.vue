<template>
  <div id="menu">
      <li v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab.value)" @mouseover="changeLogo(index)">
          <img src="logo-white.png" class="logo" alt="">
          <!-- :src="tab.isHovered ? 'logo.png' : 'logo-white.png'" -->
      </li>
  </div>
</template>

<script>
export default {
  name: 'menuComponent',
  data () {
    return {
      tabs: [{name:'KanAPPka', value:'kanappka', isHovered: false}],
    }
  },
  methods: {
      changeTab(tab) {
          this.$emit('change-tab', tab);
      },
      changeLogo(i) {
          this.tabs[i].isHovered = !this.tabs[i].isHovered  
      }
  }
}
</script>

<style lang="scss">
#menu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    display: flex;
    flex-direction: column;
    background-color: #1f1f1f;
    li {
        font-weight: 700;
        cursor: pointer;
        margin: 0;
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        color: #ccc;
        &:hover {
            background-color: #fff;
            color: #1f1f1f;
            .logo {
                filter:invert(100%);
            }
        }
        .logo {
            max-height: 70px;
        }
    }
}
</style>
