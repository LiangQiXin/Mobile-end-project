<template>
  <div>
	  <!-- <h5>我是朋友</h5>	 -->
		<div class="P-nav-title">
			<div><h3>朋友</h3></div>
			<div class="img-right">
				<img src="@/assets/search.png" alt="">
					<img src="@/assets/saoMa.png" alt="">
						<img src="@/assets/P_JIA.png" alt="">
			</div>
		</div>
		<div style="height:75px;"></div>
		<!-- 小程序 -->
		<div class="xiaoChengXu">

			<div class="xiaoChXu">
				<img src="@/assets/P-SH.png" alt="">
				<h4>生活号</h4>
				<p>你有新通知</p>
			</div>
			<div class="xiaoChXu">
				<img src="@/assets/P-XchX.png" alt="">
				<h4>小程序</h4>
				<p>发现更多服务</p>
			</div>
			<div class="xiaoChXu">
				<img src="@/assets/P-SH-icon.png" alt="">
				<h4>生活圈</h4>
				<p>你有朋...更新动态</p>
			</div>

		</div>
		<!-- 朋友及通知 -->
		<div class="P-contaier-main"> 

			<div class="P-contaier-main1">
        <div class="P-contaier-main2">
						<img src="@/assets/P-SH-icon.png" alt="">
						<ul>
							<li>芝麻信用</li>
							<li>tfrjdrfyjhrfhj</li>
						</ul>
        </div>
				<div>
					<p>17:00</p>
				</div>
			</div>

		</div>
	</div>	
</template>
<script>
export default {
	
}
</script>
<style scoped>
/*nav导航条*/
.P-nav-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding: 0 1rem;
	width:100%;
	height: 60px;
	border:1px solid #ddd;
	background-color:#1b82d1; 
	border-radius: 0.2rem;
	position: fixed;
	z-index: 999;
}

.P-nav-title>div>h3{
	font-weight: lighter;
	color:#fff;
}
.img-right{
	margin-right:2rem;
}
.P-nav-title>div>img{
	width:30px;
	margin-left:0.5rem;
}
/*下面的小程序*/
.xiaoChengXu{
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom:10px solid #ddd;
}
.xiaoChengXu>.xiaoChXu{
	text-align: center;

}
.xiaoChengXu>.xiaoChXu>img{
	width:45px;
}
.xiaoChengXu>.xiaoChXu>h4,.xiaoChXu>p{
	margin: 0.3rem;
}
.xiaoChengXu>.xiaoChXu>p{
	font-size:0.8rem;
	font-weight: lighter;
	padding-bottom: 0.5rem; 
}
/*朋友及通知*/
.P-contaier-main1{
	display: flex;
	justify-content: space-between;
	padding:0.3rem 1rem;
  border-bottom: 1px solid #ddd;
}

.P-contaier-main2{
	display: flex;
	align-items: center;
}
.P-contaier-main2>ul{
	padding-left:0.5rem;
}
.P-contaier-main2>img{
	width: 50px;
}
.P-contaier-main1>div>p{
	margin:0.3rem;
}
</style>