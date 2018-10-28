import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  name: 'Hitomi Hatsukaze',
  description: 'A web developer in tokyo prefecture. JS, Laravel and C++(programming competition)',
  prefecture: 'Aichi',
  currentPrefecture: 'Tokyo',
  urlName: 'H.Hkaze'
}

const mutations = {
  UPDATE_NAME (state, newName) {
    state.name = newName
  }
}

export default new Vuex.Store({
  state,
  mutations
})
