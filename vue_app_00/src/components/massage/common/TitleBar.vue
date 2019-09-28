<template>

  <div>
			<div class="page-head" ref="toTops0">

				 <div class="page-middle ">
							<!-- 搜索框 -->
            <router-link :to="'/'" class="my_a">
							<img :src="leftImg" alt="" class="shangImg">
							<input placeholder="动态搜索" type="text" class="titleLeftImg titleRightImg">
						</router-link>
            <router-link :to="'/Cart'">
						 <img :src="leftImg2" alt=""  class="xiaImg">
            </router-link>
				</div>

				<div class="page-middle1">	
				     <!-- 导航栏右边的功能 -->
						<img :src="rightImg" alt="" slot="icon" @click="add">
					
						<img :src="rightImg2" alt="" slot="icon" style="margin-left:15px;" @click="tasks">	
				</div>

		</div>
		<!-- 隐藏的导航栏 -->
     
				<div class="page2-footer" ref="toTops1">
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
						<img src="../../../assets/search.png" alt="">
					</div>
					<div>
						<img src="../../../assets/jia.png" alt="" class="jiaImg" >
					</div>
				</div>

		<div style="height:40px;"></div>
</div>		
</template>
<script>
export default {
	data() {
		return{
      // scrollTop:0
		}
	},
	methods: {
		// 		 scroll() {
		//     window.onscroll=()=>{
		//       var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		//       console.log(scrollTop);
		// 		if(scrollTop>=100) {
				// this.$refs.toTop0.style.display="none";
				// this.$refs.toTop0.style.transition="all 0.5s linear";
		// 		}else{
          
		// 		}   
		//    }
		//  }
	},
	created() {
  //  this.scroll();
	},
	mounted() {
		 
	},
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
/*顶部icon的尺寸*/
.page-head img{
    width: 25px;
}
/*导航栏样式*/
.page-head{
	display: flex;
	position:fixed;
	z-index:999;
	width:100%;
	align-items: center;
	justify-content:space-between;
	background-color:#0082DF;
	height:60px;
	/* position: relative; */
     /* display: none;   */
} 
.page-middle{
	display: flex;

	z-index:999;
	align-items:center;
	margin-left:10px;
}

.page-middle1{
	margin-right: 30px;
	
}
/*底部功能*/
.page2-footer{
  display: flex;
	align-items: center;
	justify-content: space-around;
 	background-color:#0082DF;
  z-index:px;
  width:100%;
  position: fixed;
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
}	
									  */
	/*搜索框中的图片*/
.shangImg{
	position: absolute;
	top:18px;
	left:25px;
}
.xiaImg{
	position: absolute;
	top:13px;
	left:210px;	
}
/*router-link*/
.my_a{
	text-decoration: none;
}
.page2-footer{
  display: flex;
	align-items: center;
	justify-content: space-around;
 	background-color:#0082DF;
  width:100%;
  height: 60px;
	 /* display: none;  */
}
.page2-footer img{
	width:30px;
} 
.page-footer1{
	display: flex;
}
.page2-footer img.jiaImg{
		width:50px;
}
</style>