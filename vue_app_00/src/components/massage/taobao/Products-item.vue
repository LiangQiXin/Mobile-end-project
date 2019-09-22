<template>
	<div class="product-app">
	<!-- <h1>商品列表</h1> -->
	<!-- <h5>每天必抢</h5> -->
  <!-- 此div表示一个商品 循环 -->
    
		<div  class="goods-item" v-for="(list,i) of lists" :key="i">
		<router-link :to="'/'"  class="text-a">
		<!-- 1:商品图片 -->
		<img :src="'http://127.0.0.1:8080/'+list.img_url" alt="">
		<!-- 2:商品名称 -->
		<h3>{{list.lname}}</h3>
		<!-- 3:商品价格 -->
		<div class="info">¥{{list.price}}</div>
		</router-link>	
		<!-- 4:加入购物车 -->
		<mt-button @click="addcart" :data-lid="list.lid" :data-price="list.price" :data-lname="list.lname" :data-img_url="list.img_url"
		:data-is_checked="list.is_checked"
		>加入购物车</mt-button>
		</div><!-- 商品结束 -->
	

		<mt-button size="large" @click="loadMore">加载更多</mt-button>
		<mt-button @click="jumpCart">查看购物车</mt-button>
		<div style="height:100px"></div>
	</div>
</template>
<script>

export default {
	data(){
		return{
			lists:[],   //保存服务器返回商品列表
			pno:0      //当前页码
		}
	},
	created() {
		//调用函数
		this.loadMore();
	},
	methods: {
		jumpCart(){
			//功能:跳转购物组件
			this.$router.push("/Cart");
		},
    addcart(e){  //点击的是当前按钮(获取当前值)
      //功能:将商品添加至购物车
			//###1:获取添加购物车按钮的数据
			var lid=e.target.dataset.lid;
			var lname=e.target.dataset.lname;
		 var price=e.target.dataset.price;
		 var img_url=e.target.dataset.img_url;
		 var is_checked=e.target.dataset.is_checked;
		// console.log(lid+"|"+lname+"|"+price+"|"+img_url+"|"+is_checked);
		 //2:创建url将数据发送给服务器
      var url="addcart";
			var obj={lid,lname,price,img_url,is_checked};
			//#3:发送ajax请求获取
			this.axios.get(url,{params:obj}).then(res=>{
				//服务器端res.send 回-1作为判断是否登录
        if(res.data.code==-1){
					//显示一个提示框
					this.$messagebox("消息","请先登录").then(res=>{
						//回退:跳转登录组件
						this.$router.push("/Login");
					});
				}else if(res.data.code==-2){
					this.$$messagebox("消息","添加失败");
				}else{
					this.$messagebox("消息","添加成功");
				}
				 // console.log(res);
        //4:获取服务器返回数据 
        //5:-1  提示请先登录 
        //  -2  添加失败
        //  1   添加成功
			});
		},
		loadMore(){
			//1:创建url地址
			var url="products";
			//1.1:将当前页码加一
			this.pno++;
			//2:发送ajax请求获取第一页数据
			this.axios.get(url,{params:{pno:this.pno}}).then(res=>{
				console.log(res.data.data);
				//数组拼接操作
				var rows=this.lists.concat(res.data.data);
				//赋值
				this.lists=rows;
			})
		}
	},
}
</script>
<style scoped>
/*最外层父元素:弹性布局*/
 .product-app{
	 display:flex;
   flex-wrap:wrap;  /*指定子元素换行*/
   justify-content:space-between;
	 padding:4px;   /*内边距4*/
 }
 /*修饰当前商品 w-49%*/
 .goods-item{
   width:49%;
	 border:1px solid #ccc;  /*商品灰色边框*/
	 border-radius:5px;
   margin:2px 0;
	 padding:2px;
	 box-sizing: border-box;
	 display: flex;
	 flex-direction:column;    /*商品内容按列排放*/
	 min-height:249px;  /*最小高度为249px*/ 
	 text-align: center;
 }
.text-a{
	text-decoration:none;
 
}

 /*3:修饰当前商品中图片 10:18*/
  .goods-item img{
width: 100%; 
}
/*4:修饰当前商品价格*/
.goods-item .info{
	color:red;
	font-size:19px;
}
h3{
	font-weight: lighter;
	color:#000;
}
</style>