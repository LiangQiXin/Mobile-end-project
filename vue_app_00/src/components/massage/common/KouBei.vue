<template>
  <div>
		<!-- 花呗导航头 -->
	  <div class="H-main">
      <div class="H-main1">
				<img src="@/assets/H-jt.png" alt="">
				<h4>花呗</h4>
			</div>
			<div class="marign-right">
				<img src="@/assets/HByX.png" alt="">
			</div>
		</div>
		<div style="height:48px;"></div>
		<!-- 下面的背景及余额 -->
		<div class="Hua_bg">
			<div style="height:48px;"></div>
       <div class="HuaBei-text">
				 <h5>通用额度可用(元)</h5>
				 <img src="@/assets/qiandun.png" alt="">
			 </div>
		</div>
	</div>	
</template>
<script>

export default {
	data() {
		return{
		    
		}
	}
}
</script>
<style scoped>
.H-main{
	display: flex;
	align-items:center;
  justify-content: space-between;
	width: 100%;
	height: 48px;
 position: fixed;
 border:1px solid #ddd;
 border-radius: 3px;
}
.H-main1{
	display: flex;
  justify-content: space-around;
	align-items:center;
	width: 100px;
}
.H-main>div img{
   width: 30px;
}
.marign-right{
	margin-right: 2rem;
}
/* <!-- 下面的背景及余额 --> */
.Hua_bg{
width: 100%;
height: 200px;
background:url("../../../assets/Me_bg.jpg")
}
.Hua_bg>div.HuaBei-text{
	display: flex;
	align-items: center;
  justify-content: center;
}
.Hua_bg>div>img{
	width:30px;
}
</style>