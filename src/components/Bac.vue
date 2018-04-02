<template>
	<div>
		<scroller :on-infinite="infinite"  ref="myscroller" noDataText="没有更多数据"  class="scroll">
			<ul>
	<li v-for="bac in bacData" class="bacXinde">
		<h4>{{bac.title}}</h4>
		<p>{{bac.content}}</p>
	</li>
	</ul>
</scroller>
	</div>

</template>

<script>
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
export default{
  data () {
    return {
      bacData: []
    }
  },
  methods: {
    infinite (done) {
      setTimeout(() => {
        this.$http.get('../../static/json/Bac.json').then(function (response) {
          this.bacData = this.bacData.concat(response.data)
        })
        done()
      }, 1000)
    }
  }
}
</script>

<style>
	.bacXinde{
		background-color: #fff;
  		width: 1080px;
  		padding: 40px 30px;
	}
	.bacXinde h4{
	  font-weight: normal;
  	  font-size: 46px;
	  line-height: 46px;
	  margin-bottom: 32px;
	  overflow: hidden;
	  white-space: nowrap;
	  text-overflow: ellipsis;
	}
	.bacXinde p{
		font-size: 36px;
  color: #999;
  line-height: 36px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
	}
</style>