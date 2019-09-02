import Vue from 'vue'
import App from './App.vue'
import router from './router'

//1.引入第三方组件库 min-ui
import MintUI from "mint-ui"
//1.2单引入min-ui样式
import "mint-ui/lib/style.css"
//1.3将MinUI注册
Vue.use(MintUI)
//1.4引入字体图标
import "./font/iconfont.css"

//1.5引入axios 配置axios
import axios from 'axios'
//1.6配置请求时保存session信息
axios.defaults.withCredentials=true
//1.7配置请求基础路劲
axios.defaults.baseURL="http://127.0.0.1:8080/"
//注意:地址栏输入
//http://127.0.0.1:8080/
//http://localhost
//1.8注册(把axios放到Vue原型对象当中去)
Vue.prototype.axios=axios;



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
