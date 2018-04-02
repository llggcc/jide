<template>
	
<div class="famconten">
	<a href="#mao" id="hui">回到顶部</a>
	<div class="out">
		
	
	<div class="banner" id="mao">
	<div class="head-img">
		<img src="../../static/img/headimg.png" />
	</div>
	<div class="user_mes">
		<h4>用户昵称</h4>
		<div>
			<p>擅长：</p>
			<span>珠宝玉石</span>
		</div>
	</div>
	<i class="iconfont icon-favor"></i>
	<p class="collect-tip">已收藏</p>

</div>
<div class="tab">
    <a href="javascript:;" class="item cur">名家介绍</a>
	<a href="javascript:;" class="item">心得体会</a>
    <a href="javascript:;" class="item">店铺</a>
</div>
<div class="motel"></div>
<swiper :options="swiperOption" ref="mySwiper" class="famSwiper">
  
    <swiper-slide class="de-img">
	
    	<Abc></Abc>
    </swiper-slide>
    <swiper-slide>
    	<Bac></Bac>
    </swiper-slide>
 <swiper-slide><Cab></Cab></swiper-slide>
</swiper>
</div>
</div>
</template>
<script>
import '../../static/css/mingjia.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'
import Abc from './Abc'
import Bac from './Bac'
import Cab from './Cab'
export default{
  data () {
    return {
      a: 0,
      swiperOption: {
        notNextTick: true,
        onSlideChangeStart: function (swiper) {
          var _index = swiper.activeIndex
          $('.item').eq(_index).addClass('cur').siblings().removeClass('cur')
        }
      }
    }
  },
  compontents: {
    swiper,
    swiperSlide
  },
  components: {
    Abc,
    Bac,
    Cab
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
  },
  mounted: function () {
    var self = this
    var _height = document.documentElement.clientHeight + 255
    $('.out').css('height', _height + 'px')
    this.$nextTick(function () {
      $('#hui').click(function () {
        $('.motel').css('display', 'block')
      })
      $('.item').click(function () {
        var index = $(this).index()
        $(this).addClass('cur').siblings().removeClass('cur')
        self.swiper.slideTo(index, 1000, false)
      })
      $('.out').on('touchmove', function (e) {
        var _top = $('.out').position().top
        if (_top <= -400) {
          $('.motel').css('display', 'none')
        } else {
          $('.motel').css('display', 'block')
        }
      })
    })
  }
}
</script>

<style>
.motel{
	position:absolute;
	top:526px;
	left:0;
	right:0;
	bottom:0;
	z-index:10;
}
.famconten{
	overflow:scroll;
}
.famSwiper{
	position:absolute;
	top:526px;
	left:0;
	right:0;
	bottom:0;
	overflow-y:scroll;
}
.swiper-slide{
	overflow-y:hidden;
}
#hui{
	position:fixed;
	right:50px;
	bottom:300px;
	width:100px;
	padding:20px 10px;
	height:80px;
	font-size:36px;
	text-align: center;
	z-index:100;
	border-radius: 50%;
	background-color:rgba(0,0,0,0.3)
}
.out{
	position:relative;
	overflow:hidden;
}
</style>