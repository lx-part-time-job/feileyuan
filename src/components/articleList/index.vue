<template>
  <div class="list">
    <div class="item" v-for="(item, index) in newsList">
      <img class="image" :src="list_img" alt="">
      <div class="content" :style="{width: contentWidth + 'px'}">
        <a class="title">{{item.title}}</a>
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
  </div>
</template>

<script>
  export default {
    name: "articleList",
    props: ["newsList", "contentWidth", "isLeft"],
    data() {
      return {
        list_img: require('../../assets/images/list/list-img1.png'),
        news_icon: require('../../assets/images/list/news.png'),
        clock_icon: require('../../assets/images/list/clock.png'),
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
    padding: 15px 30px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0.174px 0.985px 5px 0px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
  }

  .item {
    overflow: hidden;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }

  .image {
    float: left;
  }

  .content {
    float: right;
    height: 150px;
    position: relative;
  }

  .title {
    font-size: 24px;
    color: rgb(51, 51, 51);
    line-height: 1.25;
    cursor: pointer;
  }

  .title:hover {
    color: rgb(0, 119, 255);
  }

  .abstract {
    font-size: 14px;
    color: rgb(102, 102, 102);
    line-height: 1.3;
    margin-top: 5px;
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