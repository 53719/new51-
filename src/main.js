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
// 2. 注册到 Vue 原型上
Vue.prototype.$axios = axios;

// 路由守卫
// 全局前置路由守卫,会在所有路由发生效果之前进行拦截
// 调用 router 的beforEach的方法
router.beforeEach((to, from, next) => {
  //to 指的是目标来源信息
  //from 指的是来源路由信息
  console.log(to);
  console.log(from);

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
