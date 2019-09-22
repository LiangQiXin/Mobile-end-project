<template>
 <div>
	 <!-- 商品详情nav -->
	 <div class="TaoBao">
				<div class="TBnav">
					<img @click="change" src="../../../assets/GuWuChe.png" alt="">
					<div><h3>商品详情</h3></div>
				</div>
        <div class="right_img">
					 <img class="border_left" src="@/assets/TaoBao01.png" alt="">

					 <img src="@/assets/TaoBao02.png" alt="" @click="guanBi">
				</div>
		</div>
		<div style="height:55px;"></div>
		<!-- 商品详情正文 -->
		<!-- HTML5新特性 -->
		<div>

		</div>
 </div> 
</template>
<script>
export default {
	
}
</script>
<style scoped>
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
</style>