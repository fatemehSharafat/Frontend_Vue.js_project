<template>
  <!-- ======= pos Register Section ======= -->
 <FormRegister></FormRegister>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue';
export default {
  name: "PosRegisterView",
    components: {
    FormRegister,
  },
  data() {
    let poses = localStorage.getItem("poses")
    poses= JSON.parse(poses)
    return {
      fixed_pos: null,
      portable_pos: null,
      kiosk: null,
      poses:poses,
      pos:{}
    }
  },
  methods: {
    // check() {
    //   if (this.kiosk === true) {
    //     this.fixed_pos = false
    //     this.portable_pos = false
    //   }
    //   if (this.fixed_pos === true) {
    //     this.portable_pos = false
    //     this.kiosk = false
    //   }
    //   if (this.portable_pos === true) {
    //     this.fixed_pos = false
    //     this.kiosk = false
    //   }
    //
    // },
  }
}

</script>

<style scoped>

</style>