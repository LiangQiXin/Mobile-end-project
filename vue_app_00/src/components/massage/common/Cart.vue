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
				 <input type="checkbox">
				 <div class="lname">Hollow</div>
				 <div class="price">¥8888</div>
			 </div>
			 <button>-</button>
			 <input type="text">
			 <button>+</button>
			 <mt-button>删除</mt-button>
		</div>
		<!-- 3:购物车中商品数量:删除选中商品,清空购物车 -->
	</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>

</style>