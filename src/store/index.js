import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nbArticles: 0,
    articles: []
  },
  getters: {

  },
  mutations: {
    ADD_ARTICLE(state, payload) {
      state.articles.push(payload.article)
      state.nbArticles += 1
    }
  },
  actions: {
    addArticles(context) {
      context.commit('ADD_ARTICLE')
    }
  },
  modules: {
  }
})
