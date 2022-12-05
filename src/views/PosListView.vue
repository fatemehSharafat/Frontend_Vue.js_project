<template>
  <div class="PosList pos-show">

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
    <section id="pos-show" class="container-fluid">
      <div id="pos-list" class="pos-list">
        <!--         Request cards are placed inside this-->
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th scope="col">شناسه درخواست</th>
            <th scope="col">نام فروشگاه</th>
            <th scope="col">نام</th>
            <th scope="col">نام خانوادگی</th>
            <th scope="col">تاریخ آخرین تغییرات</th>
            <th scope="col">وضعیت</th>
            <th scope="col">ویرایش</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="pos in poses" :key="pos.id_number">
            <td><a :href="`/pos/${pos.id_number}`">{{ pos.id_number }} </a></td>
            <td>{{ pos.first_name }}</td>
            <td>{{ pos.first_name }}</td>
            <td>{{ pos.last_name }}</td>
            <td>{{ pos.updated_time }}</td>
            <td> {{ pos.status }}</td>
            <td>
               <a class="btn btn-success card-btn-edit edit-btn" href="#" onclick="getPosRequest(this)"><i
                  class="bi bi-pencil-square"></i>
                ويرايش  </a>
            </td>
          </tr>
          </tbody>
        </table>

      </div>

      <a href="#" class="btn btn-lg card-btn-create mt-3 " @click="goPosForm">
        <i class="bi bi-plus-square-dotted"></i>
        ایجاد درخواست جدید
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "PosListView",
  data() {
    let poses = localStorage.getItem("poses")
    poses= JSON.parse(poses)
    return {
      poses:poses
    }
  },
  methods: {
    goPosForm() {
      // this.$store.commit('onStart')
      this.$router.push('/pos-register')

    }
  }
}
</script>

<style scoped>

</style>