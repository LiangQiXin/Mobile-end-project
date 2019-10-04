<template>
	<div>
		<!-- <h3>花呗组件</h3> -->
	
			<div class="H-B-NAV">
				<div class="H-B-NAV1" @click="back">
					<img src="@/assets/GuWuChe.png" alt="">
					&nbsp;&nbsp;
					<h3>我的额度</h3>
				</div>
				<div>
					<h4>明细</h4>
				</div>
			
			</div>

			<div style="height:130px;	background: #0d8de4;
				border:1px solid #0d8de4;"></div>
				<!--  -->
	  <div class="H-B-main">
			<h3>下午好,梁启芯</h3>
			<div class="H-B-main1">
				<img src="@/assets/huabei.png" alt="">
				<h5>任务</h5>
			</div>
		</div>
		
	</div>
</template>
<script>
export default {
	data() {
		return{

		}
	},
	methods: {
		back() {
    this.$router.go(-1);
		}
	},
}
</script>
<style scoped>
  .H-B-NAV{
		display: flex;
		justify-content:space-between;
		width:100%;
		padding:0 1rem;
		height: 60px;
		border:1px solid #0d8de4;
		border-radius: 0.3rem;
		background: #0d8de4;
		position: fixed;
		z-index: 999;
	}
 .H-B-NAV>div>h4,.H-B-NAV>div>h3{
	 color:#fff;
	 font-weight: lighter;
 }
 .H-B-NAV>div>h4{
	 padding-right: 2rem;
 }
	.H-B-NAV1{
		display: flex;
		align-items: center;
	}
	.H-B-NAV1>img{
		width:30px;
	}
	/*     */
	.H-B-main{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left:1rem;
		background-color:#0d8de4; 
	}
.H-B-main>h3,.H-B-main>.H-B-main1>h5{
	color:#fff;
	font-weight: lighter;
}

	.H-B-main>div>img{
		width:30px;
		padding-right:0.3rem;
	}
	.H-B-main1{
		display: flex;
		align-items: center;
    width: 100px;
	}
</style>