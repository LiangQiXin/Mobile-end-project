<template>
	<div class="cart" @click="handler">
		<h3>购物车</h3>
		<div class="myPosition">
			<!-- 1:顶部复选框: 全选 -->
			<div class="selectall" >
				全选 <input type="checkbox" @change="selectAll" style="marign:6px;">
			</div>
			<div class="left_h5">
		合计:¥ <input class="my_money" type="text" :value="total.toFixed(2)">
		  </div>
			 
		</div>
   	
		<!-- 2:商品信息 -->
		<div class="cart-item" v-for="(item,i) of lists" :key="i">
       <div class="leftText" >
				 <div>
				 <input type="checkbox" style="width:30px;" v-model="item.cb">
				 </div>
				 <div>
				 <img :src="'http://127.0.0.1:8080/'+item.img_url" alt=""  class="my-style">
				 </div>
				 <ul class="list-style">
						<li class="lname" v-text="item.lname"></li>
						<li class="price">¥{{item.price}}</li>
				 </ul>
			 </div>
			 <div class="bottom">
			 <button :data-i="i" :data-n="-1" :data-id="item.id">-</button>
			 <input type="text" :value="item.count" class="myinput" >
			 <button :data-i="i" :data-n="+1">+</button>
     
			 <mt-button @click="delItem" :data-id="item.id">删除</mt-button>
       </div>
		</div>
		<!-- 3:购物车中商品数量:删除选中商品,清空购物车 -->
		 <div>
      购物车中商品数量
			<span style="color:red">0</span>
			<mt-button @click="delItems">删除选中商品</mt-button>
			<mt-button>清空购物车</mt-button>
		</div>  
	</div>
</template>
<script>
export default {
	data(){
		return{
			lists:[{id:"",lname:"",price:"",count:"",is_checked:"",img_url:""}],

		}
	},
	created(){
		this.loadMore();
	},
	computed:{
		//放在computed中的计算属性,计算结果会被vue缓存,可反复使用,避免重复计算
		total(){
			var total=0;
			for(var item of this.lists) {
				if(item.cb) {
					total+=item.price*item.count;
				}
			}
			return total;
		}
	},
	methods:{
		handler(e){
			//否则,如果点的不是+号,则执行数量+ -操作
				//因为提前在每个按钮上缓存了序号i和增量n(-1或+1)
				//就先从定义扩展属性i获得要修改数量的商品的序号;
			if(e.target.nodeName=="BUTTON"){
				var i=e.target.dataset.i;
				//再从自定义扩展属性n中获得增量(-1获得+1)
				
		this.lists[i].count+=parseInt(e.target.dataset.n);
				
				if(this.lists[i].count<=0){
					this.lists[i].count=0;
					this.delItem(e);
				}
			}
		},
	selectAll(event){
      //功能:为全选按钮绑定事件 change
      //当全选按钮状态为checked=true
      //所有商品列表 cb=true
      //当全选按钮状态为checked=false
      //所有商品列表 cb=false
      //(1)获取当前按钮状态 true
      var cb = event.target.checked
      //(2)创建循环遍历所有商品属性cb值与全选状态
      //   一致
      for(var item of this.lists){
        item.cb= cb;
      }
    },
		delItems(){
			//功能:删除用户删除选中的多个商品
			//(1)显示确认对话框
			this.$messagebox.confirm("是否是删除指定数据").then(res=>{
				//(2)创建循环变量保存选中id值  id
				var  id="";   //1,2,3
				//(3)创建循环遍历数组中每个元素
				for(var item of this.lists){
					//(4)判断当前元素属性cb是否等于true
					if(item.cb){
             //(5)拼接id    2,3,4
						 id+=item.id+",";
					}
				}//for end
				//(6)去除字符串最后一个逗号
				//id="2,3,4,"
				id=id.slice(0,-1);
				//(7)判断用户是否选中商品 请选中需要删除商品
				if(id==""){
					this.$toast("请选择需要删除商品");
					return;
				}
				//(8)创建url 创建obj  发送ajax请求
				var url="delItems";
				var obj={id:id};
				this.axios.get(url,{params:obj}).then(res=>{
					//(9)获取服务器返回数据
					//(10)判断删除多个商品是否成功
					if(res.data.code==-1){
						this.$toast("删除失败");
					}else{
						this.$toast("删除成功");
						this.loadMore();
					}
					//(11)刷新操作 loadMore()
				});
			})
		},
		delItem(e){  //单个删除
      //功能:用户点击删除按钮完成删除指定商品任务
			//(1)为按钮绑定事件调用delItem
			//(2)显示确认框如果用户选 确定
			this.$messagebox.confirm("是否删除指定数据").then(res=>{
				//(3)将当前商品id传递函数
				var id=e.target.dataset.id;
				//(4)发送ajax请求完成删除任务
				var url="delItem";
				var obj={id:id};//可以简写
				this.axios.get(url,{
					params:obj
				}).then(res=>{
				//	console.log(res.data);
					if(res.data.code==1){
						this.$toast("删除成功");
						this.loadMore();//刷新
					}else{
						this.$toast("删除失败");
					}
				})
				//(5)删除成功 提示 "删除成功"
			}).catch(err=>{

			})
		},
     loadMore(){
			 //功能:获取当前用户购物车列表
      //1:创建url请求服务器地址
			 var url="carts";
			  //2:发送ajax 请求(让服务器程序完成功能)
			 this.axios.get(url).then(res=>{
				 //console.log(res.data);
				 //console.log(res.data.data);
       if(res.data.code==-1){
				 //4:如果服务器返回-1 请登录
				 this.$messagebox("消息","请登录").then(res=>{
					 //回调函数(用户点击确认按钮后调用函数)
					 this.$router.push("/Login");
				 })
			 }else{
				 //3:获取服务器返回数据
				 //this.list=res.data.data;
				 //添加一个新功能:为数据添加属性cb
				 //3.1:创建循环遍历res.data.data中数据(顺序)
				  var rows=res.data.data;
					for(var item of rows) {
						//3.2:为其添加属性cb值false(顺序)
						item.cb = false;
					}
					//3.3:将新数组赋值list (顺序)
					this.lists=rows;
         }
			 });
		 }
	},
}
</script>
<style scoped>
/*1:商品项目元素*/
  .cart-item{
    display: flex;  /*弹性布局*/
		justify-content: space-between;
		align-items: center;
	
	}
	/*左边的内容*/
	.leftText{
		display: flex;
		justify-content: space-between;
		align-items:center;
	}
	/*商品标题文字*/
.list-style{
		list-style:none;
		margin:0 0 0 2px; 
		padding: 0px;
		width:100px;
	}
.lname{
		font-size:1rem;
		font-weight:lighter;
		padding: 0px; 
	}
.price{
	margin-top:10px 0 0 0;
	color: red;
	width: 10px;
	
}
/*加减button*/
.bottom{
	margin-top:60px;
	margin-right:7px; 
}
/*我的图片*/
.my-style{
   width:80px;
	 height:60px;
	 border-radius: 10px;
}

.myinput{
  width:25px;
	text-align:center;
}
/*总价位置*/
.myPosition{
	display: flex;
	justify-content: space-between;
	align-items: center;
  background: lavender;
	width:100%;
	height:35px;
	text-align: center;
  padding-left:7px; 
}
.left_h5{
	margin-right:80px; 
}
.my_money{
	width: 80px;
	text-align: center;
	font-size:19px;
	color:red;
	border-radius: 3px;
	border:1px solid #fff;
}
</style>