import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: [{value: '', addNext: true}],
    teams: [],
    numTeams: 1,
    genAvailable: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
