import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//引入自定义组件
//ZFB
import ZFB from "./components/massage/ZFB.vue" 
//ZFB面板一
import ItemList from "./components/massage/common/ItemList.vue"
//ZFB面板二
import Caifu from "./components/massage/common/Caifu.vue"
//ZFB面板三
import KouBei from "./components/massage/common/KouBei.vue"
//ZFB面板四
import Pengyou from "./components/massage/common/Pengyou.vue"
//ZFB面板五
import Me from "./components/massage/common/Me.vue"
//登录组件
import Login from "./components/massage/common/Login.vue"
//商品列表
import Products from "./components/massage/common/Products-item.vue"
//购物车组件
import Cart from "./components/massage/common/Cart.vue"
//商品详情页
import PlistItems from "./components/massage/taobao/PlistItems"
//GDW提供服务器
import GDW from "./components/massage/GDW.vue"
//花呗组件
import HuaBeiX from "./components/massage/zujian/HuaBeiX"
//余额宝组件
import yuebao from "./components/massage/zujian/yuebao"

Vue.use(Router)
export default new Router({
  routes: [
    //配置自定义组件路径
    //浏览器:http://127.0.0.1:3001/#/ZFB
    {path:'/YEB',component:yuebao},
    {path:'/HBX',component:HuaBeiX},
    {path:'/PLIS/:lid',component:PlistItems,props:true},
      //淘宝首页
    {path:'/GDW',component:GDW},
    {path:'/Cart',component:Cart},
    {path:'/Products',component:Products},
    {path:'/Me',component:Me},
    {path:'/Pengyou',component:Pengyou},
    {path:'/KouBei',component:KouBei},
    {path:'/Caifu',component:Caifu},
    //zfb首页的内容
    {path:'/ItemList',component:ItemList},
    {path:'/Login',component:Login},
    //zfb首页
    {path:'/ZFB',component:ZFB},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
