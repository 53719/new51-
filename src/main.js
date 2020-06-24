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
import axios from 'axios';
// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000';
// 2. 注册到 Vue 原型上
Vue.prototype.$axios = axios;

// 设置响应式拦截器
// axios.interceptors.response.use()  这个函数可以拦截到所有请求的响应,并且执行逻辑
//我们需要将逻辑函数作为参数传递
// 在入口文件，也就是组件外部，要使用 toast 需要单独引入
import {Toast} from 'vant'
axios.interceptors.response.use(res => {
  console.log('发送了请求');
  
  const {statusCode,message}=res.data
  console.log(statusCode);
  console.log(message);
  if (statusCode && statusCode == '401') {
    // 处理错误，在入口文件如果想要使用 vant ui 弹出窗口、
    // 这里没有 this 也没有 $toast
    // 可以使用单独引入的方式，只使用 Toast
    Toast.fail('用户信息校验失败，重新登录')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    router.replace('/login')
  }
  
  
  //res 是每次请求得到的结果 相当于.then的res还没有到达之前在这里被拦住了
  // 拦截器把结果拦住,卡死整个执行过程,执行我们要的函数以后,需要得用 return放行
  //相当于next()
return res
})

// 路由守卫
// 全局前置路由守卫,会在所有路由发生效果之前进行拦截
// 调用 router 的beforEach的方法
router.beforeEach((to, from, next) => {
  //to 指的是目标来源信息
  //from 指的是来源路由信息
  console.log('to',to);
  console.log('from',from);

  // 如果目的地是个人中心才需要校验
  if (to.name == 'PersonindexPage') {
    const token = localStorage.getItem('token')
    // token存在就放行
    if (token) {
      next()
    } else {
      //否则就跳转到登录页面
      router.push('/login')
    }

  } else {
    console.log('进入了守卫,执行next 才能放行');
    next();
  }

})


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
