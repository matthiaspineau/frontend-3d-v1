import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    step: 10,
    personnage: [
      { id: 1, name: 'pantheon', role: 'toplaner'},
      { id: 2, name: 'vayne', role: 'ad carry'},
      { id: 3, name: 'shen', role: 'toplaner'},
      { id: 4, name: 'ahri', role: 'mage'},
      { id: 5, name: 'thresh', role: 'support'},
      { id: 6, name: 'sivir', role: 'ad carry'},
      { id: 7, name: 'trundle', role: 'jungler'},
    ]
  },
  getters: {
    giveToplaner(state) {
      return state.personnage.filter( perso => perso.role == 'toplaner')
    },
    totalTopLaner(state, getters) {
      return getters.giveToplaner.length 
    },
    getPersoById: (state) => (id) => {
      return state.personnage.find(perso => perso.id === id)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
