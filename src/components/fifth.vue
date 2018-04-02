<template>
	<div>
		<!--<p v-on:click="inc">{{d}}</p>
		<p v-on:click="add">{{foo}}</p>-->
		<!--<slot text="hello from child" v-bind:dd="d"></slot>
		<button @click="sho = !sho">
		    Toggle render
		</button>
		<transition name="bounce">
			<div v-if="sho">{{d}}</div>
		</transition>-->
		456679898454
	</div>
	
</template>
<script>
export default{
  data () {
    return {
      d: 5,
      sho: true,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    inc: function () {
      this.d--
      this.$emit('increment')
    },
    add: function () {
      this.foo++
    }
  },
  props: ['foo']
}
</script>
<style type="text/css">
.bounce-enter-active {
  animation: bounce-in .5s reverse;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>