<template>
  <div class="PosRegidter pos">
    <section id="pos" class="">
      <div class="container">
        <div class="info">
          <div class="section-header">
            <div class="row">
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <div class="section-header">
                  <a href="https://khadamatik.ir/" class="logo" aria-label="Logo" title="خدماتیک ">
                    <img src="@/assets/khadamatik_gorup_name_logo.png"
                         class="site-logo skip-data-lazy attachment-full size-full" alt="خدماتیک"></a>
                </div>
              </div>
              <div class="col-md-6 form-group mt-6 mt-md-5">
                <h2>فرم درخواست کارت خوان</h2>
              </div>
            </div>
          </div>
          <form action="" method="post" role="form" class="pos-form" id="pos-form">
            <section class="section-body" name="store-info">
              <div class="row">
                <h6 class="segment-name"> اطلاعات فروشکاه/شرکت </h6>
                <hr>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="store_name"> نام فروشگاه <span class='text-danger'>*</span></label>
                  <input type="text" name="store_name" class="form-control" id="store_name"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="store_phone"> تلفن فروشگاه <span class='text-danger'>*</span></label>
                  <input type="number" name="store_phone" class="form-control" id="store_phone"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="ownership_type">نوع مالکیت محل فعالیت <span class='text-danger'>*</span></label>
                  <select name="ownership_type" class=" form-control" id="ownership_type" required>
                    <option value="ملکی">ملکی</option>
                    <option value="سرقفلی">سرقفلی</option>
                    <option value="استیجاری">استیجاری</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-9 form-group mt-3 mt-md-0">
                  <label for="store_address"> نشانی فروشگاه / شرکت <span class='text-danger'>*</span></label>
                  <input type="text" name="store_address" class="form-control" id="store_address"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="poscod_pos"> کد پستی محل نصب کارت خوان <span class='text-danger'>*</span></label>
                  <input type="number" name="poscod_pos" class="form-control" id="poscod_pos"
                         placeholder="" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="business_num"> شماره پروانه کسب/شماره صنفی اجاره نامه <span
                      class='text-danger'>*</span></label>
                  <input type="number" name="business_num" class="form-control" id="business_num"
                         placeholder="" required>
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="tax_code">کد رهگیری مالیاتی <span class='text-danger'>*</span></label>
                  <input type="number" name="tax_code" class="form-control" id="tax_code"
                         placeholder="" required>
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="senf"> صنف <span class='text-danger'>*</span></label>
                  <input type="text" name="senf" class="form-control" id="senf"
                         placeholder="" required>
                </div>


              </div>
              <div class="row">
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="lease_from">مهلت اجاره نامه از تاریخ</label>
                  <input type="text" name="lease_from" class="form-control" id="lease_from"
                         placeholder="" data-jdp>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="lease_until">مهلت اجاره نامه تا تاریخ </label>
                  <input type="text" name="lease_until" class="form-control" id="lease_until"
                         placeholder="" data-jdp>
                </div>
              </div>
            </section>
            <section class="section-body" name="personal-info">
              <div class="row">
                <h6 class="segment-name">اطلاعات مدیر فروشکاه/شرکت</h6>
                <hr>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="Fname"> نام <span class='text-danger'>*</span></label>
                  <input type="text" name="Fname" class="form-control" id="Fname"
                         placeholder="نام خود را وارد كنيد..." required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="lname"> نام خانوادگی <span class='text-danger'>*</span></label>
                  <input type="text" name="lname" class="form-control" id="lname"
                         placeholder="نام خانوادگی خود را وارد كنيد..." required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="father_name"> نام پدر<span class='text-danger'>*</span> </label>
                  <input type="text" name="father_name" class="form-control" id="father_name"
                         placeholder="نام پدر خود را وارد كنيد..." required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="birth"> تاریخ تولد<span class='text-danger'>*</span> </label>
                  <input type="text" name="birth" class="form-control" id="birth"
                         placeholder="" required data-jdp>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="Ncode"> کد ملی / شناسه ملی<span class='text-danger'>*</span></label>
                  <input type="number" name="Ncode" class="form-control" id="Ncode"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="series_Ncard"> سریال پشت کارت ملی </label>
                  <input type="text" name="series_Ncard" class="form-control" id="series_Ncard"
                         placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="id_number"> شماره شناسنامه / کدثبتی<span class='text-danger'>*</span> </label>
                  <input type="number" name="id_number" class="form-control" id="id_number"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="id_serial"> سریال شناسامه<span class='text-danger'>*</span> </label>
                  <input type="text" name="id_serial" class="form-control" id="id_serial"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="id_series"> سری شناسنامه<span class='text-danger'>*</span> </label>
                  <input type="text" name="id_series" class="form-control" id="id_series"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="registration"> صادره از/ ثبت شده در<span class='text-danger'>*</span> </label>
                  <input type="text" name="registration" class="form-control" id="registration"
                         placeholder="" required>
                </div>

              </div>
              <div class="row">
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="mobile"> تلفن همراه <span class='text-danger'>*</span></label>
                  <input type="number" name="mobile" class="form-control" id="mobile"
                         placeholder="" required>
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="home_phone"> تلفن منزل <span class='text-danger'>*</span></label>
                  <input type="number" name="home_phone" class="form-control" id="home_phone"
                         placeholder="" required>
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="email">آدرس الکترونیک </label>
                  <input type="email" name="email" class="form-control" id="email"
                         placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="state"> استان<span class='text-danger'>*</span> </label>
                  <input type="text" name="state" class="form-control" id="state"
                         placeholder="" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="city"> شهر<span class='text-danger'>*</span> </label>
                  <input type="text" name="city" class="form-control" id="city"
                         placeholder="" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-9 form-group mt-3 mt-md-0">
                  <label for="home_address"> نشانی محل سکونت <span class='text-danger'>*</span></label>
                  <input type="text" name="home_address" class="form-control" id="home_address"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="postal_code">کد پستی محل سکونت<span class='text-danger'>*</span> </label>
                  <input type="number" name="postal_code" class="form-control" id="postal_code"
                         placeholder="" required>
                </div>
              </div>
            </section>
            <section class="section-body" name="introduce-info">
              <div class="row">
                <h6 class="segment-name">معرفان</h6>
                <hr>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="first_introducer_name"> نام معرف اول <span class='text-danger'>*</span></label>
                  <input type="text" name="first_introducer_name" class="form-control" id="first_introducer_name"
                         placeholder="" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="first_introducer_lastname"> نام خانوادگی معرف اول <span
                      class='text-danger'>*</span></label>
                  <input type="text" name="first_introducer_lastname" class="form-control"
                         id="first_introducer_lastname"
                         placeholder="" required>
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="first_introducer_phone">تلفن تماس معرف اول <span class='text-danger'>*</span></label>
                  <input type="number" name="first_introducer_phone" class="form-control" id="first_introducer_phone"
                         placeholder="" required>
                </div>
                <div class="col-md-9 form-group mt-3 mt-md-0">
                  <label for="first_introducer_address"> نشانی محل سکونت معرف اول </label>
                  <input type="text" name="first_introducer_address" class="form-control" id="first_introducer_address"
                         placeholder="" required>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="second_introducer_name"> نام معرف دوم </label>
                  <input type="text" name="second_introducer_name" class="form-control" id="second_introducer_name"
                         placeholder="">
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="second_introducer_lastname"> نام خانوادگی معرف دوم </label>
                  <input type="text" name="second_introducer_lastname" class="form-control"
                         id="second_introducer_lastname"
                         placeholder="">
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="second_introducer_phone">تلفن تماس معرف دوم </label>
                  <input type="number" name="second_introducer_phone" class="form-control" id="second_introducer_phone"
                         placeholder="">
                </div>
                <div class="col-md-9 form-group mt-3 mt-md-0">
                  <label for="second_introducer_address"> نشانی محل سکونت معرف دوم </label>
                  <input type="text" name="second_introducer_address" class="form-control"
                         id="second_introducer_address"
                         placeholder="">
                </div>
              </div>
            </section>
            <section class="section-body" name="substrate-type">
              <div class="row">
                <h6 class="segment-name">نوع دستگاه و بستر ارتباطی</h6>
                <hr>
              </div>
              <div class="row">
                <label class="form-group">نوع دستگاه:</label>
                <div class="col-md-4 form-group mt-3 mt-md-0">

                  <input type="checkbox"  class="checkoption" value="1"  v-model="checked"  @click="check()">
                  pos ثابت
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="2"  v-model="checked"  @click="check()">
                  pos سیار
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="3"  v-model="checked"  :click="check()">
                  کیوسک
                </div>
              </div>
            </section>

            <div class="row">

              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="substrate_type"> بستر ارتباطی <span class='text-danger'>*</span></label>
                <select name="substrate_type" class=" form-control" id="substrate_type" required>
                  <option value="DIUALUP">DIUALUP</option>
                  <option value="GPRS">GPRS</option>
                  <option value="COMBO">COMBO</option>
                  <option value="WIFI">WIFI</option>
                </select>
              </div>

            </div>
            <div class="row">
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="ّfirst_accountNum"> شماره حساب اول <span class='text-danger'>*</span></label>
                <input type="number" name="first_accountNum" class="form-control" id="ّfirst_accountNum"
                       placeholder="" required>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="first_bankName"> نام بانک اول <span class='text-danger'>*</span></label>
                <select name="first_bankName" class=" form-control" id="first_bankName" required>
                  <option value="ایران زمین">ایران زمین</option>
                  <option value="آینده">آینده</option>
                  <option value="پست بانک">پست بانک</option>
                  <option value="خاورمیانه">خاورمیانه</option>
                  <option value="دی">دی</option>
                  <option value="رفاه">رفاه</option>
                  <option value=" سامان">سامان</option>
                  <option value="شهر "> شهر</option>
                  <option value=" صادرات">صادرات</option>
                  <option value="کشاورزی ">کشاورزی</option>
                  <option value=" گردشگری">گردشگری</option>
                  <option value="مسکن "> مسکن</option>
                  <option value=" ملی"> ملی</option>
                  <option value="اقتصاد نوین ">اقتصاد نوین</option>
                  <option value="پارسیان">پارسیان</option>
                  <option value="تجارت">تجارت</option>
                  <option value="توسعه تعاون">توسعه تعاون</option>
                  <option value="سپه">سپه</option>
                  <option value="سرمایه">سرمایه</option>
                  <option value="سینا">سینا</option>
                  <option value="صنعت و معدن">صنعت و معدن</option>
                  <option value="کار آفرین">کار آفرین</option>
                </select>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <label for="first_shaba_code">شماره شبا اول <span class='text-danger'>*</span></label>
                <input type="number" name="first_shaba_code" class="form-control" id="first_shaba_code" placeholder=""
                       required>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="ّsecond_accountNum"> شماره حساب دوم </label>
                <input type="number" name="secand_accountNum" class="form-control" id="ّsecond_accountNum"
                       placeholder="">
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="second_bankName"> نام بانک دوم </label>
                <select name="second_bankName" class=" form-control" id="second_bankName">
                  <option value="ایران زمین">ایران زمین</option>
                  <option value="آینده">آینده</option>
                  <option value="پست بانک">پست بانک</option>
                  <option value="خاورمیانه">خاورمیانه</option>
                  <option value="دی">دی</option>
                  <option value="رفاه">رفاه</option>
                  <option value=" سامان">سامان</option>
                  <option value="شهر "> شهر</option>
                  <option value=" صادرات">صادرات</option>
                  <option value="کشاورزی ">کشاورزی</option>
                  <option value=" گردشگری">گردشگری</option>
                  <option value="مسکن "> مسکن</option>
                  <option value=" ملی"> ملی</option>
                  <option value="اقتصاد نوین ">اقتصاد نوین</option>
                  <option value="پارسیان">پارسیان</option>
                  <option value="تجارت">تجارت</option>
                  <option value="توسعه تعاون">توسعه تعاون</option>
                  <option value="سپه">سپه</option>
                  <option value="سرمایه">سرمایه</option>
                  <option value="سینا">سینا</option>
                  <option value="صنعت و معدن">صنعت و معدن</option>
                  <option value="کار آفرین">کار آفرین</option>
                </select>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <label for="second_shaba_code">شماره شبا دوم </label>
                <input type="number" name="second_shaba_code" class="form-control" id="second_shaba_code"
                       placeholder="">
              </div>
            </div>
            <div class="col-md-12 form-group mt-3 mt-md-0">
              <label for="paziresh">پذیرش <span class='text-danger'>*</span></label>
              <br>
              <label class="switch" id="paziresh">
                <input type="checkbox" name="paziresh" required>
                <span class="slider round"></span>
              </label>
              <label class="form-check-label"> تمامی حساب های اعلامی بایدفقط به نام شخص یا اشخاص پذیرنده
                باشد.</label>
            </div>
            <div class="row">
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_permission">جواز کسب<span class='text-danger'>*</span></label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_permission" id="image_permission" required multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_lease">اجاره نامه</label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_lease" id="image_lease" multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_owership">سند مالکیت</label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_owership" id="image_owership" multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image">تصویر دو صفحه اول شناسنامه<span class='text-danger'>*</span></label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image" id="image" required multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_onNaCard">تصویر رو کارت ملی<span class='text-danger'>*</span></label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_onNaCard" id="image_onNaCard" required multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_BackNaCard">تصویر پشت کارت ملی<span class='text-danger'>*</span></label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_BackNaCard" id="image_BackNaCard" required multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_sign">تصویر مهر و امضا<span class='text-danger'>*</span></label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_sign" id="image_sign" required multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_sabin1">تصویر صفحه اول فرم سابین<span class='text-danger'>*</span></label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_sabin1" id="image_sabin1" required multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 form-group mt-3 mt-md-0">
                <label for="image_sabin2">تصویر صفحه دوم فرم سابین<span class='text-danger'>*</span></label>
                <div class="input-group">
                  <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_sabin2" id="image_sabin2" required multiple>
                                </span>
                  </label>
                  <input type="text" class="form-control file-name " readonly>
                </div>
              </div>
              <div class="col-md-3 form-group mt-3 mt-md-0"></div>
            </div>
            <br>
            <button id="submit" type="submit" class=" col-md-12 form-group "> ثبت اطلاعات</button>
          </form>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PosRegisterView",
  data(){
    return{

       }
    },
  methods:{
    check(){
      if(this.checked==true){
        console.log("hi")
      }
    }
  }
}

</script>

<style scoped>

</style>