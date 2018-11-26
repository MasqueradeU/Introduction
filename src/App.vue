<template>
  <div id="app">
    <div id="profiles">
    <Profile
      :v-if="isShownProfile"
      v-for="profile in profiles"
      :key="profile.profileId"
      :profileId="profile.profileId"
    />
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Profile
  },

  computed: {
    ...mapState(['profiles']),
    isShownProfile () {
      return this.profiles.length === 0
    }
  },

  methods: {
    ...mapActions(['fetchProfiles'])
  },

  created () {
    this.fetchProfiles()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

#profiles {
  max-width: 1060px;
  display: flex;
  flex-wrap: wrap;
}
</style>
