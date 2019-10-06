<template>
<div>
<div class="container">
	<div class="main">
    <!-- 一个程序 -->
		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/1000.png" alt="">
		<h6>转账</h6>
		</router-link>
	  </div>

		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/ka.png" alt="">
		<h6>信用卡还款</h6>
		</router-link>
		</div>

		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/chongzhi.png" alt="">
		<h6>充值中心</h6>
		</router-link>
		</div>

		<div>
		<router-link class="mainImg" :to="'/YEB'">
		<img src="../../../assets/yuEbao.png" alt="">
		<h6>余额宝</h6>
			</router-link>
		</div>
	</div>
	<div class="main">
    <!-- 一个程序 -->
		<div>
			<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/yunDong.png" alt="">
		<h6>运动</h6>
		</router-link>
	  </div>

		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/didi.png" alt="">
		<h6>滴滴出行</h6>
		</router-link>
		</div>

		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/zhiMa.png" alt="">
		<h6>芝麻信用</h6>
		</router-link>
		</div>

		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/shangjia.png" alt="">
		<h6>商家服务</h6>
		</router-link>
		</div>
	</div>
	<div class="main">
    <!-- 一个程序 -->
		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/didi.png" alt="">
		<h6>滴滴出行</h6>
		</router-link>
		</div>

		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/yunDong.png" alt="">
		<h6>运动</h6>
		</router-link>
	  </div>

		<div>
		<router-link class="mainImg" :to="'/HBX'">
		<img src="../../../assets/huabei.png" alt="">
		<h6>花呗</h6>
		</router-link>
		</div>

		<div>
		<router-link class="mainImg" :to="'/'">
		<img src="../../../assets/gengduo.png" alt="">
		<h6>更多</h6>
		</router-link>
		</div>

	</div>
</div> 
<div style="60px;"></div>

	<router-link :to="'/'" class="middle">
    <div class="leftimgtext">
     <!-- 左侧图片 -->
		 <img src="../../../assets/MaYi.png" alt="" class="imgstyle">

		 <ul class="title">
         <li class="titleable">{{titleable}}</li>
				 <li class="subtitle">{{subtitle}}</li>
		 </ul>
		</div>
	  <!-- (2)右侧时间 -->
		<div class="timetext">
		<span class="sendtime">{{sendtime}}</span>
		<span class="sendtime2">{{sendtime2}}</span>
		</div>
	</router-link>	

</div>
</template>
<script>
export default {
 props:{
	 titleable:{default:""},
	 subtitle:{default:""},
	 sendtime:{default:""},
	 sendtime2:{default:""}
 }
}
</script>
<style scoped>
.container{
	  
		border-bottom:3px solid #d9d9d9;
}
/* 一个小程序 */
.main{
	display: flex;
	justify-content:space-around;
	text-align: center; 
	margin-bottom: 8px;
	
}

  .mainImg>img{
		width: 30px;
		padding:8px ;
		
	}
	/*字体大小*/
	.mainImg>h6{
		margin:0px;
		margin-left:5px;
	  font-size: 0.8rem;
		color:#000;
    font-weight: lighter;
	}
	/*router-link*/
	.mainImg{
		text-decoration: none;
	}
	/* 下面消息 */
	.middle{
		display: flex;
    justify-content:space-between;
		align-items:center;
		border-bottom:3px solid #d9d9d9;
		text-decoration: none;
	}
	/* 左侧图片与文字区域 */
	.leftimgtext{
		display:flex;
		align-items:center;
		padding-left:5px;
	  
	}
	/* 图片 */
	.imgstyle{
		width:50px;
		height:50px;
		
	 border-radius: 50%;
	border:1px solid  #d9d9d9;	
	}
	.title{
		font-weight:lighter;
		color:gray;
	}
	.subtitle{
		margin-top:3px;
	}
	.sendtime2{
		margin-top:3px;
	}
	/* 时间文字 */
	.timetext{
		display: flex;
    flex-direction: column;
		margin-right:50px;
		font-weight:lighter;
		color:gray;
		font-size:0.9rem;
	}

</style>