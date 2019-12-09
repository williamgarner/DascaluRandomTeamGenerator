import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: [{value: '', addNext: true}],
    teams: [{teamName: 'Team 1', people: [], numberOfPeople: 5},
      {teamName: 'Team 2', people: [], numberOfPeople: 4},
      {teamName: 'Team 3', people: [], numberOfPeople: 2},
      {teamName: 'Team 4', people: [], numberOfPeople: 8},
      {teamName: 'Team 5', people: [], numberOfPeople: 5}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
