<template>
  <h1>Logout</h1>
  <button class="btn btn-danger" @click="doLogout">خروج</button>
</template>

<script>
export default {
  name: "LogoutView",
  methods: {
    doLogout(){
      this.$store.commit('logout')
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>

</style>