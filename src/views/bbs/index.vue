<template>
  <div class="bbs">
    <bbsnav></bbsnav>
    <div class="container">
      <div class="inner">
        <div class="container-top cb">
          <div class="fl">
            <swiper/>
          </div>
          <div class="fl">
            <subject/>
          </div>
          <div class="fr">
            <tel/>
          </div>
        </div>
        <!-- bottom 板块 -->
        <div class="section-container">
          <bbsSection/>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>
import breadCrumb from "./components/breadcrumb";
import bbsnav from "./components/bbsnav";
import swiper from "./components/swiper/index";
import subject from "./components/subject/index";
import tel from "./components/tel/index";
import bbsSection from "./components/bbsSection/index";
export default {
  name: "bbs",
  components: { breadCrumb, bbsnav, swiper, subject, tel, bbsSection },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
}
.section-container {
  margin-top: 31px;
}
</style>

