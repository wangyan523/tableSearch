<template>
  <div>
    <label 
      v-if="label"
      :class="{'i-form-item-label-required':isRequired}"
    >{{label}}</label>
    <div>
      <slot></slot>
      <div 
        v-if="validateState === 'error'"
        class="i-form-item-message"
      >{{validateMessage}}</div>
    </div>
  </div>
</template>

<script>
  import mixins_emitter from '../../mixins/emitter.js'
  import AsyncValidator from 'async-validator';
  export default {
    name: 'iformitem',
    mixins: [mixins_emitter],
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
    data() {
      return {
        isRequired: false,
        validateState: '',
        validateMessage: ''
      }
    },
    methods: {
      setRules() {
        let rules = this.getRules()
        if (rules.length) {
          rules.every(rule => {
            this.isRequired = true
          })
        }
        this.$on('on-form-change', this.onFiledChange)
        this.$on('on-form-blur', this.onFiledBlur)
      },
      getRules() {
        let formRules = this.form.rules 
        formRules = formRules?formRules[this.prop]:[]
        return [].concat(formRules||[])
      },
      getFilteredRules(trigger) {
        const rules = this.getRules()
        return rules.filter(rule => !rule.trigger || rule.indexOf(trigger) !== -1)
      },
      validate(trigger, callback = function(){}) {
        let rules = this.getFilteredRules()
        if (!rules || rules.length === 0) {
          return true
        }
        this.validateState = 'validating'
        //调用async-validator库
        let descriptor = {}
        descriptor[this.prop] = rules

        const validator = new AsyncValidator(descriptor)
        let model = {}
        model[this.prop] = this.fieldValue
        validator.validate(model, {firstFields: true}, errors => {
          this.validateState = !errors?'success':'error';
          this.validateMessage = errors?errors[0].message:[]
        })
        callback(this.validateMessage)
      },
      onFiledChange() {
        this.validate('change')
      },
      onFiledBlur() {
        this.validate('blur')
      },
      resetFields() {
        this.validateState = ''
        this.validateMessage = ''
        this.form.model[this.prop] = this.initialValue
      }
    },
    computed: {
      fieldValue() {
        return this.form.model[this.prop]
      }
    },
    mounted() {
      if (this.props) {
        this.dispatch('iform', 'on-form-item-add', this)
        this.initialValue = this.fieldValue
        this.setRules()
      }
    },
    destroyed() {
      this.dispatch('iform', 'on-form-item-remove', this)
    }
  }
</script>

<style>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>

