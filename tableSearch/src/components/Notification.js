import Vue from 'vue'
import AlertComponent from './AlertComponent'

const props = {}

const Instance = new Vue({
  render(h) {
    return {
      h(AlertComponent, {
        props
      })
    }
  }
})

const component = Instance.$mount()
document.body.appendChild(component.$el)

///////////////////////




