import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'
//个人中心页面
import PersonIndex from '@/views/personal/Index'
//编辑资料页面
import EditProfile from '@/views/personal/EditProfile'

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
  },
  {
    path: '/personal',
    name:'PersonindexPage',
    component: PersonIndex,
  },
  { path: '/edit',
  name:'editpage',
  component:EditProfile}
 

]

const router = new VueRouter({
  routes
})

export default router
