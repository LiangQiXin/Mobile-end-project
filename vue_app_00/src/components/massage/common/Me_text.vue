<template>
  <div>
     <!-- <h5>我是Me_text,vue</h5> -->
     <!-- 一个 -->
    <router-link :to="'/'" class="me_my_a">
     <div class="textFlex">
       
       <div>
         <h3>花呗开通记录</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>

     </div>
    </router-link> 
     <!-- 二个 -->
     <div class="textFlex">
       <div>
         <h3>我的权益</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>
     </div>
     <!-- 三个 -->
     <div class="textFlex">
       <div>
         <h3>花呗当面花</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>
     </div>
     <!-- 四个 -->
     <div class="textFlex">
       <div>
         <h3>设置首选支付方式</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>
     </div>
     <!-- 五个 -->
     <div class="textFlex">
       <div>
         <h3>额度设置</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>
     </div>
     <!-- 六个 -->
     <div class="textFlex">
       <div>
         <h3>自动还款设置</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>
     </div>
     <!-- 七个 -->
     <div class="textFlex">
       <div>
         <h3>还款日设置</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>
     </div>
     <!--第八个-->
     <div class="textFlex">
       <div>
         <h3>相关合同及产品说明</h3>
       </div>
       <div>
         <img src="@/assets/Me_JT2.png" alt="">
       </div>
     </div>
     <!-- 最下面的图标  是不是到底了 -->
     <div class="meZhu">
       <img src="@/assets/Me_ZFB.png" alt="">
     </div>
    <div style="height:100px;"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[]
    }
  }
}
</script>
<style scoped>
/*文字样式*/
   .textFlex{
     display: flex;
     align-items:center;
     justify-content: space-between;
     border-bottom: 1px solid #d9d9d9;
   }
   .textFlex h3{
     font-weight: lighter;
     padding-left:8px;
   }
   /*图片右箭头*/
    .textFlex img{
      width:35px;
    }
    
.meZhu{
  width: 100%;
  height: 80px;
  margin: 15px 0 0 80px;
}
.me_my_a{
  text-decoration: none;
  color:#000;
}
</style>