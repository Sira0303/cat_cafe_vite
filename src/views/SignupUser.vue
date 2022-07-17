<template>

<Navbar></Navbar>

<h4 class="text-center mt-3 mb-5">會員註冊</h4>



<div class="container-fluid">
    <div class="row justify-content-center text-start g-5">
<Navbar class="col-12"></Navbar>


       <form class="row g-3 needs-validation col-10" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Account</label><br>

<div class="input-container left-inner-addon">
    <i class="fa-regular fa-envelope"></i>


    <input type="email" class="form-control " id="validationCustom01"  required  placeholder="請輸入驗證信箱">

    <div class="invalid-feedback">
      請輸入有效電子信箱
    </div>
</div>
    
  </div>

   <div class="col-md-4">
    <label for="validationCustom02" class="form-label">用戶名稱</label>
    <div class="input-container left-inner-addon">

    <i class="fa-regular fa-face-smile"></i>
    <input type="text" class="form-control " id="validationCustom02" placeholder="請設定您的用戶名稱" required>
</div>
</div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Name</label>
<div class="input-container left-inner-addon">

    <i class="fa-regular fa-face-smile"></i>
    <input type="text" class="form-control " id="validationCustom02" placeholder="請設定您的店家名稱" required>

 </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Password</label>
<div class="input-container left-inner-addon">
<i class="fa-solid fa-key"></i>

      <input type="password" class="form-control " id="validationCustomUsername" placeholder="密碼（ 6-16個字元）" required>

      <input type="password" class="form-control " id="validationCustomUsername" placeholder="密碼（密碼（ 6-16個字元）" required>


    </div>
  </div>
    <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Password</label>
<div class="input-container left-inner-addon">
<i class="fa-solid fa-key"></i>
      <input type="password" class="form-control " id="validationCustomUsername" placeholder="確認密碼" required>

    </div>
  </div>
  
 
  <div class="col-12">
    <div class="form-check px-5 py-3 rounded-3 ">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        我不是機器人
      </label>

    </div>
  </div>
  <div class="col-12 text-center">
    <button class="btn btn-primary rounded-pill px-5 py-2" type="submit" @click="signup()">免費註冊</button>
  </div>
</form>

    </div>
</div>
<!-- <Footer class="fixed-bottom px-5"></Footer> -->

</template>
<script>

import Navbar from '../components/HomeNavbar.vue'
// import Footer from '../components/HomeFooter.vue'

export default{
    components:{
        Navbar,
        // Footer
    },
    methods:{
        signup(){
            // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

       


       
       }

        }

    }

</script>
<style scoped>
.logo{
    width: 100px;
    height:100px;
}

.input-container {
	padding-bottom: 1em;
}
.left-inner-addon {
    position: relative;
}
.left-inner-addon input {
    padding-left: 35px !important; 
}
.left-inner-addon i {
    position: absolute;
    padding: 12px 12px;
    pointer-events: none;
}

input{
  background: rgb(253, 213, 146);
}

.form-check{
  background: rgb(253, 213, 146);

}

</style>