<template>
  <div class="home">
    <div class="part-left fl">
      <Swiper/>
      <div class="part-left-content">
        <article-list
          :total="total"
          :articleList="newsList"
          :contentWidth="460"
          :isLeft="true"
          :mb="0"
          type="news"
        />
      </div>
    </div>
    <div class="part-right fl">
      <Advertise/>
      <Hot/>
      <Forum/>
      <Activity/>
    </div>
  </div>
</template>

<script>
import articleList from "./components/articleList/index";
import Swiper from "./components/swiper/index";
import Advertise from "./components/advertise/index";
import Forum from "./components/forum/index";
import Hot from "./components/hot/index";
import Activity from "./components/activity/index";
import backTop from "../../../mixin/back_top";

export default {
  name: "home",
  mixins: [backTop],
  components: { articleList, Swiper, Advertise, Forum, Hot, Activity },
  data() {
    return {
      newsList: [],
      total: 1
    };
  },
  methods: {
    getNewsList(page) {
      this.$axios
        .get("/information/", {
          params: {
            page: page || 1
          }
        })
        .then(res => {
          if (res.data.code === 0) {
            this.newsList = [...res.data.data];
            this.total = res.data.count;
          }
        });
    }
  },
  mounted() {
    this.getNewsList();
  },
  watch: {
    $route(to, from) {
      this.getNewsList(to.query.page);
      this.goTop();
    }
  }
};
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