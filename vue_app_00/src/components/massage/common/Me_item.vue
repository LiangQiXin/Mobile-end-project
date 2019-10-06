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
         <li class="xTitle">欢迎来到支付宝</li>
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
           <img src="@/assets/Me_zhangD01.png" alt="">
           <h5>账单</h5>
         </div>
        </router-link>
        <router-link :to="'/'" class="my_Me_a"> 
         <div>   
           <img src="@/assets/ME_Zong.png" alt="">
           <h5>总资产</h5>
         </div>
        </router-link>
        <router-link :to="'/'" class="my_Me_a">  
         <div>
           <img src="@/assets/C_eBao.png" alt="">
           <h5>余额</h5>
         </div>
        </router-link> 
        <router-link :to="'/YEB'" class="my_Me_a"> 
         <div>
           <img src="@/assets/yuEbao.png" alt="">
           <h5>余额宝</h5>
         </div>
        </router-link>  
      </div>
      <!-- 第二层的图标 -->
      <div class="Me_TBImg2"> 
        <router-link :to="'/'" class="my_Me_a">
          <div>
           <img src="@/assets/ka.png" alt="">
           <h5>银行卡</h5>
         </div>
        </router-link> 
        <router-link :to="'/'" class="my_Me_a">  
         <div>
           <img src="@/assets/zhiMa.png" alt="">
           <h5>芝麻信用</h5>
         </div>
        </router-link> 
     </div>
     <!-- 第三层图标 -->
     <div class="Me_TBImg1 Me_TBImg3">
       <div >
           <img src="@/assets/me_jiebei.png" alt="">
           <h5>借呗</h5>
         </div>
         <div>
           <img src="@/assets/MaYi_B.png" alt="">
           <h5>蚂蚁保险</h5>
         </div>
         <div>
           <img src="@/assets/Me_kF.png" alt="">
           <h5>我的客服</h5>
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
  margin-top:0.5rem;
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