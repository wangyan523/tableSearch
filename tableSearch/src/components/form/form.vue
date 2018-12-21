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
  methods: {
    // 全部重置
    resetFields() {
      this.fileds.forEach(filed => {
        filed.resetFields()
      })
    },
    // 全部校验数据
    validate(callback) {
      return new Promise((resolve) => {
        let valid = true
        let count = 0
        this.fileds.forEach(fild => {
          fild.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === this.fileds.length) {
              //全部完成
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  },
  created() {
    this.$on('on-form-item-add', (filed) => {
      console.log(filed)
      if(filed) this.fileds.push(filed)
    })
    this.$on('on-form-item-remove', (filed) => {
      if(filed.prop) this.fileds.splice(this.fileds.indexOf(filed), 1)
    })
  }
}
</script>

<style lang="less" scoped>

</style>

