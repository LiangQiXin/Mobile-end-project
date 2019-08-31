<template>
 <div> 
	<titlebar :leftImg="require('../../assets/search.png')" :leftImg2="require('../../assets/yuyin.png')" 
	:rightImg="require('../../assets/ic_contacts_normal.png')" :rightImg2="require('../../assets/jia.png')" :tasks="mytasks" :add="myadd"></titlebar>
	<!--空div 48px-->
	 <div style="margin-top:48px"></div>
  <!-- 底部导航条 -->
	<mt-tabbar v-model="active">
		<mt-tab-item id="shouye" @click.native="changeState(0)">
			<tabbaricon></tabbaricon>
		</mt-tab-item>
		<mt-tab-item id="caifu" @click.native="changeState(1)">
			
		</mt-tab-item>
		<mt-tab-item id="koubei" @click.native="changeState(2)">
			
		</mt-tab-item>
		<mt-tab-item id="pengyou" @click.native="changeState(3)">
			
		</mt-tab-item>
		<mt-tab-item id="me" @click.native="changeState(4)">
			
		</mt-tab-item>

	</mt-tabbar>
	
 </div>
</template>
<script>
//1.引入子组件
import TilteBar from "./common/TitleBar.vue"
//2.引入底部导航条图片组件
import TabBarIcon from "./common/TabBarIcon.vue"

export default {
	//2.注册组件
	components:{
		"titlebar":TilteBar,  //顶部导航栏
		"tabbaricon":TabBarIcon,  //底部导航条
	},
	methods:{
		mytasks(){
			console.log("加好友列表");
		},
		myadd(){
		  console.log("任务");	
		}	
	},
	data(){
		return {
			active:"shouye",
		}
	}
}
</script>