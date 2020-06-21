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


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
