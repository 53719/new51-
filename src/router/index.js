import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'LoginPage',
    component: Login
  },
  {
    path: '/Register',
    name:'RegisterPage',
    component: Register
  }

]

const router = new VueRouter({
  routes
})

export default router
