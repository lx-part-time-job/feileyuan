<template>
  <div class="bbs">
    <bbsnav></bbsnav>
    <div class="container">
      <div class="inner">
        <div class="container-top cb">
          <div class="fl">
            <swiper />
          </div>
          <div class="fl">
            <subject />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import breadCrumb from "./components/breadcrumb";
import bbsnav from "./components/bbsnav";
import swiper from "./components/swiper/index";
import subject from "./components/subject/index";
export default {
  name: "bbs",
  components: { breadCrumb, bbsnav, swiper,subject },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
}
.container-top {
}
</style>

