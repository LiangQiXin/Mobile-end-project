 <!-- Login.vue 用户登录组件-->
<template>
	<div>
		<h3>xz_login.vue</h3>
		<div>
			<img class="mytupian" src="../../../assets/login1.png" alt="">
		</div>
		 <ul>
			 <li :class="{yollowName:show1}" @click="change(0)">登录</li>
			 <li>|</li>
			 <li :class="{yollowName:show2}" @click="change(1)">注册</li>
		</ul>

			<!-- 登录注册 -->
	    <div v-if="show1">
				<!--用户名输入框-->
				<mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlenght:10}" v-model="uname"></mt-field>
				<!-- 用户密码输入框 -->
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
				<!--登录按钮 绑定事件-->
				<mt-button size="large"  @click="login">登录</mt-button>
				<mt-button size="large" @click="shouye">返回首页</mt-button>
		  </div>

			<!-- 注册 -->
      <div v-if="show2">
				551515615
				<!-- 用户手机号码 -->
				<mt-field label="手机号" placeholder="请输入手机号" type="text" v-model="phone">
				</mt-field>
				<!-- 邮箱 -->
				<mt-field label="邮箱" placeholder="请输入邮箱号" type="text" v-model="email">
				</mt-field>	
				<!--用户名输入框-->
        <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlenght:10}" v-model="uname1"></mt-field>
        <!-- 用户密码输入框 -->
         <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd1">
         </mt-field> 
				 <!-- 注册按钮 绑定事件 -->
				 <mt-button size="large" @click="reg">注册</mt-button> 
				 <mt-button size="large" @click="shouye">返回首页</mt-button>
			</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			uname:"",
			upwd:"",
		  uname1:"",
			upwd1:"",
			phone:"",
			email:"",
			show1:true,
			show2:false
		}
	},
	methods:{
		reg() {
			//console.log(123);
			//创建正则表达式3~12位置操作
			var regup=/^[a-z0-9]{3,12}$/i;
			var regph=/^1[3-8]\d{9}$/;
			var email=/^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
      var un=this.uname1;
			var pd=this.upwd1;
			var ph=this.phone;
			var e=this.email;
			console.log(ph+":"+e+":"+un+":"+pd);
			//用正则判断 用户提示
			if(!regph.test(ph)) {
         this.$toast("号码不正确");
				 return;
			}
			if(!email.test(e)) {
         this.$toast("邮箱不正确");
				 return;
			}	
			if(!regup.test(un)) {
         this.$toast("用户名不正确");
				 return;
			}
				if(!regup.test(pd)) {
         this.$toast("密码不正确");
				 return;
			}	
			//发ajax请求
			var url='reg';
			var  obj={uname:un,upwd:pd,phone:ph,email:e}
			this.axios.get(url,{params:obj}).then(result=>{
				   //console.log(result);  得到服务器返回的数据
          if(result.data.code==200) {
						  this.$messagebox("消息","注册成功").then(res=>{
								this.uname1="";
								this.upwd1="";
								this.phone="";
								this.email="";
								this.show1=true;
								this.show2=false;
							})
					}else{
						this.$toast("注册失败");
					}
			})	
		},
    change(i) {
			if(i==0) {
				this.show1=true;
				this.show2=false;
			}else{
				this.show1=false;
				this.show2=true;
			}
		},
		shouye(){
			this.$router.push("/ZFB");
		},
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
							 this.$router.push("/GDW")
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
margin-top:20px;
margin-bottom:20px;
}
   .mytupian{
		 width:375px;
		 height:150px;
		margin-bottom:30px;
	 } 
	 ul{
		 display: flex;
		 list-style: none;
		 justify-content: space-around;
		 width: 100px;
		 margin-left: 12rem;
	 }
	 ul>.yollowName{
    border-bottom: 1px solid #c1a582;
		padding-bottom:0.5rem;
	 }
</style>