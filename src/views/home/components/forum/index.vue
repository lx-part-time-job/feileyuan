<template>
  <div class="forum">
    <side-list :titleImg="titleImg" :sideHeaderList="sideHeaderList" :sideFooterList="sideFooterList" :isActivity="isActivity" :side_icon="side_icon" />
  </div>
</template>

<script>
  import sideList from '../sideList';
  export default {
    name: "forum",
    components: {sideList},
    data() {
      return {
        titleImg: require("../../../../assets/images/home/hot/hot.png"),
        side_icon: require('../../../../assets/images/home/hot/fire.png'),
        sideHeaderList: [
          {
            imgSrc: require("../../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }
        ],
        sideFooterList: [
          {
            imgSrc: require("../../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            imgSrc: require("../../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            imgSrc: require("../../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            imgSrc: require("../../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            imgSrc: require("../../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            imgSrc: require("../../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }
        ],
        isActivity: false
      }
    }
  }
</script>

<style scoped>
  .forum {
    /*height: 570px;*/

  }


</style>