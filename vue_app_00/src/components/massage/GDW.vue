<template>
	<div>
    <tilebar2></tilebar2>
	</div>
</template>
<script>
//1:引入顶部标题组件
import TitleBar2 from "./taobao/TitleBar2"

export default {
	//2注册组件
	components:{
		"tilebar2":TitleBar2  //顶部搜索框 
	}
}
</script>
<style scoped>

</style>