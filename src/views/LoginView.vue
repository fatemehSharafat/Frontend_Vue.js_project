<template>
  <div class="Login log">
    <section id="log" class="">
      <div class="container">
        <div class="info">
          <div class="section-header">
            <a href="https://khadamatik.ir/" class="logo" aria-label="Logo" title="خدماتیک ">
              <img width="66" height="66" src="@/assets/khadamatik_gorup_logo.png"
                   class="site-logo skip-data-lazy attachment-full size-full" alt="خدماتیک"></a>
          </div>
          <form  class="log-form"  @submit.prevent="doLogin">
            <!--                {% csrf_token %}-->
            <!--{#                  {% render_form serializer template_pack='rest_framework/vertical' %}#}-->
            <div class="form-group mt-3">
              <input type="text" name="national_code" class="form-control" id="national_code"
                     placeholder="کد ملی  خود را وارد كنيد..." v-model="national_code" :class="{'is-invalid': national_codeE===true,'is-valid': national_codeE===false}" required>
              <div class="invalid-feedback" v-if="national_codeE" >{{national_codeEM}}</div>
            </div>
            <div class="form-group mt-3">
              <input type="password" name="password" class="form-control" id="password"
                     placeholder="رمز عبور خود را وارد كنيد..." v-model="password" :class="{'is-invalid': passwordE===true,'is-valid': passwordE===false}" required>
              <div class="invalid-feedback" v-if="passwordE" >{{passwordEM}}</div>
            </div>
            <div class="row">
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <label>آيا عضو سايت هستيد؟<a href="#">ثبت نام</a></label>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
                <label class="form-check-label">مرا بخاطر بسپار</label>
              </div>
            </div>
          </form>
          <button type="submit" class="text-uppercase" @click="doLogin"> ورود به صفحه</button>
          <div class="form-group mt-3">
            <a href="#">رمز عبورتان را گم کرده اید؟ </a>
            <a href="#" class="Privacy-link">سیاست حفظ حریم خصوصی </a>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data(){
    return{
      national_code: '',
      password:'',
      national_codeE:  null,
      passwordE: null,
      national_codeEM:  null,
      passwordEM: null,

    }
  },
  methods: {
    doLogin() {
      let access = true
      //national_code
      if (this.national_code.length < 10) {
        access= false
        this.national_codeE = true
        if (this.national_code.length == 0) {
          this.national_codeEM = "کد ملی خود را وارد کنید. "
        } else {
          this.national_codeEM = " کد ملی باید 10 رقم وارد شود."
        }
      } else {
        this.national_codeE = false
        this.national_codeEM = ''
      }
      //password
      if (this.password.length < 8) {
        access = false
        this.passwordE = true
        if (this.password.length == 0) {
          this.passwordEM = "رمز عبور وارد نشده است. "
        } else {
          this.passwordEM = " رمز عبور حداقل باید 8 کارکتر داشته باشد."
        }
      } else {
        this.passwordE = false
        this.passwordEM = ''
      }
      if (access){
        this.$store.commit('login', `${this.national_code}:${this.password}`)
        this.$router.push('/pos-list')
      }

    }
  }
}
</script>

<style scoped>

</style>