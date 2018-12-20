<template>
  <div>
    <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import mixins_emitter from '../../mixins/emitter.js'
export default {
  name: 'iformitem',
  mixins: mixins_emitter,
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  inject: ['form'],
  methods: {
    setRules() {
      this.$on('on-input-change', this.onFiledChange)
      this.$on('on-input-blur', this.onFiledBlur)
    }
  },
  mounted() {
    if (this.props) {
      this.dispatch('iform', 'on-form-item-add', this)
      this.setRules()
    }
  },
  destroyed() {
    this.dispatch('iform', 'on-form-item-remove', this)
  }
}
</script>

<style lang="less" scoped>

</style>

