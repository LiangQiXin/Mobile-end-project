<template>
	<div>
		<!-- <h1>hollow<h1> -->
			<img class="imgstyle" :src="focused?selectedImage:normalImage"  alt="">
	</div>
</template>
<script>
export default {
	props:{
    focused:false, //选中状态
   selectedImage:{default:""},
	 normalImage:{default:""}
	}
}
</script>
<style scoped>
.imgstyle{
	width:30px;
	height:30px;
	margin-bottom:5px;
}
</style>