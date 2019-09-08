<template>
	<div class="container">
		<h3>每天必抢<span>淘宝提供服务</span><span class="textright"><img src="../../../assets/xiaochacha.png" alt="" style="width:15px;"></span></h3>

    <div class="product">
       <div class="goods-item">
         <img src="../../../assets/4000.png" alt="">
				 <!-- 商品名称 -->
				 <h4>hollowddddd</h4>
				 <!--价格-->
				 <div class="info">¥8888</div>
			 </div><!--商品结束-->
			 <div class="goods-item">
         <img src="../../../assets/4000.png" alt="">
				 <!-- 商品名称 -->
				 <h4>hollowddddd</h4>
				 <!--价格-->
				 <div class="info">¥8888</div>
			 </div><!--商品结束-->
			 <div class="goods-item">
         <img src="../../../assets/4000.png" alt="">
				 <!-- 商品名称 -->
				 <h4>hollowddddd</h4>
				 <!--价格-->
				 <div class="info">¥8888</div>
			 </div><!--商品结束-->
			 <div class="goods-item">
         <img src="../../../assets/4000.png" alt="">
				 <!-- 商品名称 -->
				 <h4>hollowddddd</h4>
				 <!--价格-->
				 <div class="info">¥8888</div>
			 </div><!--商品结束-->
			 <div class="goods-item">
         <img src="../../../assets/4000.png" alt="">
				 <!-- 商品名称 -->
				 <h4>hollowddddd</h4>
				 <!--价格-->
				 <div class="info">¥8888</div>
			 </div><!--商品结束-->
			 <div class="goods-item">
         <img src="../../../assets/4000.png" alt="">
				 <!-- 商品名称 -->
				 <h4>hollowddddd</h4>
				 <!--价格-->
				 <div class="info">¥8888</div>
			 </div><!--商品结束-->

		</div>
		

	</div>
</template>
<script>
export default {
	
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
	height: 300px;
	border:1px solid red;
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
  border:1px solid #ccc;
	border-radius:5px;
	margin:2px 0;
	padding:2px;
	box-sizing: border-box;
	height: 130px;
}
/*图片尺寸*/
.goods-item img{
	width:100%;
}
.goods-item .info{
	color:red;
	font-size:0.9rem;
}
h4{
	margin:10px 0; 
}
</style>