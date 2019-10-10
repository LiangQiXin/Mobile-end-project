<template>
	<div>
		<!-- <h1>yuebao</h1>nav -->
    <div class="Y-E-B-container0">
			<div class="Y-E-B-container1">
				<img src="@/assets/GuWuChe.png" alt="" @click="back">
				<ul>
					<li>余额宝</li>
					<li>博时现金收益货币A</li>
				</ul>
			</div>
			<div>
				<img src="@/assets/TaoBao01.png" alt="">
			</div>
		</div>
  <!-- 广播 -->
	  <div style="height:60px;"></div>
				<van-notice-bar
			text="国庆假期余额宝收益和转出规则,点此查看"
			left-icon="volume-o"
		/>    
    <div class="Y-E-B-container2">
			<table></table>
      <div class="Y-E-B-container3">
				<div class="Y-E-B-container4">
					<h5>总金额(元)</h5>
					<img src="@/assets/YEB-YJ.png" alt="">
				</div>
				<h1>168.88</h1>
				
				<button class="btn">暂无收益</button>
				<div class="Y-E-B-container5">
					<div>
						<p>累计收益</p>
						<h3>168.88</h3>
					</div>
					<div>
						<p>七日年化(%)</p>
						<h3>8.8888</h3>
					</div>
				</div>
          <div class="btn-button">
						<button>转出</button>
						<button>转入</button>
					</div>	
			</div>
		</div>
		<!-- 百宝箱 -->
		<h3 class="Y-e-b-h3">百宝箱</h3>

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
			this.$router.push("/ZFB");
			//this.$store.commit("changeActive","me")
		}
	},
	created() {
		
	},
	mounted() {
		
	},
}
</script>
<style scoped>
.Y-E-B-container0{
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	height: 60px;
  background-color:#fd6804;
	border-radius: 0.3rem;
	position: fixed;
	z-index: 999; 
}
.Y-E-B-container1{
	display: flex;
	align-items: center;
}
.Y-E-B-container0>div>img{
	width:30px;
	margin: 0 1rem;
}
.Y-E-B-container1>ul>li{
	color:#fff;
	font-weight: lighter;
}
.Y-E-B-container1>ul>li:first-child{
	font-size: 19px;
}
.Y-E-B-container1>ul>li:nth-child(2){
	margin-top:0.3rem;
	font-size: 13px;
}
/*通知内容*/
.van-notice-bar{
	
}
.Y-E-B-container2{
	width:100%;
	height:330px;
	 background:linear-gradient(top,#fd6804 50%, #fff 100%);
}
.Y-E-B-container3{
   width: 330px;
	 height: 300px;
	 background: white;
	 margin:1rem auto; 
	 border:1px solid #ddd;
	 border-radius: 0.3rem;
	 border-bottom: #000;
}
.Y-E-B-container4{
	display: flex;
	align-items: center;
	padding-left: 7rem;
}
.Y-E-B-container3>div>img{
	width:20px;	
}
.Y-E-B-container3>h1{
	margin: 0rem;
	padding-left:6rem; 
	
}

.Y-E-B-container3>button.btn{
	width:150px ;
	height: 35px;
	border-radius: 1rem;
	margin:1rem 5rem;
	font-weight: lighter;
}
.Y-E-B-container5{
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
}
.Y-E-B-container5>div>p,.Y-E-B-container5>div>h3{
	margin:0.3rem 0;
	font-weight: lighter;
}
div.btn-button>button:first-child{
	margin:1rem 1rem 0 2.5rem;
	background:#fef5f0;
	border: 1px solid #fef5f0;
	color:#fd5701;
}
div.btn-button>button:nth-child(2){
	background:#fd5701;
	border: 1px solid #fd5701;
	color:#fff;
}
div.btn-button>button{
	width: 120px;
	height: 50px;
	border-radius: 0.1rem;
}
h3.Y-e-b-h3{
	font-weight: lighter;
	padding-left: 1rem;
}
</style>