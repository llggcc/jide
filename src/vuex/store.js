import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const Store = new Vuex.Store({
  state: {
    count: 0,
    show: true
  },
  mutations: {
    increment (state, n) {
      state.count += 10
    }
  },
  actions: {
    increment ({commit}, n) {
      commit('increment', n)
    }
  },
  getters: {
    todos: function (state) {
      return state.count
    },
    isShow: function (state) {
      return state.show
    }
  }
})
export default Store
