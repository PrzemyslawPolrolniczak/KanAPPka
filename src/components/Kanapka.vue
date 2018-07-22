<template>
  <div class="kanapka">
    <div class="description">
        <slot></slot>
    </div>
    <div class="number">
        <span @click="addRemove('+')">+</span> {{ilosc}} <span @click="addRemove('-')">-</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kanapka',
  data () {
    return {
        ilosc: 0,
    }
  },
  methods: {
      addRemove(symbol) {
          if (symbol == "+") {
              if( this.ilosc <= 5 && this.iloscKanapek < 6) {
                this.ilosc++
                this.$emit('iloscChange', this.ilosc)
              } else {
                  alert('Maksymalna ilość kanapek dla jednej osoby wynosi 6');
              }
          } else {
              if (this.ilosc > 0) {
                this.ilosc--
                this.$emit('iloscChange', this.ilosc)  
              } 
          }
      }
  },
  props: {
    iloscKanapek: Number
  }
}
</script>

<style lang="scss" scoped>
    h2 {
        margin: 0px;
    }
    p {
        margin: 0;
    }
    .kanapka {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .number {
            font-size: 32px;
            span {
                transition: all 0.2s;
                user-select: none;
                cursor: pointer;
                width: 35px;
                display: inline-block;
                text-align: center;
                border-bottom: 1px solid transparent;
                &:hover {
                    // font-size: 35px;
                    font-weight: 700;
                    border-bottom: 1px solid #ccc;
                    // background-color: #fff;
                    // color: black;
                }
            }
        }
    }
</style>
