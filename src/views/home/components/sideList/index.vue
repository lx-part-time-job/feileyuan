<template>
  <div class="side-list">
    <img class="title-img" :src="titleImg" alt=""/>
    <div class="side-item" v-for="(sideItem, index) in sideHeaderList">
      <div v-if="isActivity">
        <div class="news-content">
          <img class="news-img-l" :src="$IMG_URL + sideItem.imgurl" alt="">
          <p class="news-title news-title-r fr">{{sideItem.title}}</p>
        </div>
      </div>
      <div v-else>
        <p class="news-content">
          <img class="news-icon" :src="side_icon" alt="">
          <span class="news-title textEllipsis">{{sideItem.title}}</span>
        </p>
        <img class="news-img" :src="$IMG_URL + sideItem.imgurl" alt="">
      </div>
    </div>
    <div class="side-item" v-for="(sideItem, index) in sideFooterList">
      <p class="news-content">
        <img class="news-icon" :src="side_icon" alt="">
        <span class="news-title textEllipsis">{{sideItem.title}}</span>
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
    width: 318px;
    height: 150px;
    margin-bottom: 14px;
  }

  .news-img-l {
    width: 130px;
    height: 80px;
    vertical-align: top;
  }

  .news-icon {
    margin-right: 10px;
  }

  .news-title {
    width: 290px;
    font-size: 14px;
    color: rgb(102, 102, 102);
    display: inline-block;
    line-height: 1.286;
  }

  .news-title-r {
    width: 180px;
  }
</style>