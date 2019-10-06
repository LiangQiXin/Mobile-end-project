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
			<div style="height:38px;"></div>
       <div class="HuaBei-text">
				 <h5>通用额度可用(元)</h5>
				 <img src="@/assets/qiandun.png" alt="">
			 </div>
			 <h1>8,888.88</h1>
			 <p>这个月买&nbsp;下个月还0费用</p>
			 <div class="cha-box">
			 <button @click="jump1">查看详情</button>
			 </div>
		</div>
		<!-- 我的账单  我的额度 -->
		 <div class="H-position">
				<div class="H-bgcolor">
					<h3>我的账单</h3>
					<p>还款日10月20号</p>
				</div>
				<div>
					<h3>我的额度</h3>
					<p>通用额度可用8,888.88</p>
				</div>
		</div>		
		<!-- 花呗轮播图 -->
    <mt-swipe :auto="4000">
	<mt-swipe-item v-for="(list,i) of item" :key="i">
		<div >
			<router-link class="flex" :to="'/'">
			<ul class="title">
				<li class="shangtitle">{{list.title1}}</li>
				<li class="xiatitle">{{list.title2}}</li>
			</ul>
			
		<div class="box">
				<img :src="'http://127.0.0.1:8080/'+list.img_url" alt="">
		</div>
    </router-link>
		</div>
		</mt-swipe-item>
</mt-swipe>
<!-- 分期精选 -->
		<div>
			<h3  class="h3-float">分期精选</h3>
			<h5 class="h5-float">更多</h5>
		  <div style="clear: both;"></div>
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
					<swiper-slide>
						<!-- 第一个滑动 --> 
					<div class="H-bg-main">
						<div style="height:10px;"></div>
					  <h3>花呗分期</h3>
           <div class="btn-primary">
						  <button>0利息集合</button>
					 </div>
					 <div class="p-width">
							<h4>分期最划算的不是3期6期12期</h4>
							<p>而是每一期都免息</p>
					 </div>
					</div>	
					</swiper-slide>
					<swiper-slide>

			<!-- 第一个滑动 --> 
					<div class="H-bg-main">
						<div style="height:10px;"></div>
					  <h3>花呗分期</h3>
           <div class="btn-primary">
						  <button>0利息集合</button>
					 </div>
					 <div class="p-width">
							<h4>分期最划算的不是3期6期12期</h4>
							<p>而是每一期都免息</p>
					 </div>
					</div>	

					</swiper-slide>
					<swiper-slide>
            <h5></h5>
			fdsgfdg

					</swiper-slide>
					<swiper-slide>
           <h5></h5>
			gdfg

					</swiper-slide>	
					<!-- Optional controls -->
					<div class="swiper-pagination"  slot="pagination"></div>
					<!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
				</swiper>
		</div>
		<!-- 免息商品 -->
		<div class="H-container-main">

			<div class="H-shangP" v-for="(list,index) of lists" :key="index">
				<img :src="'http://127.0.0.1:8080/'+list.img_url" alt="">
				<button>免息</button>
				<h6 v-text="list.lname"></h6>
				<h5>¥{{list.price}} 
					<span>
						x3期
					</span>
				</h5>
			</div>
		
		</div>
		<div class="HuanYiHuan" @click="HuanYiH">
			<span>换一换</span> 
			<img src="@/assets/H-huan.png" alt="">
		</div>
		<div style="height:80px;"></div>
</div>	
</template>
<script>

