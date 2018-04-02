<template>
		<div class="recom-con">
			<scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller" noDataText="没有更多数据" refreshText="下拉刷新">
				<ul class="lists">
					<a href="javascript:;" v-for="re in res"><li>
						<dt><img v-lazy="re.src"/></dt>
						<dd>{{re.dian}}</dd>
						<dd><p>主营：</p><span>{{re.main}}</span></dd>
						<dd><p>人气：</p><span>{{re.fans}}</span><p>销量：</p><span>{{re.sale}}</span></dd>
					</li></a>
				</ul>
			</scroller>
	</div>
</template>

<script>
import '../../static/css/tuijianshangpu.css'
import Vue from 'vue'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
Vue.use(VueScroller)
Vue.use(VueLazyload, {
  try: 10 // 这个是加载图片数量
})
export default{
  data () {
    return {
      res: []
    }
  },
  methods: {
    infinite (done) {
      setTimeout(() => {
        this.$http.get('../../static/json/recommend.json').then(function (response) {
          this.res = this.res.concat(response.data)
        })
        done()
      }, 1000)
    },
    refresh (done) {
      setTimeout(() => {
        this.load()
        done()
      }, 2000)
    },
    load () {
      this.$http.get('../../static/json/recommend.json').then(function (response) {
        this.res = response.data
      })
    }
  },
  mounted: function () {
  }
}
</script>

<style>
</style>