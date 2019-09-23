<template>
 <div>
	 <!-- 商品详情nav -->
	 <div class="TaoBao">
				<div class="TBnav">
					<img src="../../../assets/GuWuChe.png" alt="">
					<div><h3>商品详情</h3></div>
				</div>
        <div class="right_img">
					 <img class="border_left" src="@/assets/TaoBao01.png" alt="">

					 <img @click="change" src="@/assets/TaoBao02.png" alt="">
				</div>
		</div>
		<div style="height:55px;"></div>
		<!-- 商品详情正文 -->
		<!-- HTML5新特性 -->
		<div>
			<!-- 1:最外层父元素 -->
			<div class="container">
      <!-- 2:视屏区域 -->
					<video class="videoW" src="../../../assets/x.mp4"  id="v3"  @mouseover="toggle" @mouseout="toggle">
					</video>
				<!-- 3:广告区域 -->
					<img src="../../../assets/Me_LuFei.png" alt="" id="ad">
					<!-- 4:按钮区域 -->
					<a href="javascript:;" id="ctrl" >
						<img    src="../../../assets/play.png" alt="" v-show="show">
					</a>
					<div id="ctrl" style="width:360px;height:200px;position: absolute;top:40px;left:40px;" @mouseover="toggle" @mouseout="toggle"></div>
			</div>
		</div>
 </div> 
</template>
<script>
export default {
	data() {
		return{
			show:false
		}
	},
	 methods: {
		 /*跳转回ZFB*/
		 change() {
			 this.$router.push("/ZFB");
		 },
		 toggle(){
      this.show= !this.show;
			console.log(12)
    },
	 },
	 
}
</script>
<style scoped>
body{
	text-align: center;
}
/*商品详情nav*/
  .TaoBao{
	display: flex;
	justify-content: space-between;
  align-items:center;
	padding:0 1.5rem; 
	background-color: #fd6d04;
	width: 100%;
	height: 48px;
	border-radius: 3px;
	position: fixed;
	z-index: 999;
}

.TaoBao>div>img{
	width: 25px;
}
/*二次弹性为图片与购物车*/
.TaoBao>.TBnav{
   display: flex;
	 align-items: center;
	 justify-content: space-between;
	 width:100px;
}
.TaoBao>.TBnav>div>h3{
	color:white;
}
/*nav的导航右边的功能*/
.right_img{
	width:62px;
	height: 30px;
	background:rgba(0,0,0,0.3);
	border-radius: 0.5rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-right: 3rem;
}
.border_left{
  	border-right:1px solid #ffff;
}
/*视屏部分*/
.container{
	position: relative;
	text-align: center;
}
/*视屏的宽度*/
.videoW{
	width: 23rem;
}
#ctrl{
  position: absolute;  /*子元素绝对定位*/
  top:50%;
	left:50%;
	margin-top:-44px;
	margin-left: -33px;
	z-index: 99;
  /*display: none;   c3的显示与隐藏  */
}
 /* .container:hover>#ctrl{
	display: block;
}  */
/*小路飞(广告)样式*/
#ad{
	position:absolute;
	left: 50%;
	top: 50%;
	border-radius: 50%;
	margin-left:-36px;
	margin-top:-50px; 
}
</style>