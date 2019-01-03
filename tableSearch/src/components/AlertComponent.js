import Vue from 'vue'

const AlertComponent = Vue.extend({
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: 'Hello, Aresn'
    }
  }
})

// 1
const component = new AlertComponent().$mount()
document.body.appendChild(component.$el)
// 2
new AlertComponent().$mount('#app')
// 3
new AlertComponent({el: '#app'})
