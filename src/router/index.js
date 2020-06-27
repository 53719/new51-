import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
//个人中心页面
import PersonIndex from '@/views/personal/Index'
//编辑资料页面
import EditProfile from '@/views/personal/EditProfile'
//我的关注
import follows from '@/views/personal/follows'
//测试页面
import Test from '@/views/Test'

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
    name: 'RegisterPage',
    component: Register
  },


  //个人中心
  {
    path: '/personal',
    name: 'PersonindexPage',
    component: PersonIndex,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit',
    name: 'editpage',
    component: EditProfile,
    meta: {
      auth: true
    }
  },
  {
    path: '/follows',
    name: 'followpage',
    component: follows
  },

  //测试页面
  {
    path: '/test',
    name:'testPage',
    component: Test
  },
]

const router = new VueRouter({
  routes
})

export default router
