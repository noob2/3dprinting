import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false
  },
  mutations: {
    SET_IS_LOGGED(state, payload) {
      state.isLogged = payload
    }
  },
  actions: {
    setIsLogged(context, boolean) {
      context.commit('SET_IS_LOGGED', boolean)
    }
  },
  getters: {
    getIsLogged(state) {
      return state.isLogged
    }
  }
})
