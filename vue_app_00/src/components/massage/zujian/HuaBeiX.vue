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
	<!-- 通用额度 -->	
	<div class="zJ-title">
	 <h2>通用额度</h2>
   <img src="@/assets/Me_JT2.png" alt="">
	 </div>
	   <div style="text-align: center;">

       <canvas id="c3" width="375" height="275" ref="c3">

			 </canvas>
		 </div>
		 <!-- 总额度 -->
		 <div class="H-money">
			 <div>
				 <h3>1,000.00</h3>
				 <p>总额度</p>
			 </div>
			 |
			 <div>
				 <h3>2,200.00</h3>
				 <p>已用额度</p>
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
		},
		goplay() {
		//var c3=document.getElementById("c3");
      var c3 = this.$refs.c3;
				var ctx=c3.getContext("2d");
			//console.log(c3,ctx);
				//1:创建三个变量
		//起始角度/终止角度/圆环中间显示数字
		var start=-90;
		var end=-90;
		var num=0;   //0%
		//2:创建定时器
		var t=setInterval(()=>{
			//2:0清除画布
			ctx.clearRect(0,0,375,275);
			//2.1:绘制灰色底框
			ctx.beginPath();   //开始一条新路径
			ctx.arc(175,150,100,0,2*Math.PI);  //圆环
			ctx.strokeStyle="#ccc";   //灰色描边
			ctx.lineWidth=15;  //线宽
			ctx.stroke();     //描边
			//2.2绘制动态进度条(绿)
      ctx.beginPath();
			ctx.strokeStyle="#0f0";
			ctx.lineWidth=15;
			end+=3.6;  //结束角度加 3.6
			ctx.arc(175,150,100,start*Math.PI/180,end*Math.PI/180);
			ctx.stroke();
			//2.4:绘制圆环中间示数字
			num+=100;
			ctx.font="20px SimHei";   
			ctx.fillText(num+"元",160,150);
			if(num>=8800.00){   //判断进度条停止时候
				clearInterval(t);
			}
		},10);
		},
	},
	 mounted() {
		 this.goplay();
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
	.zJ-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 1rem;
	}
	.zJ-title>img{
		width:30px;
	}
	.H-money{
		display: flex;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		padding: 0 2rem;
	}
	.H-money>div>p,.H-money>div>h3{
		margin:0.5rem;
	}
</style>