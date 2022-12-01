<template>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login"  v-if="! $store.state.IsAuthenticated">Login|</router-link>
    <router-link to="/logout" v-if=" $store.state.IsAuthenticated">Logout|</router-link>
    <router-link to="/pos-list" v-if=" $store.state.IsAuthenticated">PosList|</router-link>
    <router-link to="/pos-register" v-if=" $store.state.IsAuthenticated">PosRegister|</router-link>

  </nav>
  {{$store.state}}
<!--  <br>-->
<!--  {{$route}}-->
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {},
  watch: {
    $route(){
      this.$store.commit('onStart')
    }
  },
  mounted(){
    this.$store.commit('onStart')
  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
