<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div class="mt-4 mb-1"><strong>點選篩選</strong></div>
      <div>
        <button class="locationBtn mx-1"><strong>選擇位置</strong></button
        ><button class="distanceBtn mx-1"><strong>距離</strong></button>
      </div>
      <div class="mt-4 mb-1">附近的貓咖</div>
      <div class="d-flex">
        <div class="catCafe mx-1"></div>
        <div class="catCafe mx-1"></div>
        <div class="catCafe mx-1"></div>
        <div class="catCafe mx-1"></div>
        <div class="catCafe mx-1"></div>
      </div>
      <div class="mt-4">
        <a type="submit" @click="tabChange(SelectLine)">
          <button class="lineBtn mx-1">選擇捷運路線</button></a
        >
      </div>
      <div class="mt-4">
        <a type="submit" @click="tabChange(BrownLine)"
          ><button class="BR mx-1">BR</button></a
        ><a type="submit" @click="tabChange(RedLine)"
          ><button class="R mx-1">R</button></a
        >
        <a type="submit" @click="tabChange(GreenLine)"
          ><button class="G mx-1">G</button></a
        ><a type="submit" @click="tabChange(OrangeLine)">
          <button class="O mx-1">O</button></a
        >
        <a type="submit" @click="tabChange(BlueLine)">
          <button class="BL mx-1">BL</button></a
        ><a type="submit" @click="tabChange(YellowLine)">
          <button class="Y mx-1">Y</button></a
        >
      </div>
    </div>
  </div>
  <div v-is="changeView"></div>
</template>

<script>
import Navbar from "../components/CatNavbar.vue";
import SelectLine from "../components/Map/SelectLine.vue";
import BlueLine from "../components/Map/BlueLine.vue";
import BrownLine from "../components/Map/BrownLine.vue";
import RedLine from "../components/Map/RedLine.vue";
import GreenLine from "../components/Map/GreenLine.vue";
import OrangeLine from "../components/Map/OrangeLine.vue";
import YellowLine from "../components/Map/YellowLine.vue";

export default {
  components: {
    Navbar,
    SelectLine,
    BlueLine,
    BrownLine,
    RedLine,
    GreenLine,
    OrangeLine,
    YellowLine,
  },
  data() {
    return {
      SelectLine: SelectLine,
      BlueLine: BlueLine,
      BrownLine: BrownLine,
      RedLine: RedLine,
      GreenLine: GreenLine,
      OrangeLine: OrangeLine,
      YellowLine: YellowLine,
      changeView: SelectLine,
    };
  },
  methods: {
    tabChange(tabItem) {
      this.changeView = tabItem;
    },
  },
};
</script>

<style scoped>
button.locationBtn {
  width: 120px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
button.distanceBtn {
  width: 120px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
.catCafe {
  width: 120px;
  height: 120px;
  border-radius: 20px;
  border: 1px solid #ffb881;
  background-color: rgba(255, 255, 255, 0);
}
button.lineBtn {
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #ff9d00;
  background-color: #ffb33a;
}
button.BR {
  color: #c38c31;
  font-size: small;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #c38c31;
  background-color: #ffffff00;
}
button.BR a {
  color: #c38c31;
}
button.R {
  color: #e3002d;
  font-size: small;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #e3002d;
  background-color: #ffffff00;
}
button.R a {
  color: #e3002d;
}
button.G {
  color: #018659;
  font-size: small;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #018659;
  background-color: #ffffff00;
}
button.G a {
  color: #018659;
}
button.O {
  color: #f8b51c;
  font-size: small;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #f8b51c;
  background-color: #ffffff00;
}
button.O a {
  color: #f8b51c;
}
button.BL {
  color: #0070bc;
  font-size: small;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #0070bc;
  background-color: #ffffff00;
}
button.BL a {
  color: #0070bc;
}
button.Y {
  color: #ffe707;
  font-size: small;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ffe707;
  background-color: #ffffff00;
}
button.Y a {
  color: #ffe707;
}
</style>
