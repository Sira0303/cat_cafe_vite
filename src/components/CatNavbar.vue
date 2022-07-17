<template>
  <nav>
    <div class="navbar">
      <a href="javascript:history.back()" class="back"
        ><i class="text-light mx-3 fa-solid fa-angle-left"></i
      ></a>
    </div>
    <!-- <ul class="menu">
      <li><a href="##">Home</a></li>
    </ul> -->
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
body,
h1,
ul,
li {
  margin: 0;
}

* {
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding-left: 0;
}

a {
  text-decoration: none;
}

/* NavBar */
nav {
  background: rgb(246, 146, 70);
  box-shadow: 0px 1px 3px #00000088;
  height: 50px;
}
nav::after {
  content: "";
  display: block;
  clear: both;
}
nav h1 {
  float: left;
  padding-left: 50px;
  line-height: 50px;
}
.navbar {
  display: flex;
}
a.back {
  text-align: center;
}

/* 隱藏 checkbox */
input {
  display: none;
}

/* 漢堡按鈕 */
label {
  float: left;
  padding-right: 50px;
  line-height: 50px;
  cursor: pointer;
}
label img {
  width: 30px;
  vertical-align: middle;
}

/* 下拉選單效果 */
.menu {
  max-height: 0;
  overflow: hidden;
  transition: 0.2s; /* 動畫秒數 */
}

input:checked ~ .menu {
  max-height: 300px;
}

/* mediaquery */
@media screen and (min-width: 768px) {
  label {
    display: none;
  }
  .menu {
    float: right;
    clear: none;
    max-height: 50px;
    background: rgb(246, 146, 70);
  }
}
.menu li {
  display: inline-block;
}
li a {
  padding: 0 15px;
}
/* menu*/
.menu {
  clear: both;
  background: rgb(246, 146, 70);
}

.menu li {
  text-align: center;
  border-bottom: 1px solid rgb(246, 146, 70);
}
.menu a {
  display: block;
  line-height: 50px;
  font-size: 18px;
  color: rgb(255, 232, 204);
}
.menu a:hover {
  background: rgb(255, 232, 204);
  color: rgb(246, 146, 70);
}
</style>
