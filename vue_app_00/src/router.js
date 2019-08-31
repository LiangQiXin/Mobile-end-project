import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//引入自定义组件
//支付宝
import ZFB from "./components/massage/ZFB.vue" 




Vue.use(Router)
export default new Router({
  routes: [
    //配置自定义组件路径
    //浏览器:http://127.0.0.1:3001/#/ZFB
    {path:'/ZFB',component:ZFB},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
