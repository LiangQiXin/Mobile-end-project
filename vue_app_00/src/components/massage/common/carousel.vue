<template>
	<div>
	<mt-swipe :auto="4000">
	<mt-swipe-item v-for="(list,i) of item" :key="i">
		<div >
			<router-link class="flex" :to="'/'">
			<ul class="title">
				<li class="shangtitle">{{list.title1}}</li>
				<li class="xiatitle">{{list.title2}}</li>
			</ul>
			
		<div class="box">
				<img :src="'http://127.0.0.1:8080/'+list.img_url" alt="">
		</div>
    </router-link>
		</div>
		</mt-swipe-item>
</mt-swipe>
	</div>
</template>
<script>
export default {
 props:["item"],
	 
//  created() {
// 	// console.log(this.imgurl)
// 	this.loadMore();
//  },
//  methods: {
// 		loadMore(){
// 		var url="data";
// 		this.axios.get(url).then(res=>{
// 		//	console.log(res.data.data);
// 		 var data=res.data.data;
// 		 this.item=data;
// 		})
// 		}
// 	},
	// data() {
	// 	return{
	// 	   item:[
	// 		{title1:"",title2:"",tiem1:"",time2:"",img_url:""}
	// 		] 
	// 	}
	// },

}
</script>
<style scoped>
.mint-swipe{
	width:100%;
	height:100px !important;
border-bottom:3px solid #d9d9d9;
}
 
/* 轮播图里面的数据样式 */
.flex{
	display: flex;
	justify-content: space-between;
  align-items: center;
	text-decoration: none;
}
/*去除list-sytle*/
.title{
	list-style: none;
	padding-left:1rem;
}
/*下标题*/
.xiatitle{
	margin-top:13px; 
	font-weight: lighter;
	font-size: 0.9rem;
	color:gray;
} 
.shangtitle{
	font-size:1.2rem;
	color:#000;
}
/* 图片 */
.box>img{
	width:100px;
	height:60px ;
	margin-top:20px;
	padding-right:20px;
}
</style>