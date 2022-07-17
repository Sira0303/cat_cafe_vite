<template>
<Navbar></Navbar>

        <h1 class="mt-3 text-center mb-3">FUFU CAT CAFE</h1>

<div class="container-fluid">
    <div class="row justify-content-center text-center g-5">



        <div class="col-12 ">
            <span class="bg-secondary rounded-pill px-3 py-1 m-1">可帶寵物</span>
            <span class="bg-secondary rounded-pill px-3 py-1 m-1">有正餐</span>
            <span class="bg-secondary rounded-pill px-3 py-1 m-1">親子</span>
            <span class="bg-secondary rounded-pill px-3 py-1 m-1">中途</span>
         </div>
         <!-- 輪播器 -->
         <div class="col-12">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTueO_nGz7XvPE5K7-V5AQnIy-QDdY-vOitoA&usqp=CAU" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
<div class="position-relative">
    <div class="start-0 position-absolute">
 <i class="fa-solid fa-location-dot  m-1"></i>

 <i class="fa-solid fa-share-nodes m-1 "></i>
    </div>
               <div class="end-0 position-absolute">
    <i class="fa-regular fa-heart m-1"></i>
                <i class="fa-regular fa-dollar-sign m-1"></i>
    </div>   
             
</div>
               
         </div>


         <!-- 評價 -->
         <div class="col-12 text-center">
            <div class="d-inline-block mx-1">
                <div class="circle rounded-circle d-inline-block mx-3 bg-secondary ">餐點</div>
                <br>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="d-inline-block mx-1">
                 <div class="circle rounded-circle bg-secondary d-inline-block mx-3">環境</div>
                 <br>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>         
           
         </div>

    </div>
</div>

<div class="container-fluid">
    <div class="row justify-content-center text-center">
        
        <!-- 內容 -->
        <div class="col-10 bg-secondary px-5 py-3 mt-5">店家公告/最新消息</div>

        <div class="col-10 bg-secondary px-5 py-3 mt-5">店家資訊</div>
        <div class="col-10 border-secondary border px-5 py-3">
            <h3>營業時間</h3>
            <p>週一～週日(無休）<br>中午12點～晚上九點</p>
            <h3>採「時間制」計費</h3>
            <p> 10分鐘40元 以10分鍾為單位<br>90分鐘以上不再加價<br>無低消壓力,不強迫點餐飲！ <br><br> 飲料100元喝到飽</p>
        </div>

          <div class="col-10 bg-secondary px-5 py-3 mt-5">店貓資訊</div>
        <div class="col-10 border-secondary border px-5 py-3">
            <template v-for="cat in shopcats">
                <img src="" alt="">
                <h6>姓名 {{cat.name}}</h6>
                <h6>年齡 {{cat.age}} 歲</h6>
                <h6>性別 {{cat.gender}}</h6>
                <h6>品種 {{cat.variety}}</h6>
                <h6>介紹</h6>
                <p>{{cat.des}}</p>
            </template>
            
        </div>

         <div class="col-10 bg-secondary px-5 py-3 mt-5">中途貓咪</div>
        <div class="col-10 border-secondary border px-5 py-3 mb-5">
            <template v-for="cat in cats">
                <img src="" alt="">
                <h6>姓名 {{cat.name}}</h6>
                <h6>年齡 {{cat.age}} 歲</h6>
                <h6>性別 {{cat.gender}}</h6>
                <h6>品種 {{cat.variety}}</h6>
                <h6>狀態 {{cat.status}}</h6>
                <h6>更新日期 {{cat.date}}</h6>

                <h6>介紹</h6>
                <p>{{cat.des}}</p>
            </template>
            
        </div>

        
    </div>
</div>

</template>
<script>
import Navbar from '../components/HomeNavbar.vue'


export default{
    components:{
        Navbar,

    },
    data(){
        return{
            shopcats:[
                {
                    name:'松阪',
                    age:2,
                    gender:'母',
                    variety:'布偶貓',
                    des:'傲嬌小公主 ，討厭被抱 ! '
                }                
            ],
            cats:[
                {
                    name:'茶茶',
                    age:2,
                    gender:'母',
                    variety:'布偶貓',
                    status:'',
                    date:'20220202',
                    des:'傲嬌小公主 ，討厭被抱 ! '
                }                
            ]
        }
    }
}
</script>
<style>
.logo{
    width: 100px;
    height:100px;
}
.circle{
     width: 60px;
    height:60px;

}
.carousel{
height: 250px;
}
</style>