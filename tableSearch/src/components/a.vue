<template>
  <div>
    coma
    <com-b></com-b>
  </div>
</template>

<script>
  import ComB from '../components/b.vue'
  export default {
    name: 'componenta',
    components: {
      ComB
    },
    data() {
      return {
        title: 'vue.js'
      }
    },
    methods: {
      sayHello() {
        alert('hello')
      }
    },
    inject: ['app'],
    mounted() {
      console.log(this.app.name)
    }
  }
</script>


<style scoped>
  
</style>


