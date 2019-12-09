import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: [{value: '', addNext: true}],
    teams: [{teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']},
      {teamName: 'Team 1', names: ['bob', 'terry']}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
