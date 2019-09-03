 <!-- Login.vue 用户登录组件-->
<template>
	<div>
		<h3>xz_login.vue</h3>
		<!--用户名输入框-->
		<mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlenght:10}" v-model="uname"></mt-field>
		<!-- 用户密码输入框 -->
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
		<!--登录按钮 绑定事件-->
		<mt-button size="large"  @click="login">登录</mt-button>
	</div>
</template>>
<script>
export default {
	data(){
		return {
			uname:"",
			upwd:""
		}
	},
	methods:{
		login(){
			//console.log(1);
			//创建正则表达式3~12位置操作
			var regu=/^[a-z0-9]{3,12}$/i;
		//	var regp=/^[a-z0-9]{6,12}$/i;
			var u=this.uname;
			var p=this.upwd;
			console.log(u+":"+p);
			//验证用户名 用户提示
			if(!regu.test(u)){
				this.$toast("用户名格式不正确");
				return;
			}
			//验证用户密码 密码提示
			if(!regu.test(p)){
				this.$toast("密码格式不正确");
			}
		  	//发送ajax
		    var url="login";
			  var obj={uname:u,upwd:p}
			this.axios.get(url,{params:obj})
			.then(result=>{
				//接收服务器返回数据
					   console.log(result.data.code); //1或-1
						 var code=result.data.code;
						 if(code==-1){
							 //失败提示
							 this.$messagebox("消息","用户名或密码有误");
						 }else{
							 	//成功 调转
							 this.$router.push("/product")
						 } 
			})
		}
	},
	    						
			
		
}
</script>
<style scoped>
.mint-button--default {
	/* background:linear-gradient(top,#27b1f6 0%,#0aa1ed 100%); */
background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(39, 177, 246)), to(rgb(10, 161, 237)));
}
    
</style>>