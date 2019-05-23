<template>
  <div class="list">
    <div class="item" v-for="(item, index) in articleList">
      <img class="image fl" :src="item.imgurl ? ($IMG_URL + item.imgurl) : '/img/home/list/list-img1.png'" alt="">
      <div class="content fr" :style="{width: contentWidth + 'px'}">
        <a class="title cursor" :style="{'margin-bottom': mb + 'px'}">{{item.title}}</a>
        <p class="abstract">{{item.synopsis}}</p>
        <div :class="isLeft ? 'meta' : 'meta right'">
          <div class="meta-item">
            <img :src="news_icon" alt="">
            <span>新闻资讯</span>
          </div>
          <div class="meta-item">
            <img :src="clock_icon" alt="">
            <span>{{dateDiff(item.publishtime)}}</span>
          </div>
        </div>
      </div>
    </div>
    <Pagination :total="total" />
  </div>
</template>

<script>
  import Pagination from '../pagination/index';
  export default {
    name: "articleList",
    props: ["articleList", "contentWidth", "isLeft", "mb", "total"],
    components: {Pagination},
    data() {
      return {
        news_icon: '/img/home/icons/news.png',
        clock_icon: '/img/home/icons/clock.png'
      }
    },
    methods: {
      dateDiff(time) {
        let t = Date.now() - time;
        let days = Math.floor(t / (24 * 60 * 60 * 1000));
        let hours = Math.floor(t / (60 * 60 * 1000));
        let minutes = Math.floor(t / (60 * 1000));
        let seconds = Math.floor(t / 1000);
        if(days > 0) {
          return days + '天前'
        } else if (hours > 0) {
          return hours + '小时前'
        } else if (minutes > 0) {
          return minutes + '分钟前'
        } else {
          return '刚刚'
        }
      }
    }
  }
</script>

<style scoped>
  .list {
    padding: 0 30px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0.174px 0.985px 5px 0px rgba(0, 0, 0, 0.1);
  }

  .item {
    overflow: hidden;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }

  .image {
    width: 250px;
    height: 150px;
  }

  .content {
    height: 150px;
    position: relative;
  }

  .title {
    font-size: 24px;
    color: rgb(51, 51, 51);
    line-height: 1.25;
    display: block;
  }

  .title:hover {
    color: rgb(0, 119, 255);
  }

  .abstract {
    font-size: 14px;
    color: rgb(102, 102, 102);
    line-height: 1.5;
  }

  .meta {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .meta.right {
    right: 0;
    left: auto;
  }

  .meta-item {
    float: left;
    margin-right: 30px;
  }

  .meta-item:last-child {
    margin-right: 0;
  }

  .meta-item img {
    vertical-align: middle;
    margin-right: 10px;
  }
</style>