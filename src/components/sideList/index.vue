<template>
    <div class="side-item">
      <p class="news-content">
        <img class="news-icon" :src="sideItem.side_icon" alt="">
        <span class="news-title">{{sideItem.newsTitle}}</span>
      </p>
      <img class="news-img" :src="sideItem.imgSrc" alt="">
    </div>
</template>

<script>
  export default {
    name: "sideList",
    props: {
      sideItem: Object
    },
    data() {
      return {}
    },
    mounted() {
    }
  }
</script>

<style scoped>


  .side-item {
    padding: 10px 0;
    border-bottom: 1px solid #efefef;
  }

  .side-item:last-child {
    border: 0;
  }

  .news-img {
    margin-top: 10px;
  }

  .news-icon {
    vertical-align: middle;
    margin-right: 10px;
  }

  .news-title {
    font-size: 14px;
    color: rgb(102, 102, 102);
    line-height: 1.286;
  }
</style>