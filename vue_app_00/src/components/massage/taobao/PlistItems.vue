<template>
  <div>
    <!-- 商品详情nav -->
    <div class="TaoBao">
      <div class="TBnav">
        <img @click="jumpGdw" src="../../../assets/GuWuChe.png" alt />
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
			 <h3>¥5600-{{this.lists[0].price}}&nbsp;&nbsp;<span>商家推荐</span></h3> 
			 <s>价格:¥1000</s>
			 <h5>{{this.lists[0].title}}</h5> 
       <h5>神券满8000减800！</h5>
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
    	<div class="cell_text xhx">
			<div>
				<h5>服务&nbsp;假一倍十&nbsp;极速退货&nbsp;七天无理由退货</h5>
			</div>
			<div class="text-center">
        
				<img class="mg-right" src="@/assets/Me_JT2.png" alt="">
			</div> 
		</div>
    <!-- 宝贝评论 -->
    <div class="pinglun">
      <div>
        <h4>全部评论(888)</h4>
      </div>
      <div class="pinglunImg">
        <h4>查看全部</h4>
        	<img class="mg-right" src="@/assets/Me_JT2.png" alt="">
      </div>
    </div>
     <!-- 相关宝贝 -->
    
      <h5 class="textwenzi">相关宝贝</h5>
        <div class="product">
		    	
       <router-link :to="'/GDW'" class="goods-item" v-for="(item,i) of LiuShuJu" :key="i">
         <img :src="'http://127.0.0.1:8080/'+item.img_url" alt="">
				 <!-- 商品名称 -->
				 <h5>{{item.lname}}</h5>
				 <!--价格-->
				 <div class="info">¥{{item.price}}</div>
       </router-link><!--商品结束-->
			 
		</div>


    
    <!-- 提交订单 -->
    <div v-show="dingdan">
      <van-submit-bar
  :price="3500"
  button-text="提交订单"
  @submit="onSubmit"
/>
    </div>
    <!-- 加入购物车,立即购买 -->
    <div>
      <div>
        <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-button type="warning" text="加入购物车" @click="addCart" 
   :data-lid="this.lists[0].lid" :data-price="this.lists[0].price" :data-lname="this.lists[0].lname" :data-img_url="this.lists[0].img_url"
		:data-is_checked="this.lists[0].is_checked"
  />
  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
</van-goods-action>
      </div>
    </div>
   
      
  </div>
</template>
<script>
export default {
  props:[
    'lid'
	],
  data() {
    return {
      show: false,
      deletes:true,
      dingdan:false,
      LiuShuJu:[{lid:'',price:'',lname:'',img_url:''}],
      lists:[{img_url:'',lid:'',lname:'',price:'',promise:'',shelf_time:'',sold_count:'',title:'',subtitle:'',spec:'',is_checked:''}],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  created() {
    this.loadMore()
    this.loadMore1()
  },
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
     addCart(e){  //点击的是当前按钮(获取当前值)
      //功能:将商品添加至购物车
			//###1:获取添加购物车按钮的数据
			var lid=e.target.dataset.lid;
			var lname=e.target.dataset.lname;
		 var price=e.target.dataset.price;
		 var img_url=e.target.dataset.img_url;
		 var is_checked=e.target.dataset.is_checked;
		// console.log(lid+"|"+lname+"|"+price+"|"+img_url+"|"+is_checked);
		 //2:创建url将数据发送给服务器
      var url="addcart";
			var obj={lid,lname,price,img_url,is_checked};
			//#3:发送ajax请求获取
			this.axios.get(url,{params:obj}).then(res=>{
				//服务器端res.send 回-1作为判断是否登录
        if(res.data.code==-1){
					//显示一个提示框
					this.$messagebox("消息","请先登录").then(res=>{
						//回退:跳转登录组件
						this.$router.push("/Login");
					});
				}else if(res.data.code==-2){
					this.$messagebox("消息","添加失败");
				}else{
					this.$messagebox("消息","添加成功");
          this.$router.push("/Cart");
				}
				 // console.log(res);
        //4:获取服务器返回数据 
        //5:-1  提示请先登录 
        //  -2  添加失败
        //  1   添加成功
			});
		},
    onSubmit() {},

   //加载数据loadMore
    loadMore() {
     var url="Product-data";
      var lid=this.lid;
      console.log(lid,"lid");
      // var obj={lid}
      this.axios.get(url,{params:{lid}}).then(res=>{
        //console.log(res.data.data);
        var row=res.data.data;
        this.lists=row;
       // console.log(this.lists);
      })
    },
    loadMore1() {
      var url="product";
      this.axios.get(url).then(res=>{
       // console.log(res.data.data,'shuju'); 
         this.LiuShuJu=res.data.data;

      })
    },

    jumpGdw() {
      this.$router.push('/GDW');
    },
     onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      this.dingdan=!this.dingdan;
    },
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
.text-center>img.mg-right{
  padding-left:3rem;
}
.cell_text.xhx{
  border-bottom: 10px solid #ddd;
}
/*评论*/
.pinglun{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.pinglun>div>h4{
  margin: 1.1rem 0;
  padding-left:1rem;
}
.pinglunImg{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1.3rem;
}
.pinglunImg>img{
  width:30px;
  height: 30px;
}
h5.textwenzi{
 margin:0.5rem 0 ;
 padding-left:1rem;
 font-size:1rem;
}
/*商品:最外层父元素:弹性布局*/
.product{
	width:345px;
  height: 380px;
	border:1px solid #d9d9d9;
	text-align: center;
	margin-left:15px;
	display: flex;
	flex-wrap:wrap;   /*指定元素换行*/
  justify-content: space-between;
	padding:4px;    /*内边距*/
}
/*修饰当前商品*/
.goods-item{
	width:32%;
  
	border-radius:5px;
	margin:2px 0;
	padding:2px;
	box-sizing: border-box;
	height: 150px;
 text-decoration: none;
}
/*图片尺寸*/
.goods-item img{
	width:100%;
   height: 68px;
}
.goods-item .info{
	color:red;
	font-size:0.9rem;
}
h5{
	margin:10px 0; 
	font-weight:500;
	color:#000;
}

</style>