import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import FormEx from '../view/form-ex.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/form',
      component: FormEx 
    }
  ]
})

export default router;
