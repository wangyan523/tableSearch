<template>
  <label>
    <span>
      <input 
        v-if="group"
        type="checkbox" 
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change"
      >
      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      >
    </span>
    <slot></slot>
  </label>
</template>

<script>
import Emitter from '../../mixins/emitter.js'
import findComponentUpward from '../../utils/assist.js'
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  mixins: [Emitter],
  data() {
    return {
      currentValue: this.value,
      group: false,
      model: [],
      parent: null
    }
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateValue()
      } else {
        throw('value shold be trueValue or falseValue')
      }
    }
  },
  methods: {
    change(event) {
      if (this.disabled) return
      const checked = event.target.checked
      this.currentValue = checked
      const value = checked ? trueValue : falseValue
      this.$emit('input', value)
      this.$emit('on-change', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    updateValue() {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>

<style>

</style>


