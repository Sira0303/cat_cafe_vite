<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid nav">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">會員</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">領養</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">貓的兩三事</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">我的最愛</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">即時團購</a>
          </li>
          <br>
          <li class="nav-item">
            <a class="nav-link" href="#">問題回報</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">贊助</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">設定</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav{
  background: rgb(246,146,70);
  box-shadow: 0px 1px 3px #00000088;
  padding: 4px;
  
}
nav{
  padding: 0;
}
.navbar-nav li{
  text-align: center;
}
.navbar-nav li:hover{
  background: rgba(255, 232, 204, 0.848);
  color: rgba(246, 146, 70, 0.664);
}
</style>
