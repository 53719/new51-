import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入 vant ui
// 1. 引入 vant ui 组件库
import Vant from 'vant';
// 2. 引入对应的 css 文件
import 'vant/lib/index.css';
// 3. 注册组件
Vue.use(Vant);

// 引入请求库 axios
// 1. 引入库
import axios from 'axios'
// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 设置请求拦截器
// 跟响应拦截非常像,只不过是 request 而不是 response
// 另外拦截的也不是结果, 而是请求的设置
axios.interceptors.request.use(config=>{

  // 判断如果本地储存有 token 但是请求配置没有, 就要加上
  if (localStorage.getItem('token') && !config.headers.Authorization) {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token')
  }

  // 跟响应拦截器一样, 拦住了就必须 return 放行
  return config
})

// // 设置响应拦截器
// axios.interceptors.response.use() 这个函数可以拦截到所有请求的响应，并执行逻辑
// 我们需要将逻辑函数作为参数传入
// 在入口文件，也就是组件外部，要使用 toast 需要单独引入
import { Toast } from 'vant'
axios.interceptors.response.use(res=>{
  console.log('发送了请求');
  
  // 对获取的数据进行处理
  const {statusCode, message} = res.data
  console.log(statusCode);
  console.log(message);
  
  if (message=='用户信息验证失败') {
    // 处理错误，在入口文件如果想要使用 vant ui 弹出窗口、
    // 这里没有 this 也没有 $toast
    // 可以使用单独引入的方式，只使用 Toast
    Toast.fail('用户信息校验失败，重新登录')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    router.replace('/login')
  }
  
  // res 是每次请求得到的结果，相当于.then 的 res 还没到达之前在这里被拦住了
  // 拦截器把结果拦住，卡死整个执行过程，执行完我们要的函数以后， 必须 return 出去放行
  // 相当于路由守卫 next
  return res
})

// 2. 注册到 Vue 原型上
Vue.prototype.$axios = axios



// 路由守卫
// 全局前置路由守卫，会在所有路由发生变化之前进行拦截
// 调用 router 的 beforeEach 方法
// router.beforeEach() 拦截所有跳转，跳转之前都会执行一个函数，我们要作为参数传进去
router.beforeEach((to, from, next)=>{
  // //写法一 直接判断 to.name
  // if (to.name == 'personalPage' || to.name == 'editPage') {

  // // 另外一种写法，是将需要校验的路由封装在一个数组中
  // var pageNeedAuth = [
  //   'editPage',
  //   'personalPage'
  // ]
  // // 如果在这个数组中能够找到 to.name 就证明需要校验
  // if(pageNeedAuth.indexOf(to.name) >= 0) {
  // 第三种判断方式， 直接在路由配置时， 添加 meta 数据
  // 就可以在这里进行判断
  if (to.meta.auth) {
    const token = localStorage.getItem('token')
    if (token) {
      next();
    }else {
      router.push('/login')
    }
  }else {
    next();
  }
  // 不然直接放过哦


})



Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')