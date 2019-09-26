<template>
  <div>
	  <!-- 导航栏tableBar -->
		<div class="page-head" ref="toTop">
      <div>
        <router-link :to="'/'" >
       <img :src="fristImg" alt="">
       </router-link>
      </div>
       <div>
        <router-link :to="'/'">
       <img :src="middleImg" alt="">
        </router-link>
      </div>
      <div>
      <router-link :to="'/'">
       <img :src="endImg" alt="">
       <img class="Me_tishi" :src="hongDian" alt="">
       </router-link>
      </div>
    </div>
    <!-- 下面的背景及账号 -->
    <div class="Me_bg">
      <div style="height:80px;"></div>
      <!-- 人物头像左边的图片 -->
      <div class="my_LuFei" ref="toTop2">
        <router-link :to="'/'">
        <img src="@/assets/Me_LuFei.jpg" alt="" class="bg_img">
        </router-link>
        <!-- 右边的文字 -->
        <ul class="my_ul">
        <li>住友_R9K138G</li>  
        <li class="text_bg">  
           <img src="@/assets/Me_title04.png" alt="" class="bg_img2">
            <span>我的徽章</span>
          </li> 
      </ul>
      <!-- 右边的跳转图片 -->
      <div>
        <router-link :to="'/'">
        <img src="@/assets/Me_JT.png" alt="" class="my_JTImg">
        </router-link>
      </div>
    </div>
    </div>
</div>
  
	
</template>
<script>
export default {
 
  data() {
    return{
      scrollTop:0
    }
  },
   methods:{
     scroll() {
    window.onscroll=()=>{
      var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
      console.log(scrollTop);
      if(scrollTop>=100) {
     this.$refs.toTop.style.backgroundColor="rgba(94,174,221,1)";
    this.$refs.toTop2.style.display="none";
    this.$refs.toTop.style.transition= "all 0.5s linear"; 
     }else{
       this.$refs.toTop.style.backgroundColor="rgba(94,174,221,0.1)";
      this.$refs.toTop2.style.display="";
  }
    }  
     }
   },
   props:["place"],
   created() {
     this.scroll();
   },
   mounted() {

   },

	props:{  //声明父组件接收的数据
  fristImg:{default:""},
	middleImg:{default:""},
	endImg:{default:""}, 
  hongDian:{default:""}
	}
}
</script>
<style scoped>
/*最外层父元素弹性*/
.page-head{
	display: flex;
  justify-content: flex-end;  /*结尾排放*/
	align-items: center;
	width:100%;
	height:70px;
  background-color:rgba(94,174,221,0.1);
  z-index: 999px;
	position: fixed;
  border-radius: 3px;
}
/*titleBar 的img*/
.page-head img{
	width:30px;
	margin:0 15px 0 0px; 
}
/*红点提示*/
.page-head img.Me_tishi{
  width:10px;
  margin: 0px;
  position: absolute;
  top:15px;
  right:12px;
}
/*me的背景图片*/
.Me_bg{
  width:100%;
  height:180px;
 background: url("../../../assets/Me_bg.jpg") no-repeat 100% ;
}
/*显示账号人物*/
.Me_bg .bg_img{
    width:50px;
    border-radius:50%;
    vertical-align: center;
}
.Me_bg .bg_img2{
  width:15px;
  vertical-align: center;
  margin:5px 0 0 2px;
}
/*头像与文字难搞*/
.my_LuFei{
  margin-left:7px;
  display: flex;
  align-items: center;
}
.my_ul{
  list-style: none;
  padding:0 0 0 8px;;
}
/*砖石与文字*/
.text_bg{
  margin-top:5px;
  width:90px;
  height: 25px;
  background: #000;
  border-radius: 10px;
  color:#fff;
}
/*箭头图片*/
.my_JTImg{
  width: 35px;
  margin-left: 150px;
}
</style>