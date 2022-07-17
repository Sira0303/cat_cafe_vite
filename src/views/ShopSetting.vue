<template>
<Navbar></Navbar>
<h2 class="text-center my-5">Hi,KK cafe!</h2>
<div class="container-fluid mt-5">
    <div class="row justify-content-center text-start">





    <router-link to="/shop_home" class=" secondary d-block p-3 ps-5">首頁預覽</router-link>
    <router-link to="/shop_home_write" class=" secondary d-block p-3 ps-5 ">修改首頁資料</router-link>
    <router-link to="/shop_info" class=" secondary d-block p-3 ps-5">店家登入驗證資料</router-link>
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