<template>
	<div class="bottom">
    	<router-link class="_lin" :to="{ path: '/main'}">
    		<i class="iconfont icon-home"></i>
	      <p>首页</p>
    	</router-link>
    	<router-link class="_lin" :to="{ path: '/main/famousor'}">
    		<i class="iconfont icon-friend_light"></i>
	      <p>名人名家</p>
    	</router-link>
    	<router-link class="_lin" :to="{ path: '/main/user'}">
    		<i class="iconfont icon-people"></i>
	      <p>我的</p>
    	</router-link>
    	<router-view></router-view>
    </div>
</template>

<script>
import '../../static/css/main.css'
export default{
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    cha: function () {
      this.$nextTick(function () {
      })
    }
  },
  components: {
  }
}
</script>

<style>
</style>