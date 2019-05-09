import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    image: ''
  },
  getters: {
    
  },
  mutations: {
    setUser (state, payload) {
      state.username = payload.username
      state.image = payload.image
    }
  },
  actions: {
    setUser (context,payload) {
      context.commit('setUser',payload)
    }
  }
})
