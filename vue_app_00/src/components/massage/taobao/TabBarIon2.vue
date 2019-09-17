<template>
	<div>
     <!-- <h1>贴上面</h1> -->
		 <!-- 获得焦点选中(true) 否则(false) -->
		<img class="imgSize" :src="focused?selectedImg:normalImg" alt="">
	</div>
</template>
<script>
export default {
	props:{
		focused:false,   //选中状态
		normalImg:{default:""},
		selectedImg:{default:""}
	}
}
</script>
<style scoped>
   .imgSize{
		 width: 30px;
		 height: 30px;
		 margin-bottom:5px;
	 }
</style>