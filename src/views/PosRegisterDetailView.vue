<template>
  <div class=""> {{$route}}</div>
  <hr>
  <div>{{ pos.id_number }}</div>
<FormRegister pos>

</FormRegister>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue';
import {Vue} from "vue-class-component";
export default {
  name: "PosRegisterDetailView",
  components: {
    FormRegister
  },
  data() {
    let poses = localStorage.getItem("poses")
    poses = JSON.parse(poses)
    let pos= poses.find(
        pos => pos.id_number == this.$route.params.id_number
    )
    return {
      fixed_pos: null,
      portable_pos: null,
      kiosk: null,
      poses: poses,
      pos: pos,
    }
  }
}
</script>

<style scoped>

</style>