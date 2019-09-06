<template>
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
		<router-link class="mainImg" :to="'/'">
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
		<router-link class="mainImg" :to="'/'">
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
	<div class="middle">
    <h6></h6>
	</div>
</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container{
		border-bottom:1px solid #d9d9d9;
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
</style>