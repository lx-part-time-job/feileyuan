<template>
  <div class="forum">
    <div class="side-list">
      <img class="title-img" :src="titleImg" alt="" />
      <side-list v-for="(item, index) in sideList" :titleImg="titleImg" :sideItem="item" />
    </div>

  </div>
</template>

<script>
  import sideList from '../../../components/sideList';
  export default {
    name: "forum",
    components: {sideList},
    data() {
      return {
        titleImg: require("../../../assets/images/home/hot/hot.png"),
        sideList: [
          {
            side_icon: require('../../../assets/images/home/hot/fire.png'),
            imgSrc: require("../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            side_icon: require('../../../assets/images/home/hot/fire.png'),
            imgSrc: require("../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            side_icon: require('../../../assets/images/home/hot/fire.png'),
            imgSrc: require("../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            side_icon: require('../../../assets/images/home/hot/fire.png'),
            imgSrc: require("../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }, {
            side_icon: require('../../../assets/images/home/hot/fire.png'),
            imgSrc: require("../../../assets/images/home/hot/news1.png"),
            newsTitle: "这是文章标题，大约12—20个字......论坛ID "
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .forum {
    height: 570px;

  }

  .side-list {
    background: #fff;
    border-radius: 5px;
    height: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
  }
</style>