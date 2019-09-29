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
//引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//引入Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
 //注册
Vue.use(VueAwesomeSwiper, /* { default global options } */)



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

//单引轮播图
//import { Swipe, SwipeItem } from 'mint-ui';

//Vue.component(Swipe.name, Swipe);
//Vue.component(SwipeItem.name, SwipeItem);






//功能vuex保存共享数据
//1.9:引入第三方模块
import Vuex from "vuex"
//1.10:注册示例(先注册再创建储存对象)
Vue.use(Vuex)
//1.11:创建储存对象
var store=new Vuex.Store({
  state:{  //集中管理数据方法
    active:"shouye",
  },
  mutations:{  //集中修改数据函数属性
    changeActive(state,value) {
       state.active=value
    }
  },
  getters:{   //集中获取数据函数

  },
  actions:{  //集中保存异步修改数据函数

  },
});
//1.12:将储存对象添加vue示例作为属性


new Vue({
  router,
  render: h => h(App),
   store   //1.12:将储存对象添加vue示例作为属性
}).$mount('#app')
