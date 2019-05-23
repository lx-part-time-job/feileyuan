<template>
  <div class="home">
    <div class="part-left fl">
      <Swiper :swiperList="swiperList"/>
      <div class="part-left-content">
        <article-list :total="total" :articleList="newsList" :contentWidth="460" :isLeft="true" :mb="0"/>
      </div>
    </div>
    <div class="part-right fl">
      <Advertise :adList="adList"/>
      <Hot />
      <Forum />
      <Activity />
    </div>
  </div>
</template>

<script>
  import articleList from './components/articleList/index';
  import Swiper from './components/swiper/index';
  import Advertise from './components/advertise/index';
  import Forum from './components/forum/index';
  import Hot from './components/hot/index';
  import Activity from './components/activity/index';
  import backTop from '../../../mixin/back_top';

  export default {
    name: "home",
    mixins: [backTop],
    components: {articleList, Swiper, Advertise, Forum, Hot, Activity},
    data() {
      return {
        newsList: [],
        total: 1,
        swiperList: [],
        adList: []
      }
    },
    methods: {
      getNewsList(page) {
        this.$axios.get('/information/', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.newsList = [...res.data.data];
            this.total = res.data.count
          }
        })
      },
      getTopicList(page) {
        this.$axios.get('/activity/getSpecialTopicList', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            let topicList = [...res.data.data];
            this.swiperList = topicList.splice(0, 5);
            this.adList = topicList.splice(0, 2);
          }
        })
      }
    },
    mounted() {
      this.getNewsList();
      this.getTopicList();
    },
    watch: {
      $route(to, from) {
        this.getNewsList(to.query.page);
        this.goTop();
      }
    }
  }
</script>

<style scoped>
  .home {
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;
  }

  .part-left {
    width: 805px;
    margin-right: 15px;
  }

  .part-left-content {
    margin-top: 30px;
    width: 100%;
    background: #fff;
    border-radius: 5px;
  }

  .part-right {
    width: 380px;
  }
</style>