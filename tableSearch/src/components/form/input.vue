<template>
  <input 
    type="text"
    :value="currentvalue"
    @input="handleInput"
    @blur="handleBlur"
  >
</template>

<script>
import mixins_emitter from '../../mixins/emitter.js'
export default {
  name: 'iinput',
  mixins: [mixins_emitter],
  data() {
    return {
      currentvalue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentvalue = val
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value 
      this.currentvalue = value 
      this.$emit('input', value)
      this.dispatch('iformitem', 'on-form-change', value)
    },
    handleBlur() {
      this.dispatch('iformitem', 'on-form-blur', this.currentvalue)
    }
  }
}
</script>

