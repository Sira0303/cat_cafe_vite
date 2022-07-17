<template>
  <Navbar></Navbar>
  <h4 class="test container text-center mt-3">我的最愛</h4>
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
