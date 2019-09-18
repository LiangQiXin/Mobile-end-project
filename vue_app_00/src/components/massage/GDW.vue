<template>
	<div>
	
    <!-- (2)面板 父面板 子面板 -->
		<mt-tab-container v-model="active">
       <mt-tab-container-item id="shouye2">
        <!--1:调用子组件  首页面板-->

     	<!-- (1)调用顶部titlebar -->
    <tilebar2 :milldleImg="require('../../assets/search.png')" :rightImg1="require('../../assets/TaoBao01.png')" :rightImg2="require('../../assets/TaoBao02.png')" :tasks="mytasks" :guanBi="myguanbi">
		</tilebar2>
       <productsitem></productsitem>
			 </mt-tab-container-item >

			 <mt-tab-container-item id="dianying">
				<!--2:调用子组件 电影面板-->

			 </mt-tab-container-item>
			 <mt-tab-container-item id="VIP">
				<!--3:调用子组件  VIP面板-->

			 </mt-tab-container-item>
			 <mt-tab-container-item id="gouwuche">
				<!--4:调用子组件  购物车面板-->
           <cart></cart>
			 </mt-tab-container-item>
			 <mt-tab-container-item id="me2">
				<!--5:调用子组件  (ME)面板-->

			 </mt-tab-container-item>
		</mt-tab-container>
		<!-- (2)底部导航条 -->
		<mt-tabbar v-model="active" fixed>
        <mt-tab-item id="shouye2" @click.native="changeState(0)">
           <tabbaricon2 :selectedImg="require('../../assets/DY_select1.png')" :normalImg="require('../../assets/DY_normal1.png')" :focused="currentIndex[0].isSelect">

					 </tabbaricon2>
					  首页
				</mt-tab-item>
				<mt-tab-item id="dianying"
            @click.native="changeState(1)">
           <tabbaricon2 :selectedImg="require('../../assets/DY_select2.png')" :normalImg="require('../../assets/DY_normal2.png')" :focused="currentIndex[1].isSelect">

					 </tabbaricon2>
						电影
				</mt-tab-item>
				<mt-tab-item id="VIP"
           @click.native="changeState(2)">
           <tabbaricon2 :selectedImg="require('../../assets/DY_select3.png')" :normalImg="require('../../assets/DY_normal3.png')" :focused="currentIndex[2].isSelect">

					 </tabbaricon2>
						VIP
				</mt-tab-item>
				<mt-tab-item id="gouwuche"
            @click.native="changeState(3)">
           <tabbaricon2 :selectedImg="require('../../assets/DY_select4.png')" :normalImg="require('../../assets/DY_normal4.png')" :focused="currentIndex[3].isSelect">
					 </tabbaricon2>
					
						购物车
				</mt-tab-item>

				<mt-tab-item id="me2"
           @click.native="changeState(4)">
           <tabbaricon2 :selectedImg="require('../../assets/DY_select5.png')" :normalImg="require('../../assets/DY_normal5.png')" :focused="currentIndex[4].isSelect">

					 </tabbaricon2>
				  我的
				</mt-tab-item>

		</mt-tabbar>
	</div>
</template>
<script>
//1:引入顶部标题组件
import TitleBar2 from "./taobao/TitleBar2"
//2:引入商品列表组件
import Products_item from "./taobao/Products-item" 
//2:引入购物车组件
import Cart from "./common/Cart"
//引入底部导航条图片组件
import TabBarIcon2 from "./taobao/TabBarIon2"

export default {
	//2注册组件
	components:{
		"tilebar2":TitleBar2,  //顶部搜索框 
		 "productsitem":Products_item,  //商品列表
		 "cart":Cart,
		"tabbaricon2":TabBarIcon2    //顶部导航条
	},
	data() {
		return {
			active:"shouye2",
			currentIndex:[
				{isSelect:true},
				{isSelect:false},
				{isSelect:false},
				{isSelect:false},
				{isSelect:false},
			]
		}
	},
	methods: {
		changeState(idx){
      //console.log(123);
     for(var i=0;i<this.currentIndex.length;i++){
			 if(i==idx){ //focused的判断
				 this.currentIndex[i].isSelect=true;
			 }else{
				 this.currentIndex[i].isSelect=false;
			 }
		 }
		},
		mytasks() {
			console.log("任务");
		},
			myguanbi() {
			//console.log("关闭");
			this.$router.push("/ZFB");
		}
	},
}
</script>
<style scoped>
.mint-tabbar >.mint-tab-item{
	color:gray;
}
.mint-tabbar >.mint-tab-item.is-selected{
	color: brown;
}
</style>