export default {
		created() {
		this.loadMore();
		this.loadMore1();
	},
	methods: {
		jump1() {
      this.$router.push('/HBX');
		},
		HuanYiH() {
			this.loadMore1();
		},
		loadMore1() {
			var url="products";
			this.pno++;
			var pageSize=3;
			var obj={pno:this.pno,pageSize}
			this.axios.get(url,{params:obj}).then(res=>{
				console.log(res.data.data);
      this.lists=res.data.data;
			})
		},
		loadMore(){
		var url="data";
		this.axios.get(url).then(res=>{
		//	console.log(res.data.data);
		 var data=res.data.data;
		 this.item=data;
		})
		},
			callback() {

		},
	},
	data() {
		return{
		   item:[
			{title1:"",title2:"",tiem1:"",time2:"",img_url:""}
			],
			swiperOption:{},
			pno:0,
			lists:[{img_url:'',lname:'',price:''}] 
		}
	},

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
 background-color:#fff; 
 z-index: 999;
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
height: 250px;
background:url("../../../assets/Me_bg.jpg") no-repeat;
}
.Hua_bg>div.HuaBei-text{
	display: flex;
	align-items: center;
  justify-content: center;
}
.Hua_bg>div>img{
	width:30px;
}
.HuaBei-text>img{
   position: relative;
	 top:-1rem;
	 left:6rem;
}
.HuaBei-text>h5{
	margin: 0rem 0;
	font-weight: lighter;
	color: #fff;
}
.Hua_bg>h1{
	margin:0rem 0;
	color:#fff;
	font-weight: lighter;
	text-align: center;
}
div.Hua_bg>p{
	font-weight: lighter;
	color:#fff;
	text-align: center;
	margin: 0.5rem;
}
.Hua_bg>.cha-box{
	text-align: center; 
	margin-top:1rem;  
}
.Hua_bg>.cha-box>button{
	width:150px;
	height: 38px;
	border-radius:1rem;
	border:1px solid #fff;
	overflow:hidden;
	outline: none;
	color:#81c6e6;
}
div.H-position{
	position: relative;
	top:-2.5rem;
	left:0rem;	
	display:flex;
	justify-content:space-around;
	text-align: center;
	background-color: #fff;
	border:1px solid #ddd;
	width:330px;
	margin: auto;
	border-radius: 1rem;
}
div.H-bgcolor{
	padding-right: 2.1rem;
	border-right:1px solid #ddd;
}
div.H-position>div>h3,p{
	font-weight:lighter;
  margin:0.9rem 0;
}
/*轮播图复制来的*/
.mint-swipe{
	width:100%;
	height:100px !important;
border-bottom:3px solid #d9d9d9;
border-top:1px solid #d9d9d9;
}

/* 轮播图里面的数据样式 */
.flex{
	display: flex;
	justify-content: space-between;
  align-items: center;
	text-decoration: none;
}
/*去除list-sytle*/
.title{
	list-style: none;
	padding-left:1rem;
}
/*下标题*/
.xiatitle{
	margin-top:13px; 
	font-weight: lighter;
	font-size: 0.9rem;
	color:gray;
} 
.shangtitle{
	font-size:1.2rem;
	color:#000;
}
/* 图片 */
.box>img{
		width:100px;
	height:60px ;
	margin-top:20px;
	padding-right:20px;
}
/*分期精选*/
h3.h3-float{
 float: left;
 padding-left:1rem; 
 font-weight: lighter;
 margin-bottom: 0;
}
h5.h5-float{
	float:right;
	padding-right: 1rem;
	font-weight: lighter;

}
div.H-bg-main{
	width:350px;
	height: 200px;
	 background:url("../../../assets/03.jpg"); 
	margin-left:1rem;
}
.H-bg-main>h3{
	color:#fff;
	padding-left:1rem;
}
.btn-primary{
	padding-left:1rem;
}
.btn-primary>button{
	background-color: #01c1fe;
	border: 1px solid  #01c1fe;
	border-radius: 1rem;
	color:#fff;
	font-weight: lighter;
}
.p-width{
	padding-left:1rem;
}
.H-bg-main>.p-width>h4,.H-bg-main>.p-width>p{
	width: 216px;
	height: 2rem;
	line-height: 2rem;
	margin:0.3rem 0;
	font-weight:lighter;
	color:#fff;
	background-color:#000; 
	border-radius: 0.3rem;
}
div.H-bg-main>.p-width>p{
	width:135px;
	margin:0.1rem 0;
}
div.H-container-main{
	display: flex;
}
div.H-shangP{
	margin-top:1rem;
   width:30%;
	 border:1px solid #ddd;
	 padding:0.3rem;
	 box-sizing: border-box;
}
div.H-shangP:first-child{
	margin-left:1rem;
}
div.H-shangP:not(:first-child){
	margin-left:0.3rem;
}
.H-shangP>img{
	width:100%;
	height: 70px;
	margin-bottom: 0.3rem;
}
.H-shangP>button{
	background: red;
	border-radius: 0.3rem;
	border:1px solid red;
	color: #fff;
	font-weight: lighter;
}
.H-shangP>h6,.H-shangP>h5{
	margin: 0.3rem 0;
	word-wrap: break-word;
	text-align: center;
}
.H-shangP>h5{
	color:red;
	font-size:1rem; 
}
.H-shangP>h5>span{
	color: #000;
	font-size: 0.6rem;
	font-weight: lighter;
}
.HuanYiHuan{
	margin:0.3rem 0;
	text-align: center;
  border-bottom: 1px solid #ddd;
	padding-bottom: 0.3rem;
}
.HuanYiHuan>span{
	font-size: 1.3rem;
}
.HuanYiHuan>img{
	width: 25px;
}
</style>