<template>
  <div class="profile">
      <img :src="img[profileId]" class="profile-picture"/>
      <h2>{{ profile.name }}
        <a :href="profile.githubUrl" target="_blank">
          <img src="../assets/github.svg" width="16" height="16">
        </a>
        <a :href="profile.twitterUrl" target="_blank">
          <img src="../assets/twitter.svg" width="16" height="16">
        </a>
      </h2>
      <p>{{ profile.description }}</p>
      <p>
        <img src="../assets/globe.svg" width="16" height="16">{{ profile.prefecture }}
      </p>
      <p>
        <img src="../assets/thumbtack.svg" width="16" height="16">{{ profile.currentPrefecture }}
      </p>
      <p>
        <img src="../assets/link.svg" width="16" height="16">
        <a :href="profile.freeUrl" target="_blank">
          {{ profile.freeUrlName }}
        </a>
      </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  props: {
    profileId: Number
  },

  data () {
    return {
      img: {
        1: require('../assets/profile_picture1.png'),
        2: require('../assets/profile_picture2.png')
      }
    }
  },

  computed: {
    ...mapState(['profiles']),
    profile () {
      return this.profiles[this.profileId]
    }
  }
}
</script>

<style scoped>
.profile {
  position: relative;
  width: 100%;
  max-width: 25%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,.125);
  margin-left: 10px;
  margin-bottom: 10px;
  flex: 0 0 25%;
}

.profile-picture {
  height: 256px;
}

h1, h2 {
  font-weight: normal;
  margin: 10px;
}

p {
  font-weight: normal;
  display: block;
  font-size: 120%;
  margin: 10px;
  margin-bottom: 10px;
}

a {
  color: #42b983;
}
</style>
