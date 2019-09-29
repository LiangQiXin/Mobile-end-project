<template>
	<div>
		<!-- 导航条 -->
    <div class="main-CaiFu">
       <div> 
		     <h3>财富</h3>
			 </div>
			 <div>
				 <img src="../../../assets/C_maYi.png" alt="">
				 <img src="../../../assets/search.png" alt=""> 
			 </div>
	  </div>
		<!-- 内容 -->
		<div style="height:40px;"></div>
		<div class="CaiFu-container1">
			<div id="d1">
				<h5>总资产(元)	
					<img src="@/assets/CaiFu00.png" alt=""> 
					<span>&nbsp;&nbsp;
					<img src="@/assets/CaiFu01.png" alt="">保障中</span> &nbsp;&nbsp;
					<span class="spanText">昨天收益</span>
				</h5>
				<ul class="Cf_ullist">
					<li>999999</li>
					<li>+100</li>
				</ul>
			</div>
			<!-- 可以隐藏的钱 -->
			<div id="d2">
				<ul class="Cf_ullist1">
					<li>余额宝</li>
					<li>1,00000.00</li>
					<li>+1000</li>
					<li>基金</li>
					<li>1,00.00</li>
				</ul>
			</div>
			<div id="d3">
			   我的额度
			</div>
        
			<div id="d4">
         <ul class="list-style">
					 <li>花呗</li>
					 <li>可用8,816.88</li>
				 </ul>
				 <ul class="list-style">
					 <li>备用金</li>
					 <li>可用500</li>
				 </ul>
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
/*导航栏nav*/
   div>.main-CaiFu{
		 display:flex;
		 align-items: center;
		 justify-content: space-between;
		 width: 100%;
		 height: 50px;
		 background-color:#0082DF;
		 border-radius: 0.3rem;
		 position: fixed;
		 z-index: 999;
		 
	 }
	
	  div>.main-CaiFu h3{
        padding-left:1rem;
				color:#fff;
		}

	 div>.main-CaiFu img{
		 width:35px;
		 padding-right:1rem;
	 }
/*内容资产的显示*/
div.CaiFu-container1>div#d1{
	height: 80px;
	border: 1px solid #ddd;
	background-color:#1b82d1;
	border-bottom:1px solid #000;
}
.CaiFu-container1>div>h5{
	font-size: 1.2rem;
  font-weight: lighter;
	padding-left:0.9rem;
	margin:1.3rem 0 0.3rem 0;
	color:#fff;
}
.CaiFu-container1>div>h5>img{
   width: 20px;
}
.CaiFu-container1>div>h5>span>img{
	width:10px;
}
.CaiFu-container1>div>h5>span.spanText{
  margin-left:2rem;
}
ul.Cf_ullist{
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding:0 2.5rem 
}
ul.Cf_ullist>li{
	font-size: 1rem;
	color:#fff;
}
/*隐藏的内容*/
div.CaiFu-container1>div#d2,div#d3,div#d4{
	height:48px;
	background: #1b82d1;
	border-bottom: 1px solid#000;
}
ul.Cf_ullist1{
	display: flex;
  justify-content: space-around;
	padding:0.8rem 0;
}
ul.Cf_ullist1>li{
	color:#fff;
	font-weight: lighter;
}
/*我的额度*/
div.CaiFu-container1>div#d3{
	height:48px;
  line-height: 48px;
	padding-left:1rem;
  color: #fff;
}
div.CaiFu-container1>div#d4{
	display: flex;
	justify-content: space-around;
  align-items: center;
}
ul.list-style{
	display: flex;
	align-items: center;
	width: 50%;
	justify-content: space-around;
}
ul.list-style>li:first-child{
	font-weight:lighter;
	color: #fff; 
}
ul.list-style>li:nth-child(2){
	font-size:0.8rem;
	color:#fff; 
	font-weight: lighter;
}
</style>