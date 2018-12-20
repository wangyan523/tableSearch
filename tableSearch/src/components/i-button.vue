<template>
  <button 
    :class="'i-button-' + size" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="icon"></slot>
    <slot>按钮</slot>
  </button>
</template>

<script>
function oneOf(value, valueList) {
  for (let i=0;i<valueList.length;i++) {
    if (value === valueList[i]) {
      return true
    }
  }
  return false
}
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small','large','default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('on-click', 'hello world')
    }
  },
  inject: ['app'],
  mounted() {
    this.$on('on-click', (text) => {
      console.log(text + 'i-button')
    })
    console.log(this.app)
  }
}
</script>

<style lang="less" scoped>
.i-button-small,.i-button-large,.i-button-default{
  text-align: center;
  font-size: 12px;
}
.i-button-small{
  width: 30px;
  height: 15px;
  line-height: 15px;
}
.i-button-large{
  width: 50px;
  height: 25px;
  line-height: 25px;
}
.i-button-default{
  width: 40px;
  height: 20px;
  line-height: 20px;
}
</style>


