<template>
  <div class="hello">
    <img src="../assets/profile_picture.png" id="profile-picture"/><br>
    <a href="https://github.com/" target="_blank">
      <img src="../assets/github.svg" width="16" height="16">
    </a>
    <a href="https://twitter.com/htmhtkz" target="_blank">
      <img src="../assets/twitter.svg" width="16" height="16" id="twitter-icon">
    </a>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Profile-picture {
  width: 256px;
  height: 256px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
