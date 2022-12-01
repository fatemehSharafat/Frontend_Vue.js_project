<template>
  <div class="PosList pos-show">
    <section id="pos-show" class="container-fluid">
      <div class="container pos-search">
        <div class="row ">
          <div class="col-1 mt-md-0 ">
            <button id="search-btn" href="#" type="submit" class="search-btn mx-2 px-1  mt-1"><i
                class="bi bi-search "></i></button>
          </div>
          <div class="col-11  mt-md-0  ">
            <input type="text" name="search-box" class="form-control" placeholder="" id="search-box">
          </div>
        </div>
      </div>
      <div id="result" class="pos-list">

      </div>
      <div id="pos-list" class="pos-list">
      <!--         Request cards are placed inside this-->
        <article v-for="article in articles" v-bind:key="article.id_number">

          <div class="container card-body pos-card  mt-3">
            <div class="row">
               <div class="col-md-6  mt-3 mt-md-0">
                <label class="card-title">شماره درخواست  </label>
                <p class="card-text" name="pk" ><a :href="`/article/${article.id_number}`">{{article.id_number}} </a> </p>
              </div>
              <div class="col-md-6  mt-3 mt-md-0">
                <label class="card-title">نام: </label>
                <p class="card-text">{{article.first_name}} </p>
              </div>
              <div class="col-md-6  mt-3 mt-md-0">
                <label class="card-title">نام خانوادگی: </label>
                <p class="card-text">{{article.last_name}} </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6  mt-3 mt-md-0">
                <label class="card-title"> تاریخ ثبت درخواست: </label>
                <p class="card-text">{{article.create_time}}</p>
              </div>
              <div class="col-md-6  mt-3 mt-md-0">
                <label class="card-title"> وضعیت: </label>
                <p class="card-text staus "> {{article.staus}} </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12  mt-3 mt-md-0 pos-btn-group">
                <a class="btn btn-success card-btn-edit edit-btn" href="#" onclick="getPosRequest(this)"><i
                    class="bi bi-pencil-square"></i>
                  ويرايش درخواست </a>
              </div>

            </div>
          </div>
        </article>
      </div>

      <a href="#" class="btn btn-lg card-btn-create mt-3 " @click="goPosForm">
        <i class="bi bi-plus-square-dotted" ></i>
        ایجاد درخواست جدید
      </a>
  </section>
  </div>
</template>

<script>
export default {
  name: "PosListView",
  data(){
    return{
      articles: [
        {
          id_number: 'test1',
          first_name: 'ff',
          last_name: 'sdfgd',
          national_code: 'dfgdf',
          create_time: 'dfg',
          staus: 'dfgf',
        },
        {
          id_number: 'test51',
          first_name: 'ff',
          last_name: 'sdfgd',
          national_code: 'dfgdf',
          create_time: 'dfg',
          staus: 'dfgf',
        }
      ]
    }
  },
  methods: {
  goPosForm(){
    // this.$store.commit('onStart')
    this.$router.push('/pos-register')

  }
  }
}
</script>

<style scoped>

</style>