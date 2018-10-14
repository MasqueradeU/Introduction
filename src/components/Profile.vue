<template>
  <div class="profile">
    <div id="profile0">
      <img src="../assets/profile_picture.png" class="profile-picture"/>
      <h2>{{ name }}
        <a href="https://github.com/MasqueradeU/introduction" target="_blank">
          <img src="../assets/github.svg" width="16" height="16">
        </a>
        <a href="https://twitter.com/htmhtkz" target="_blank">
          <img src="../assets/twitter.svg" width="16" height="16">
        </a>
      </h2>
      <p>{{ description }}</p>
      <p>
        <img src="../assets/globe.svg" width="16" height="16">{{ prefecture }}
      </p>
      <p>
        <img src="../assets/thumbtack.svg" width="16" height="16">{{ currentPrefecture }}
      </p>
      <p>
        <img src="../assets/link.svg" width="16" height="16">
        <a href="https://twitter.com/htmhtkz" target="_blank">
          {{ ULR1 }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'Hitomi Hatsukaze',
      description: 'A web developer in tokyo prefecture. JS, Laravel and C++(programming competition)',
      prefecture: 'Aichi',
      currentPrefecture: 'Tokyo',
      ULR1: 'H.Hkaze'
    }
  }
}
</script>

<style scoped>
.profile {
  max-width: 1060px;
  display: flex;
}

#profile0{
  position: relative;
  max-width: 25%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,.125);
  margin-left: 10px
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
}

a {
  color: #42b983;
}
</style>
