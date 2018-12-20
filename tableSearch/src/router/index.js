import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Form from '../components/form/form.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/form',
      component: Form 
    }
  ]
})

export default router;
