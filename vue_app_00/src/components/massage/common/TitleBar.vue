<template>

  <div>
			<div class="page-head">
					  <div class="page-middle ">
            <router-link :to="'/'" class="my_a">
						<img src="../../../assets/search.png" alt="" style="width:25px;" class="shangImg">
						<input placeholder="动态搜索" type="text" class="titleLeftImg titleRightImg">
						</router-link>
            <router-link :to="'/Cart'">
						<img src="../../../assets/yuyin.png" alt="" style="width:25px;" class="xiaImg">
             </router-link>
						</div>

					  <div class="page1-footer">	
				     
						<img :src="rightImg" alt="" slot="icon" style="width:25px;" @click="add">
					
						<img :src="rightImg2" alt="" slot="icon" style="width:25px;margin-left:15px;" @click="tasks">
						
						</div>	
			 </div>
			<div>
		</div>
		<div class="page2-footer">
       <div>
				 <img src="../../../assets/saoMa.png" alt="">
			 </div>
			 <div>
				 <img src="../../../assets/pay.png" alt="">
			 </div>
			 <div>
				 <img src="../../../assets/qian.png" alt="">
			 </div>
			 <div>
				 <img src="../../../assets/kabao.png" alt="">
			 </div>
		</div>
</div>
		
		
</template>
<script>
export default {
	props:{  //声明父组件接收的数据
  leftImg:{default:""},
	leftImg2:{default:""},
	rightImg:{default:""},
	rightImg2:{default:""},
	 tasks:{type:Function},
		add:{type:Function}
	}
}
</script>
<style scoped>
/*导航栏样式*/
.page-head{
	display: flex;
	position:fixed;
	z-index:999;
	width:100%;
	align-items: center;
	justify-content:space-between;
	background-color:#0082DF;
	height:50px;
	position: relative;
}
.page-middle{
	display: flex;
	align-items:center;
	margin-left:10px;
}

.page1-footer{
	margin-right: 30px;
	
}
/*底部功能*/
.page2-footer{
  display: flex;
	align-items: center;
	justify-content: space-around;
 	background-color:#0082DF;
 z-index: 100px;
 width:100%;
 
}
.page2-footer img{
	width:38px;

} 
/* <span>
							<img :src="leftImg" alt="" slot="icon" style="width:25px;">
							</span> */
		/* <span>
							<img :src="leftImg2" alt="" slot="icon" style="width:25px;">
							</span>	
												 */
 .titleLeftImg{
	/* background: #fff url("../../../assets/search.png")no-repeat 1%  center; */
	background-size:25px 25px;
	box-sizing: border-box;
	padding-left:28px;
	width:220px;
	height:28px;
	border-radius: 5px;
	margin-left:10px;
	border:1px solid #fff;
}		 
/* .titleRightImg{
	background:#fff url("../../../assets/yuyin.png") no-repeat 97% center;
	background-size:25px 25px;
}										  */
.shangImg{
	position: absolute;
	top:13px;
	left:25px;
}
.xiaImg{
	position: absolute;
	top:13px;
	left:210px;	
}
.my_a{
	text-decoration: none;
}
</style>