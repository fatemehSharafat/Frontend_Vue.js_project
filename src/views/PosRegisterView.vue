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
                         placeholder="" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="lname"> نام خانوادگی <span class='text-danger'>*</span></label>
                  <input type="text" name="lname" class="form-control" id="lname"
                         placeholder="" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <label for="father_name"> نام پدر<span class='text-danger'>*</span> </label>
                  <input type="text" name="father_name" class="form-control" id="father_name"
                         placeholder="" required>
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
                <label class="form-group"><span class='text-danger'>*</span> نوع دستگاه:</label>
                <div class="col-md-3 form-group mt-3 mt-md-0">

                  <input type="checkbox" class="checkoption" value="1" v-model="fixed_pos" @click="check()">
                  pos ثابت
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="2" v-model="portable_pos" @click="check()">
                  pos سیار
                </div>
                <div class="col-md-3 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="3" v-model="kiosk" @click="check()">
                  کیوسک
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group mt-3 mx-4 mt-md-0" v-if=" this.fixed_pos">
                  <h6 class="segment-name">نوع بستر ارتباطي كارتخوان ثابت</h6>
                  <hr>
                  <div class="col-md-3 form-group mt-3 mt-md-0">
                    <label for="substrate_type"> بستر ارتباطی <span class='text-danger'>*</span></label>
                    <select name="substrate_type" class=" form-control" id="substrate_type" required>
                      <option value="DIUALUP">DIUALUP</option>
                      <option value="GPRS">GPRS</option>
                      <option value="COMBO">COMBO</option>
                      <option value="WIFI">WIFI</option>
                      <option value="LAN">LAN</option>
                      <option value="PC">PC</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12 form-group mt-3  mt-md-0" v-if="this.portable_pos">
                  <h6 class="segment-name">اطلاعات چك و سفته</h6>
                  <hr>
                  <div class="row">
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                      <label for="protected_cheque"> شماره چك صيادي چك / سفته <span class='text-danger'>*</span></label>
                      <input type="number" name="protected_cheque" class="form-control" id="protected_cheque"
                             placeholder="">
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                      <label for="date_cheque"> تاریخ سررسيد<span class='text-danger'>*</span> </label>
                      <input type="text" name="date_cheque" class="form-control" id="date_cheque"
                             placeholder="" data-jdp>
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                      <label for="bankName_cheque">نام بانك <span class='text-danger'>*</span></label>
                      <input type="text" name="bankName_cheque" class="form-control" id="bankName_cheque"
                             placeholder="">
                    </div>
                    <div class="col-md-3 form-group mt-3 mt-md-0">
                      <label for="amount_number_cheque"> مبلغ چك / سفته به رقم <span
                          class='text-danger'>*</span></label>
                      <input type="number" name="amount_number_cheque" class="form-control" id="amount_number_cheque"
                             placeholder="">
                    </div>
                    <div class="col-md-3 form-group mt-3 mt-md-0">
                      <label for="amount_letter_cheque">مبلغ چك / سفته به حروف<span class='text-danger'>*</span></label>
                      <input type="text" name="amount_letter_cheque" class="form-control" id="amount_letter_cheque"
                             placeholder="">
                    </div>
                    <div class="col-md-3 form-group mt-3 mt-md-0">
                      <label for="account_owner_cheque">نام صاحب حساب <span class='text-danger'>*</span></label>
                      <input type="text" name="account_owner_cheque" class="form-control" id="account_owner_cheque"
                             placeholder="">
                    </div>
                    <div class="col-md-3 form-group mt-3 mt-md-0">
                      <label for="iban_cheque"> شماره شبا <span class='text-danger'>*</span></label>
                      <input type="number" name="iban_cheque" class="form-control" id="iban_cheque"
                             placeholder="">
                    </div>
                    <div class="col-md-3 form-group mt-3 mt-md-0">
                      <label for="image_cheque">تصوير چك / سفته<span class='text-danger'>*</span></label>
                      <div class="input-group">
                        <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_cheque" id="image_cheque" multiple>
                                </span>
                        </label>
                        <input type="text" class="form-control file-name " readonly>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 form-group mt-3 mx-4 mt-md-0" v-if="this.kiosk">
                  <h6 class="segment-name">نوع كيوسك</h6>
                  <hr>
                  <div class="col-md-3 form-group mt-3 mt-md-0">
                    <label for="kiosk_type"> نوع كيوسك <span class='text-danger'>*</span></label>
                    <select name="kiosk_type" class=" form-control" id="kiosk_type">
                      <option value="ديواري">ديواري</option>
                      <option value="ايستاده">ايستاده</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            <section class="section-body" name="account-info">
              <div class="row">
                <h6 class="segment-name">اطلاعات حساب بانكي</h6>
                <hr>
              </div>
              <div class="row">
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="bank_name"> نام بانک <span class='text-danger'>*</span></label>
                  <select name="bank_name" class=" form-control" id="bank_name" required>
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
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="branch_bank_name"> نام شعبه <span class='text-danger'>*</span></label>
                  <input type="text" name="branch_bank_name" class="form-control" id="branch_bank_name"
                         placeholder="">
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="branch_bank_number"> کد شعبه <span class='text-danger'>*</span></label>
                  <input type="number" name="branch_bank_number" class="form-control" id="branch_bank_number"
                         placeholder="" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="account_number"> شماره حساب <span class='text-danger'>*</span></label>
                  <input type="number" name="account_number" class="form-control" id="account_number"
                         placeholder="" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="shaba_number">شماره شبا<span class='text-danger'>*</span></label>
                  <input type="number" name="shaba_number" class="form-control" id="shaba_number" placeholder=""
                         required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group mt-4 ">
                  <label for="paziresh"> پذیرش <span class='text-danger'>*</span> </label>
                  <br>
                  <label class="switch" id="paziresh">
                    <input type="checkbox" name="paziresh" required>
                    <span class="form-check-label">    تمامی حساب های اعلامی باید فقط به نام شخص یا اشخاص پذیرنده
                باشد.   </span>
                  </label>
                </div>
              </div>
            </section>
            <section class="section-body" name="psp">
              <div class="row">
                <h6 class="segment-name"> PSP </h6>
                <hr>
              </div>
              <div class="row">
                <label class="form-group"><span class='text-danger'>*</span> نوع فرم درخواست: </label>
                <div class="col-md-2 form-group mt-3 mt-md-0">

                  <input type="checkbox" class="checkoption" value="پرداخت نوين آرين" v-model="fixed_pos"
                         @click="check()">
                  پرداخت نوين آرين
                </div>
                <div class="col-md-2 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="سابين سامان" v-model="portable_pos"
                         @click="check()">
                  سابين سامان
                </div>
                <div class="col-md-2 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="سابين پارسيان" v-model="kiosk" @click="check()">
                  سابين پارسيان
                </div>
                <div class="col-md-2 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="پرداخت سپهر صادرات">
                  پرداخت سپهر صادرات
                </div>
                <div class="col-md-2 form-group mt-3 mt-md-0">
                  <input type="checkbox" class="checkoption" value="فن آوا كارت">
                  فن آوا كارت
                </div>
              </div>
            </section>
            <section class="section-body" name="upload-documents">
              <div class="row">
                <h6 class="segment-name"> بارگذاري مدارك </h6>
                <hr>
              </div>
              <div class="row">
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="image_permission"> جواز كسب/ اجاره نامه / سند مالكيت / استشهاد نامه <span
                      class='text-danger'>*</span></label>
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
                <div class="col-md-4 form-group mt-3 mt-md-0">
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
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="image_NaCard">تصویر پشت و روي کارت ملی<span class='text-danger'>*</span></label>
                  <div class="input-group">
                    <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_NaCard" id="image_NaCard" required multiple>
                                </span>
                    </label>
                    <input type="text" class="form-control file-name " readonly>
                  </div>
                </div>
                <div class="col-md-4 form-group mt-3 mt-md-0">
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
                <div class="col-md-4 form-group mt-3 mt-md-0">
                  <label for="image_form">تصویر دو صفحه فرم پذيرندگي<span class='text-danger'>*</span></label>
                  <div class="input-group">
                    <label class="input-group-btn">
                                <span class="btn ">
                                    بارگذاري فايل&hellip;
                                    <input type="file" name="image_form" id="image_form" required multiple>
                                </span>
                    </label>
                    <input type="text" class="form-control file-name " readonly>
                  </div>
                </div>
              </div>
            </section>
            <section class="section-body" name="description">
              <div class="row">
                <h6 class="segment-name"> توضيحات </h6>
                <hr>
              </div>
              <div class="row">
                <div class="col-md-12 form-group mt-3 mt-md-0 ">
                  <textarea name="description" class="form-control" id="description" placeholder="توضيحات را وارد كنيد.." required></textarea>
                </div>
              </div>

            </section>
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
  data() {
    return {
      fixed_pos: null,
      portable_pos: null,
      kiosk: null,
    }
  },
  methods: {
    check() {
      if (this.kiosk === true) {
        this.fixed_pos = false
        this.portable_pos = false
      }
      if (this.fixed_pos === true) {
        this.portable_pos = false
        this.kiosk = false
      }
      if (this.portable_pos === true) {
        this.fixed_pos = false
        this.kiosk = false
      }

    },
  }
}

</script>

<style scoped>

</style>