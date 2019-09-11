<template>
	<div class="cart">
		<h3>购物车</h3>
    <!-- 1:顶部复选框: 全选 -->
    <div class="selectall">
			全选 <input type="checkbox">
		</div>
		<!-- 2:商品信息 -->
		<div class="cart-item">
       <div class="leftText">
				 <div>
				 <input type="checkbox" style="width:30px;">
				 </div>
				 <div>
				 <img src="@/assets/5000.png" alt=""  class="my-style">
				 </div>
				 <ul class="list-style">
				 <li class="lname">Hollow</li>
				 <li class="price">¥8888</li>
				 </ul>
			 </div>
			 <div class="bottom">
			 <button>-</button>
			 <input type="text" value="0" class="myinput" >
			 <button>+</button>
     
			 <mt-button>删除</mt-button>
       </div>
		</div>
		<!-- 3:购物车中商品数量:删除选中商品,清空购物车 -->
		 <div>
      购物车中商品数量
			<span style="color:red">0</span>
			<mt-button>删除选中商品</mt-button>
			<mt-button>清空购物车</mt-button>
		</div>  
	</div>
</template>
<script>
export default {
	
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
		list-style:none;padding:15px;
	}
.lname{
		font-size:1.1rem; 
	}
.price{
	margin-top:10px;
	color: red;
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
</style>