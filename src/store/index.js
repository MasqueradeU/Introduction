import Vue from 'vue'
import Vuex from 'vuex'
import profileData from '../assets/profile.json'

Vue.use(Vuex)

const state = {
  profiles: {}
}

const mutations = {
  UPDATE_NAME (state, profiles) {
    state.profiles = profiles
  }
}

const actions = {
  fetchProfiles ({commit}) {
    const profiles = profileData
    commit('UPDATE_NAME', profiles)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
