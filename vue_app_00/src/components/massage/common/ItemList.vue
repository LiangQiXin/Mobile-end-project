<template>
<div>
	 <!-- <h2>itemList为临时设置为全局组件</h2> -->
    <item></item>
</div>
</template>

<script>
//(1)引入子组件
import Item from "./Item.vue"

export default {
	data() {
		return {
			
		}
	},
//(2)注册组件
  components:{
    "item":Item
 }
}
</script>
<style scoped>

</style>