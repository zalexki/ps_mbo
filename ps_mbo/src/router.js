import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ModulesList from './views/ModulesList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ModulesList
    },
  ]
})
