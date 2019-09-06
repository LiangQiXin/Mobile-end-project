import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//引入自定义组件
//ZFB
import ZFB from "./components/massage/ZFB.vue" 
//ZFB面板一
import ItemList from "./components/massage/common/ItemList.vue"
//登录组件
import Login from "./components/massage/common/Login.vue"


Vue.use(Router)
export default new Router({
  routes: [
    //配置自定义组件路径
    //浏览器:http://127.0.0.1:3001/#/ZFB
    {path:'/ItemList',component:ItemList},
    {path:'/Login',component:Login},
    {path:'/ZFB',component:ZFB},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
