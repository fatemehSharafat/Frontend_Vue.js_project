<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/khadamatik_gorup_name_logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <FormRegister></FormRegister>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
