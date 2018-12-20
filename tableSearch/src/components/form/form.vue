<template>
  <form>
    <slot></slot>  
  </form>
</template>

<script>
export default {
  name: 'iform',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide() {
    return {
      form: this
    }
  },
  data() {
    return {
      fileds: []
    }
  },
  created() {
    this.$on('on-form-item-add', (filed) => {
      if(filed) this.fileds.push(filed)
    })
    this.$on('on-form-item-remove', (filed) => {
      if(filed.props) this.fileds.splice(this.fileds.indexOf(filed), 1)
    })
  }
}
</script>

<style lang="less" scoped>

</style>

