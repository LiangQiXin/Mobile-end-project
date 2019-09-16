<template>
	<div class="container">
		<h3>每天必抢<span>淘宝提供服务</span><span class="textright"><img src="../../../assets/xiaochacha.png" alt="" style="width:15px;"></span></h3>

    <div class="product">
		    	
       <router-link :to="'/Products'" class="goods-item" v-for="(list,i) of lists" :key="i">
         <img :src="'http://127.0.0.1:8080/'+list.img_url" alt="">
				 <!-- 商品名称 -->
				 <h5>{{list.lname}}</h5>
				 <!--价格-->
				 <div class="info">¥{{list.price}}</div>
       </router-link><!--商品结束-->
			 
		</div>
	</div>
</template>
<script>
export default {
   data(){
		 return{
      lists:[{lid:"",lname:"",price:"",img_url:""}]
		 }
	 },
	//加载组件时调用加载数据
	created() {
		this.loadMore();
	//	console.log(this.img_url);
	},
	//封装ajax
	methods: {
		loadMore(){
			var url="product";
			this.axios.get(url).then(res=>{
				//console.log(res.data.data);
       this.lists=res.data.data;
			})
		}
	},
}
</script>
<style scoped>
/* 标题字体 */
h3{
	padding-left:7px;
	font-weight:500;
}
 span{
	 font-weight:lighter;
	 font-size:0.8rem;
	 color:gray;
	 margin-left:5px;
 }
 .textright{
	 margin-left:170px;
	
 }
 /*商品:最外层父元素:弹性布局*/
.product{
	width:345px;
  height: 380px;
	border:1px solid #d9d9d9;
	text-align: center;
	margin-left:15px;
	display: flex;
	flex-wrap:wrap;   /*指定元素换行*/
  justify-content: space-between;
	padding:4px;    /*内边距*/
}
/*修饰当前商品*/
.goods-item{
	width:32%;
  
	border-radius:5px;
	margin:2px 0;
	padding:2px;
	box-sizing: border-box;
	height: 150px;
 text-decoration: none;
}
/*图片尺寸*/
.goods-item img{
	width:100%;
}
.goods-item .info{
	color:red;
	font-size:0.9rem;
}
h5{
	margin:10px 0; 
	font-weight:500;
	color:#000;
}
.goods-item>img{
  height: 68px;
}
</style>