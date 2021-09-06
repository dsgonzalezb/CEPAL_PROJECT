import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: 0,
  },
  mutations: {
    increaseLoading (state) {
        state.loading += 1;
    },
    decreaseLoading (state) {
        if (state.loading < 0) {
          state.loading == 0;
        } else {
          state.loading -= 1;
        }
    }
  },
  actions: {
    clearLoading({commit}) {
        commit('decreaseLoading');
    },
    setLoading({commit}) {
        commit('increaseLoading');
    }
  },
  getters:{
    isLoading (state) {
        return state.loading;
    }
  },
  modules:{
  }
})
