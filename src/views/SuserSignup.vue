<template>
<Navbar></Navbar>

<div class="container-fluid mt-5">
    <div class="row justify-content-center text-center g-5">


            <!-- <component :is="currentTab" @cache="updateData" :form-data="form"></component> -->

<div class="col-3 rounded-circle bg-secondary logo">Logo</div>
        <h1>Cat cafe</h1>
        <h1><i class="fa-solid fa-circle-check"></i>會員註冊成功</h1>

<div class="col-12 col-md-3">

    <router-link to="/" class="col-10 btn btn-primary rounded-pill my-3">回首頁</router-link>





</div>

        
<Footer class="position-absolute bottom-0 px-5"></Footer>




    </div>
</div>

</template>
<script>
import Navbar from '../components/HomeNavbar.vue'
import Footer from '../components/HomeFooter.vue'


export default{
    components:{ 
        Navbar,
        Footer,
      
    },
    data() {
        return {
            form:{},

        }
    },
     methods:{
         
            },
}
</script>
<style scoped>
.logo{
    width: 100px;
    height:100px;
}
input{
  background: rgb(253, 213, 146);
}
.btn-primary{
    background: rgb(246, 146, 71);
}
button{
    background: rgb(246, 146, 71);
}

</style>