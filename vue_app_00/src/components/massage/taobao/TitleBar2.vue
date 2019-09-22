<template>
  <div>
		<div class="page-head">
			 <!-- 左边文字 -->
         <router-link :to="'/'" class="Title_text">每天必抢</router-link>
				<!-- 搜索框 --> 
				 <router-link :to="'/'" class="middle">
					 <img class="my_position" :src="milldleImg" alt="" >
					 <input class="input_Sy" type="text" placeholder="搜索商品">
				 </router-link>
				<!-- 左边的功能 --> 
				 <div class="right_img">
            <img class="border_left" :src="rightImg1" alt="" @click="tasks">

						<img :src="rightImg2" alt="" @click="guanBi">
				 </div>
		</div>
		<div style="height:48px;"></div>
 </div>	
</template>
<script>
export default {
	props:{
		//父组件GDW传值
		milldleImg:{default:""},  
		rightImg1:{default:""},
    rightImg2:{default:""},
		tasks:{type:Function},
		guanBi:{type:Function}
	}
}
</script>
<style scoped>
/*去除下划线a*/
.Title_text,.middle{
	text-decoration: none;
}
/*顶部icon的尺寸*/
.page-head img{
	width: 25px;
	height: 25px;
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
	border-radius:3px; 
}
/*文字  每天.....*/
.Title_text{
	font-size: 1.3rem;
	font-weight: lighter;
	color:#fff;
}
/*搜索框的小图片*/
.my_position{
	position: absolute;
	top:0.9rem;
	left:6.8rem;
}
/*搜索框样式*/
.input_Sy{
	padding-left:28px;
	width: 165px;
	height: 25px; 
	border-radius: 0.7rem;
	outline-style: none;
	border:1px solid #fff;
}
/* 搜索框中右边的功能 */
.right_img{
	width:62px;
	height: 30px;
	background:rgba(0,0,0,0.3);
	border-radius: 0.5rem;
	display: flex;
	justify-content: space-around;
	align-items: center;

}
/*中间的一条线*/
.border_left{
	border-right:1px solid gray;
}
</style>