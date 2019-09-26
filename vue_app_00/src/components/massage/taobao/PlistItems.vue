<template>
  <div>
    <!-- 商品详情nav -->
    <div class="TaoBao">
      <div class="TBnav">
        <img src="../../../assets/GuWuChe.png" alt />
        <div>
          <h3>商品详情</h3>
        </div>
      </div>
      <div class="right_img">
        <img class="border_left" src="@/assets/TaoBao01.png" alt />
        <img @click="change" src="@/assets/TaoBao02.png" alt />
      </div>
    </div>
    <div style="height:55px;"></div>
    <!-- 商品详情正文 -->
    <!-- HTML5新特性 -->
    <div>
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide>
          <!-- HTML5新特性 -->
          <div class="container"    @click="showControl">
            <div>
              <!-- 2:视屏区域 -->
              <video class="videoW" src="../../../assets/x.mp4" id="v3" ref="v3"></video>
            </div>
            <!-- 4:按钮区域 -->
            <div>
              <img
                ref="mySwiper1"
                id="ctrl"
                @click="goPlay"
                class="position"
								v-show="deletes"
                src="../../../assets/play.png"
                alt
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
					<img src="../../../assets/02.jpg" alt="">
				</swiper-slide>
        <swiper-slide>
					<img src="../../../assets/03.jpg" alt="">
					</swiper-slide>
        <swiper-slide>
					<img src="../../../assets/04.jpg" alt="">
					</swiper-slide>
        <swiper-slide>
					<img src="../../../assets/02.jpg" alt="">
				</swiper-slide>
        <swiper-slide>
					<img src="../../../assets/01.jpg" alt="">
				</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div>  -->
      </swiper>
    </div>
		<!-- 商品详情 -->
    <div class="main_wenzi">
			 <h3>¥2000-3000&nbsp;&nbsp;<span>商家推荐</span></h3> 
			 <s>价格:¥1000</s>
			 <h5>jnfdhgishngvsjhfdilolo</h5> 
       <h5>ngjvnhfjgifnginfdjvgnfdjnfjg</h5>
		</div>
		<ul class="ul-list">
			<li>快递:000</li>
			<li>月销量332件</li>
			<li>广东广州</li>
		</ul>
		<div class="cell_text">
			<div>
				<h5>优惠券&nbsp;<span>店铺优惠券</span>&nbsp;领取优惠券</h5>
			</div>
			<div class="text-center">
				<span>优惠券</span>
				<img src="@/assets/Me_JT2.png" alt="">
			</div> 
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      deletes:true,
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  created() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
    console.log(this.$refs.v3.paused);
  },

  methods: {
		showControl() {
			this.deletes=!this.deletes;
		},
    goPlay() {
      //  var v3=document.getElementById("v3");
      var v3 = this.$refs.v3;
       if(v3.paused) {
      v3.play()
      this.$refs.mySwiper1.src=require("../../../assets/pause.png");
       }else{
       v3.pause();
       this.$refs.mySwiper1.src=require("../../../assets/play.png");
			 this.deletes=true;
       }
    },
    
    callback() {},
    /*跳转回ZFB*/
    change() {
      this.$router.push("/ZFB");
    },
    toggle() {
      this.show = !this.show;
      console.log(12);
    }
  }
};
</script>
<style scoped>
body {
  text-align: center;
}
/*商品详情nav*/
.TaoBao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: #fd6d04;
  width: 100%;
  height: 48px;
  border-radius: 3px;
  position: fixed;
  z-index: 999;
}

.TaoBao > div > img {
  width: 25px;
}
/*二次弹性为图片与购物车*/
.TaoBao > .TBnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
}
.TaoBao > .TBnav > div > h3 {
  color: white;
}
/*nav的导航右边的功能*/
.right_img {
  width: 62px;
  height: 30px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 3rem;
}
.border_left {
  border-right: 1px solid #ffff;
}
/*视屏部分*/
.container {
  position: relative;
  text-align: center;
  width: 100%;
}
/*视屏的宽度*/
.videoW {
  width: 23rem;
}
.position {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -32px;
  margin-top: -32px;
}
/*滑动的图片的大小*/
.swiper-slide>img{
  width: 375px;
	height: 206px;
}
.main_wenzi>h3{
	color:firebrick;
	font-size: 19px;
	margin:0.5rem 0  0.3rem;
	padding-left: 1rem;
}
.main_wenzi>s{
	padding-left:1rem;
}
/*文字*/
.main_wenzi>h3>span{
	background-color:#fe667c;
	font-size:16px;
	color:#fff; 
	font-weight: lighter;
}
.main_wenzi>h5{
	width: 300px;
	word-break:break-all;
	margin: 0.5rem 0 0.5rem 0;
	padding-left:1rem ;
  font-weight:500;
	font-size:1rem;
}
.ul-list{
	display: flex;
	justify-content: space-around;
	padding-bottom: 0.6rem;
	border-bottom:10px solid #ddd;
	margin-top:1rem;
}
.cell_text{
	display: flex;
	align-items: center;
	justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.cell_text h5{
	padding-left:1rem;
	font-weight: lighter;
	margin:1rem 0; 
}
.cell_text h5 span{
	display: inline-block;
	width:75px;
	height: 20px;
	background-color:#fb0437;
	color:#fff;
	font-weight: lighter;
  text-align: center;
}
.text-center{
	display: flex;
	align-items: center;
	width: 100px;
}
.text-center>img{
	width: 30px;
}
</style>