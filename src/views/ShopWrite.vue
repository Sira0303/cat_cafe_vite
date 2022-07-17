<template>
<Navbar></Navbar>

<div class="container-fluid mt-5">
    <div class="row justify-content-center text-center">




    <input type="text" placeholder="請輸入店名" class="col-9 rounded-pill p-2 text-center">
    <div class="text-start mt-3 ps-5">請選擇標籤</div>

    <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">可帶寵物</div>
    <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">提供正餐</div>
    <!-- <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">寵物友善</div> -->
    <!-- <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">親子餐廳</div> -->
    <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">中途之家</div>
    <!-- <div class="rounded-pill m-2 p-2 border col-4"><input type="checkbox">接受捐款</div> -->

    <div class="col-12 my-5">
        <input type="file">
    </div>
    <input type="text" placeholder="請輸入地址" class="col-9 rounded-pill p-2 text-center">

    <div class="col-10 bg-secondary px-5 py-3 mt-5">店家公告/最新消息</div>

        <div class="col-10 bg-secondary px-5 py-3 mt-5">店家資訊</div>

        <div class="col-10 border-secondary border px-2 py-3 text-start">
            <div class="my-3 mx-2">
            <h5>營業時間</h5>
            <input type="checkbox">星期一<input type="time"><input type="time"><br>
            <input type="checkbox">星期二<input type="time"><input type="time"><br>
            <input type="checkbox">星期三<input type="time"><input type="time"><br>
            <input type="checkbox">星期四<input type="time"><input type="time"><br>
            <input type="checkbox">星期五<input type="time"><input type="time"><br>
            <input type="checkbox">星期六<input type="time"><input type="time"><br>
            <input type="checkbox">星期日<input type="time"><input type="time">

            </div>
           
        </div>

          <div class="col-10 border-secondary border px-2 py-3 text-start">
            <div class="my-3 mx-2">
                <h5>消費模式</h5>
                <div class="text-start d-inline me-5"><input type="checkbox">低消</div>
            <input type="text" placeholder="請輸入金額"><br>
            <input type="checkbox">無低消<br>
            <input type="checkbox"><span>時間制</span><input class="" type="text" placeholder="請輸入規則"><br>
            <input type="checkbox">其他<input type="text" placeholder="請輸入規則"><br>


                
                </div>
                </div>
        
        



 










        





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