import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: 0,
    territory: 0
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
    },
    set_territory(state, payload){
      state.territory = payload
      localStorage.setItem('id_territorio', payload);
    }
  },
  actions: {
    clearLoading({commit}) {
        commit('decreaseLoading');
    },
    setLoading({commit}) {
        commit('increaseLoading');
    },
    setTerritory({commit}, payload){
      commit('set_territory', payload)
    }
  },
  getters:{
    isLoading (state) {
        return state.loading;
    },
    territory(state){
      return state.territory;
    }
  },
  modules:{
  }
})
