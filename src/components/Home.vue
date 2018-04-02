<template>
	<div class="home">
		
		<header>
			
			<div class="_sear">
				<i class="iconfont icon-search"></i>
				<input type="text" name="" id="" value="" placeholder="请输入关键词"/>
				
			</div>
			<div class="_searGo">
				搜索
			</div>
		</header>
		<div class="main" id="lazy">
			<div class="content">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in bannerdata.banner"><a href="javascript:;"><img v-bind:src="item"/></a></div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
				<div class="goodsKinds">
					<a href="javascript:;">
						<dl>
							<dt><img src="../../static/img/xianzhi.png"/></dt>
							<dd>闲置二手</dd>
						</dl>
					</a>
					<a href="javascript:;">
						<dl>
							<dt><img src="../../static/img/zhixiao.png"/></dt>
							<dd>工厂直销</dd>
						</dl>
					</a>
					<a href="javascript:;">
						<dl>
							<dt><img src="../../static/img/wenwan.png"/></dt>
							<dd>文玩书画</dd>
						</dl>
					</a>
					<a href="javascript:;">
						<dl class="clear-right">
							<dt><img src="../../static/img/jiya.png"/></dt>
							<dd>库存积压</dd>
						</dl>
					</a>
					<a href="javascript:;">
						<dl>
							<dt><img src="../../static/img/shechipin.png"/></dt>
							<dd>奢侈品</dd>
						</dl>
					</a>
					<a href="javascript:;">
						<dl>
							<dt><img src="../../static/img/haiwai.png"/></dt>
							<dd>海外商品</dd>
						</dl>
					</a>
					<a href="javascript:;">
						<dl>
							<dt><img src="../../static/img/lipin.png"/></dt>
							<dd>礼品</dd>
						</dl>
					</a>
					<a href="javascript:;">
						<dl class="clear-right">
							<dt><img src="../../static/img/gengduo.png"/></dt>
							<dd>更多</dd>
						</dl>
					</a>
				</div>
				<div class="tip">
					<p>名人名家</p>
					<a href="javascript:;">查看更多</a>
				</div>
				<div class="mingren">
					<a href="javascript:;" v-for="ite in famousordata.famousor"><div class="single_mingjia">
						<div class="single-left">
							<img src="" v-bind:data-echo="ite.img"/>
						</div>
						<div class="single-right">
							<dl>
								<dt>{{ite.name}}</dt>
								<dd>
									<p>主营：</p>
									<span>{{ite.main.join("、")}}</span>
								</dd>
								<dd>
									<p>简介：</p>
									<span>{{ite.describe}}</span>
								</dd>
							</dl>
						</div>
					</div></a>
					
				</div>
				<div class="tip2">
					<p>推荐店铺</p>
					<router-link class="" :to="{ path: '/main/recommend'}">查看更多</router-link>
				</div>
				<div class="shops">
					<ul>
						<li v-for="it in shops.shop">
							<dl>
								<a href="javascript:;">
									<dt><img src="" :data-echo="it.img"/></dt>
									<dd>{{it.name}}</dd>
									<dd><p>主营：</p><span>{{it.main.join("、")}}</span></dd>
									<dd><p>人气：</p><span>{{it.fans}}</span><p>销量：</p><span>{{it.sale}}</span></dd>
								</a>
							</dl>
						</li>
						
					</ul>
				</div>

				<div class="tip3">
					<p>热销商品</p>
					<a href="javascript:;">查看更多</a>
				</div>
				<div class="hotgoods">
					<a href="javascript:;" v-for="i in goods.goods">
						<dl>
							<dt>
								<img src="" :data-echo="i.img" alt="" />
							</dt>
							<dd>{{i.describe}}</dd>
							<dd>￥<span>{{i.price}}</span><h4></h4></dd>
						</dl>
					</a>
					
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import '../../static/css/home.css'
import '../../static/assets/css/swiper-3.3.1.min.css'
import $ from 'jquery'
import echo from '../../static/js/echo.js'
import Swiper from '../../static/assets/js/swiper-3.3.1.min.js'
let galleryTop
export default{
  data () {
    return {
      bannerdata: '',
      famousordata: '',
      shops: '',
      goods: ''
    }
  },
  computed: {
  },
  methods: {
    lunbo () {
      galleryTop = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
        autoplay: 2000
      })
      galleryTop.startAutoplay()
    }
  },
  components: {
  },
  mounted: function () {
    this.$http.get('static/json/index.json').then(function (response) {
      this.bannerdata = response.data[0]
      this.famousordata = response.data[1]
      this.shops = response.data[2]
      this.goods = response.data[3]
      this.$nextTick(function () {
        this.lunbo()
        var len = $('.hotgoods dl').length
        for (var i = 0; i < len; i++) {
          if ((i + 1) % 2 === 0) {
            $('.hotgoods dl').eq(i).css('margin-right', '0')
          }
        }
        echo.init({
          ele: document.getElementById('lazy'),
          offsetBottom: 500
        })
      })
    })
  }
}
</script>

<style>
</style>