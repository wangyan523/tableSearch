<template>
  <div @click="handleComBClick">componentb</div>
</template>

<script>
import mixin_emmiter from '../mixins/emitter.js'
export default {
  name: 'componentb',
  methods: {
    showMessage(text) {
      console.log(text)
    },
    handleComBClick() {
      this.dispatch('App', 'app-click', 'hello, app')
    }
  },
  mixins: [mixin_emmiter],
  mounted() {
    this.$on('com-click', this.showMessage)
  }
}
</script>

<style scoped>

</style>


