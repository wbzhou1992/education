import Vue from 'vue'
import Vuex from 'vuex'
import tool from './assets/scripts/tool.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:tool.cookie.get('user'),
    image: tool.cookie.get('image')
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
