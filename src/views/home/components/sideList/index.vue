<template>
  <div class="side-list">
    <img class="title-img" :src="titleImg" alt=""/>
    <div class="side-item" v-for="(sideItem, index) in sideHeaderList">
      <div v-if="isActivity">
        <div class="news-content">
          <img class="news-img-l" :src="sideItem.imgSrc" alt="">
          <p class="news-title news-title-r fr">{{sideItem.newsTitle}}</p>
        </div>
      </div>
      <div v-else>
        <p class="news-content">
          <img class="news-icon" :src="side_icon" alt="">
          <span class="news-title">{{sideItem.newsTitle}}</span>
        </p>
        <img class="news-img" :src="sideItem.imgSrc" alt="">
      </div>
    </div>
    <div class="side-item" v-for="(sideItem, index) in sideFooterList">
      <p class="news-content">
        <img class="news-icon" :src="side_icon" alt="">
        <span class="news-title">{{sideItem.newsTitle}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sideList",
    props: {
      sideHeaderList: Array,
      sideFooterList: Array,
      isActivity: Boolean,
      titleImg: String,
      side_icon: String
    }
  }
</script>

<style scoped>
  .side-list {
    background: #fff;
    border-radius: 5px;
    height: 100%;
    padding: 39px 30px 14px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .title-img {
    margin-bottom: 15px;
  }

  .side-item {
    border-bottom: 1px solid #efefef;
  }

  .side-item:last-child {
    border: 0;
  }

  .news-content {
    padding: 11px 0 14px;
  }

  .news-img {
    margin-bottom: 14px;
  }

  .news-img-l {
    width: 130px;
    height: 80px;
    vertical-align: top;
  }

  .news-icon {
    vertical-align: bottom;
    margin-right: 10px;
  }

  .news-title {
    font-size: 14px;
    color: rgb(102, 102, 102);
    line-height: 1.286;
  }

  .news-title-r {
    width: 180px;
  }
</style>