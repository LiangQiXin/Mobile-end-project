<template>
  <div>
		<div class="page-head">
			 <!-- 左边文字 -->
         <div class="Title_text">每天必抢</div>
				<!-- 搜索框 --> 
				 <div class="middle">
					 <img class="my_position" src="@/assets/search.png" alt="" >
					 <input class="input_Sy" type="text" placeholder="搜索商品">
				 </div>
				<!-- 左边的功能 --> 
				 <div class="right_img">
            <img src="@/assets/TaoBao01.png" alt="">
						<img src="@/assets/TaoBao02.png" alt="">
				 </div>
		</div>
 </div>	
</template>
<script>
export default {
	
}
</script>
<style scoped>
/*顶部icon的尺寸*/
.page-head img{
	width: 25px;
}
/*顶部的布局样式*/
.page-head{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height:50px;
	background: #FF0000;
	position: fixed;
	z-index: 999;
}
/*文字  每天.....*/
.Title_text{
	font-size: 18px;
	font-weight: lighter;
	color:#fff;
}
/*搜索框的小图片*/
.my_position{
	position: absolute;
	top:12px;
	left:100px;
}
.input_Sy{
	padding-left:28px;
	width: 165px;
	height: 25px; 
	border-radius: 10px;
	outline-style: none;
	border:1px solid #fff;
}
.right_img{
	width:58px;
	height: 30px;
	background-color:gray;
	opacity: 0.9;
	border-radius: 8px;
}
</style>