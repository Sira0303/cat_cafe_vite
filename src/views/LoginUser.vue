<template>

<Navbar></Navbar>

<h4 class="text-center mt-3">會員登入</h4>


<div class="container-fluid mt-5">
    <div class="row justify-content-center text-center g-5">
       <form class="row g-3 needs-validation col-10 text-start col-9" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Account</label><br>

<div class="input-container left-inner-addon">
    <i class="fa-regular fa-envelope"></i>
    <input type="email" class="form-control " id="validationCustom01"  required  >
</div>
</div>  

  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Password</label>
<div class="input-container left-inner-addon">
<i class="fa-solid fa-key"></i>
      <input type="password" class="form-control " id="validationCustomUsername"  required>

    </div>
  </div>
 <router-link to="/password">忘記密碼？</router-link>
  
 

  <div class="col-12 text-center">
    <button class="btn btn-primary rounded-pill col-12 py-2" type="submit" @click="login()">Log in</button>


  </div>
<div class="col-12 text">
還沒有帳戶嗎？<router-link to="/user_signup">立即註冊</router-link>

</div>
</form>
</div>
</div>

<Footer class="position-absolute bottom-0 px-5"></Footer>


<Footer class="position-relative bottom-0 px-5"></Footer>


</template>
<script>
import Navbar from '../components/HomeNavbar.vue'

import Footer from '../components/HomeFooter.vue'


export default{
    components:{ 
        Navbar,
        Footer,

    },
    methods:{
        login(){
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


</style>