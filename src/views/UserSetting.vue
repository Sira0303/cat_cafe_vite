<template>
<Navbar></Navbar>
<h2 class="text-center my-5">Hi,Kay!</h2>
<div class="container-fluid mt-5">
    <div class="row justify-content-center text-start">





    <router-link to="/cart" class=" secondary d-block p-3 ps-5">我的購物車</router-link>
    <router-link to="/order" class=" secondary d-block p-3 ps-5">我的訂單</router-link>
    <router-link to="/like" class=" secondary d-block p-3 ps-5">我的最愛</router-link>
    <router-link to="/info" class=" secondary d-block p-3 ps-5">個人資料</router-link>
    <router-link to="/contactus" class=" secondary d-block p-3 ps-5">與我們聯繫</router-link>
    







        
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
.secondary{
  background: rgb(253, 213, 146);
}
.btn-primary{
    background: rgb(246, 146, 71);
}
button{
    background: rgb(246, 146, 71);
}
a{
    color:black;
    text-decoration: none;
}
</style>