<template>
  <Navbar></Navbar>
  <div class="test container text-center">首頁內容</div>
  <Footer></Footer>
</template>

<script>
import Navbar from "../components/HomeNavbar.vue";
import Footer from "../components/HomeFooter.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.test {
  height: 500px;
}
</style>
