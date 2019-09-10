<template>
 <div> 
	<titlebar :leftImg="require('../../assets/search.png')" :leftImg2="require('../../assets/yuyin.png')" 
	:rightImg="require('../../assets/20.png')" :rightImg2="require('../../assets/jia.png')" :tasks="mytasks" :add="myadd"></titlebar>
	<!--空div 48px-->
	 <div style="margin-top:20px"></div>
  <!-- (2)面板 父面板 子面板 -->
	<mt-tab-container v-model="active">
		
		<mt-tab-container-item id="shouye">
			<!--(3)调用子组件 面板-->
			<itemlist></itemlist>
			
		</mt-tab-container-item>
    
		 <mt-tab-container-item id="caifu"> 
     <!-- (4)调用子组件 面板-->
		 <caifu></caifu>
	 </mt-tab-container-item> 
    
		 <mt-tab-container-item id="koubei"> 
     <!-- (5)调用子组件 面板-->
		 <koubei></koubei>
	 </mt-tab-container-item> 
    
		 <mt-tab-container-item id="pengyou"> 
     <!-- (6)调用子组件 面板-->
		 <pengyou></pengyou>
	 </mt-tab-container-item> 

    <mt-tab-container-item id="me"> 
     <!-- (7)调用子组件 面板-->
		 <me></me>
	 </mt-tab-container-item> 


		</mt-tab-container>   
  <!-- 底部导航条 -->
	<mt-tabbar v-model="active" fixed>
		<mt-tab-item id="shouye" @click.native="changeState(0)">
			<tabbaricon :selectedImage="require('../../assets/1_select.png')" :normalImage="require('../../assets/1_normal.png')" :focused="currentIndex[0].isSelect"></tabbaricon>
			  首页
		</mt-tab-item>
		<mt-tab-item id="caifu" @click.native="changeState(1)">
			<tabbaricon :selectedImage="require('../../assets/2_select.png')" :normalImage="require('../../assets/2_normal.png')" :focused="currentIndex[1].isSelect"></tabbaricon>
			财富
		</mt-tab-item>
		<mt-tab-item id="koubei" @click.native="changeState(2)">
			<tabbaricon :selectedImage="require('../../assets/3_select.png')" :normalImage="require('../../assets/3_normal.png')" :focused="currentIndex[2].isSelect"></tabbaricon>
			口碑
		</mt-tab-item>
		<mt-tab-item id="pengyou" @click.native="changeState(3)">
			<tabbaricon :selectedImage="require('../../assets/4_select.png')" :normalImage="require('../../assets/4_normal.png')" :focused="currentIndex[3].isSelect"></tabbaricon>
			朋友
		</mt-tab-item>

		<mt-tab-item id="me" @click.native="changeState(4)">
			<tabbaricon :selectedImage="require('../../assets/5_select.png')" :normalImage="require('../../assets/5_normal.png')" :focused="currentIndex[4].isSelect"></tabbaricon>
			我的
		</mt-tab-item>

	</mt-tabbar>
	
 </div>
</template>
<script>
//1.引入子组件
import TilteBar from "./common/TitleBar.vue"
//2.引入内容子组件
import ItemList from "./common/ItemList"
import Caifu from "./common/Caifu"
import KouBei from "./common/KouBei"
import Pengyou from "./common/Pengyou"
import Me from "./common/Me"
//.引入底部导航条图片组件
import TabBarIcon from "./common/TabBarIcon.vue"


export default {
	//2.注册组件
	components:{
		"titlebar":TilteBar,  //顶部导航栏
		"itemlist":ItemList,
		"caifu": Caifu,
		"koubei":KouBei,
		"pengyou":Pengyou,
		"me":Me,
		"tabbaricon":TabBarIcon,  //底部导航条
	},
	methods:{
		mytasks(){
			console.log("加好友列表");
		},
		myadd(){
		  console.log("任务");	
		},
		changeState(idx){
		//	console.log(123);
		for(var i=0;i<this.currentIndex.length;i++){
			if(i==idx){
				this.currentIndex[i].isSelect=true;
			}else{
				this.currentIndex[i].isSelect=false;
			}
			}
		}	
	},
	data(){
		return {
			active:"shouye",
			//创建数组保存所有(底部导航条)图片状态
			currentIndex:[
				 {isSelect:true},
				 {isSelect:false},
				 {isSelect:false},
				 {isSelect:false},
				 {isSelect:false}
			]
		}
	}
}
</script>
<style scoped>

.mint-tabbar > .mint-tab-item{
	color:gray;
}
.mint-tabbar > .mint-tab-item.is-selected{
	color:#26a2ff;
}
</style>