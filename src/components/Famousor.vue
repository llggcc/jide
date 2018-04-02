<template>
	<div>
			<div class="conten" id="lazyFam">
			<scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller" noDataText="没有更多数据" refreshText="下拉刷新">
			<ul class="lists" >
				<p v-show='show'>123</p>
				<li v-for="re in res" >
					<router-link class="" v-bind:to="{ path: '/main/FamDetail'}" >
					<div class="_left">
						<img v-lazy="re.img"/>
					</div>
					<div class="_right">
						<dl>
							<dt>{{re.name}}</dt>
							<dd><span>名家简介：</span><p>{{re.describe}}</p></dd>
							<dd><span>心得体会：</span><p>{{re.xinde}}</p></dd>
						</dl>	
					</div>
					<i class="iconfont icon-favor"></i>
					</router-link>
				</li>
				
			</ul>
			</scroller>
		</div>
		
	</div>

</template>

<script>
import '../../static/css/famousor.css'
import Vue from 'vue'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import { mapActions, mapGetters } from 'vuex'
Vue.use(VueScroller)
Vue.use(VueLazyload, {
  try: 5 // 这个是加载图片数量
})
export default{
  data () {
    return {
      res: [],
      show: false
    }
  },
  computed: {
    ...mapGetters([
      'todos',
      'isShow'
    ])
  },
  methods: {
    ...mapActions([
      'increment'
    ]),
    infinite (done) {
      setTimeout(() => {
        this.$http.get('../../static/json/famousor.json').then(function (response) {
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
      this.$http.get('../../static/json/famousor.json').then(function (response) {
        this.res = response.data
      })
    }
  },
  mounted: function () {
    this.show = this.isShow
    console.log(this.todos)
  }
}
</script>

<style>
</style>