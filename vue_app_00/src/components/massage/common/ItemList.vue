<template>
<div>
	 <!-- <h2>itemList为临时设置为全局组件</h2> -->
    <item :titleable="item[0].title1" :subtitle="item[0].title2" :sendtime="item[0].tiem1" :sendtime2="item[0].time2"></item>
   <!--四条数据-->
	 <carousel :item="item"></carousel>
	 <!-- 六条数据 -->
   <product></product>
	 <div style="100px;"></div>
	 
</div>
</template>

<script>
//(1)引入子组件
import Item from "./Item.vue"
//(2)引入子组件
import Carousel from "./carousel"
//(3)引入
import Product from "./Product"

export default {
	created() {
		this.loadMore();
	},
	methods: {
		loadMore(){
		var url="data";
		this.axios.get(url).then(res=>{
		//	console.log(res.data.data);
		 var data=res.data.data;
		 this.item=data;
		})
		}
	},
	data() {
		return {
		item:[
			{title1:"",title2:"",tiem1:"",time2:"",img_url:""}
			]
		}
	},
//(2)注册组件
  components:{
    "item":Item,
		"carousel":Carousel,
    "product":Product
 }
}
</script>
<style scoped>

</style>