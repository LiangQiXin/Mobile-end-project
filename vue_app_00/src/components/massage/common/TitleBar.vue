<template>
  <div>
			<div class="page-head">
					<div class="page-middle">
						<span>
							<img :src="leftImg" alt="" slot="icon" style="width:25px;">
							</span>
						<input placeholder="动态搜索" type="text">
						<span>
							<img :src="leftImg2" alt="" slot="icon" style="width:25px;">
							</span>
						</div>
					<div class="page-footer">	
				
						<img :src="rightImg" alt="" slot="icon" style="width:25px;" @click="add">
					
						<img :src="rightImg2" alt="" slot="icon" style="width:25px;" @click="tasks">
			
					
				</div>	
			</div>
			<div>
			</div>
</div>
</template>
<script>
export default {
	props:{  //声明父组件接收的数据
  leftImg:{default:""},
	leftImg2:{default:""},
	rightImg:{default:""},
	rightImg2:{default:""},
	 tasks:{type:Function},
		add:{type:Function}
	}
}
</script>
<style scoped>
.page-head{
	display: flex;
	position:fixed;
	z-index:999;
	width:100%;
	align-items: center;
	justify-content:space-between;
	background-color:#0082DF;
	height:40px;
	
}
.page-middle{
	display: flex;
	align-items:center;
	margin-left:10px;
}
.page-footer{
	margin-right: 30px;
}
</style>>