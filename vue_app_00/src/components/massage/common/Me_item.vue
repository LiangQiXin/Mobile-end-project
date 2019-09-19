<template>
  <div>
    <!-- <h1>我是ME</h1> -->
  <router-link :to="'/'" class="my_Me_a">
    <div class="bgcolor">
      <!-- 左侧文字 -->
      
       <ul class="ul_style">
         <li class="sTitle">
           完善个人资料,让大家认识你!
          </li>
         <li class="xTitle">欢迎来到好好住</li>
       </ul>
       <!-- 右侧是图片 -->
       <div class="boxImg">
         <img src="@/assets/Me_DJ.png" alt="">
       </div>
    </div>
   </router-link>
    <!-- 下面的固定图标及跳转 -->
    <!-- 第一层图标 -->
      <div class="Me_TBImg1">
        <router-link :to="'/'" class="my_Me_a">
         <div >
           <img src="@/assets/Me_01.png" alt="">
           <h5>图片与视频</h5>
         </div>
        </router-link>
        <router-link :to="'/'" class="my_Me_a"> 
         <div>   
           <img src="@/assets/Me_02.png" alt="">
           <h5>我的整屋</h5>
         </div>
        </router-link>
        <router-link :to="'/'" class="my_Me_a">  
         <div>
           <img src="@/assets/Me_03.png" alt="">
           <h5>我的文章</h5>
         </div>
        </router-link> 
        <router-link :to="'/'" class="my_Me_a"> 
         <div>
           <img src="@/assets/Me_04.png" alt="">
           <h5>我的回答</h5>
         </div>
        </router-link>  
      </div>
      <!-- 第二层的图标 -->
      <div class="Me_TBImg2"> 
        <router-link :to="'/'" class="my_Me_a">
          <div>
           <img src="@/assets/Me_05.png" alt="">
           <h5>草稿箱</h5>
         </div>
        </router-link> 
        <router-link :to="'/'" class="my_Me_a">  
         <div>
           <img src="@/assets/Me_06.png" alt="">
           <h5>装修记录</h5>
         </div>
        </router-link> 
     </div>
     <!-- 第三层图标 -->
     <div class="Me_TBImg1 Me_TBImg3">
       <div >
           <img src="@/assets/Me_07.png" alt="">
           <h5>我的收藏</h5>
         </div>
         <div>
           <img src="@/assets/Me_08.png" alt="">
           <h5>浏览记录</h5>
         </div>
         <div>
           <img src="@/assets/Me_09.png" alt="">
           <h5>关注的内容</h5>
         </div>
         <div>
           <img src="@/assets/Me_10.png" alt="">
           <h5>新手攻略</h5>
         </div>
     </div> 
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
/*完善个人资料*/
 .bgcolor{
   width:330px;
   height: 60px;
   margin:10px auto;
   background: #019ead;
   display: flex;
   
 }
 /*去除ul*/
 .ul_style{
   list-style: none;
   padding: 0 0 0 8px;
 }
 /*文字的样式*/
.sTitle{
  font-size: 16px;
  font-weight:lighter;
  color:#fff;
  margin-top:-8px;
}
.xTitle{
  font-size:10px;
  font-weight: lighter;
  margin-top:6px;
  color: #fff; 
}
/*右边的图片样式*/
.boxImg img{
  width: 55px;
  line-height: 60px;
  margin-left:35px; 
}
/*去除router-link*/
.my_Me_a{
  text-decoration: none;
  color: #000;
}
/*文字的调整*/
h5{
  margin:10px 0;
  font-weight:lighter; 
}
.Me_TBImg2 h5{
    margin-left:16px; 
}
/*第一层图标*/
.Me_TBImg1{
  display:flex;
  justify-content: space-around;
  align-items: center;
}
/*icon的大小*/
.Me_TBImg1 img{
  width:38px;
}
/*第二层的图标*/
.Me_TBImg2{
   display: flex;
   border-bottom: 8px solid #d9d9d9;
}
.Me_TBImg2 img{
  width:38px;
  margin:0 45px 0 21px;
}
/*第三层图标*/
.Me_TBImg1.Me_TBImg3{
  margin-top:10px;
  border-bottom:8px solid #d9d9d9;
}
</style>