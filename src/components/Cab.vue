<template>
	<div>
		<scroller :on-infinite="infinite"  ref="myscroller" noDataText="没有更多数据"  class="scroll">
			<ul class="cab">
			<li v-for="ca in cabData">
    			<dl>
    				<dt><img v-lazy="ca.img" alt="" /></dt>
    				<dd>{{ca.des}}</dd>
    				<dd><p>￥</p><p>{{ca.pri}}</p></dd>
    			</dl>
    			<i class="iconfont icon-favor"></i>
    		</li>
    		</ul>
		</scroller>
	</div>
</template>

<script>
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
export default{
  data () {
    return {
      cabData: []
    }
  },
  methods: {
    infinite (done) {
      setTimeout(() => {
        this.$http.get('../../static/json/Cab.json').then(function (response) {
          this.cabData = this.cabData.concat(response.data)
        })
        done()
      }, 1000)
    }
  }
}
</script>

<style>
.cab{
	overflow:hidden;
}
.cab li{
	background-color: #fff;
  width: 495px;
  height: 690px;
  float: left;
  position: relative;
  margin-left: 30px;
  margin-top: 30px;
}
.cab li img {
	width: 495px;
  height: 495px;
}
.cab li dd:first-of-type{
	padding: 16px 20px 0px;
  line-height: 45px;
  font-size: 36px;
  color: #999;
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.cab li dd:last-of-type {
  padding: 0 20px;
  margin-top: 20px;
  overflow: hidden;
}
.cab li dd:last-of-type p {
  float: left;
  line-height: 36px;
  font-size: 36px;
  color: #e77070;
}
.cab li i {
  position: absolute;
  bottom: 26px;
  right: 30px;
  width: 44px;
  height: 44px;
  font-size: 44px;
}
</style>