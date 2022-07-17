<template>
<Navbar></Navbar>

<div class="container-fluid mt-5">
    <div class="row justify-content-center text-center g-5">


            <!-- <component :is="currentTab" @cache="updateData" :form-data="form"></component> -->

<div class="col-3 rounded-circle bg-secondary logo">Logo</div>
        <h1>Cat cafe</h1>

<div class="col-12 col-md-3">
    <router-link to="/user_login" class="col-10 btn btn-primary rounded-pill my-3">我是會員</router-link>
    <router-link to="/shop_login" class="col-10 btn btn-primary rounded-pill my-3">我是店家</router-link>





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

                    
                    
            currentTab: 'home',
            step: 1,


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