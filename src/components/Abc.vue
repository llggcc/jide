<template>
	<div class="fdiContent">
		<scroller   ref="myscroller" noDataText="没有更多数据" class="scroll">
		<img v-for="data in fdidata" v-lazy="data.img" alt="" />
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
      fdidata: []
    }
  },
  mounted: function () {
    this.$http.get('../../static/json/FamDetailImg.json').then(function (response) {
      this.fdidata = response.data
    })
    console.log(a)
    let a = 1
    for (let i = 0; i < 3; i++) {
//    let i = 'abc'
      console.log(i)
    }
  }
}
</script>

<style>
.fdiContent img{
	width:1080px;
}
</style>