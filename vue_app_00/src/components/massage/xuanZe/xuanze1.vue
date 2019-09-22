<template>
  <div>
	  <h5>我是口碑</h5>	
   <van-tabs v-model="active" animated>
  <van-tab  :title="'选项 ' + 1" >
	
    内容 1
  </van-tab>

	<van-tab :title="'选项 ' + 2" >
	
    内容 2
  </van-tab>
	<van-tab  :title="'选项 ' + 3" >
	
    内容 3
  </van-tab>

<van-tab  :title="'选项 ' + 4" >
	
    内容 4
  </van-tab>

</van-tabs>
	</div>	
</template>
<script>

export default {
	data() {
		return{
		    active:1
		}
	}
}
</script>
<style scoped>

</style>