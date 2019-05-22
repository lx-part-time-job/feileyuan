<template>
  <div class="home">
    <div class="part-left fl">
      <Swiper />
      <div class="part-left-content">
        <article-list :total="total" :newsList="newsList" :contentWidth="460" :isLeft="true" :mb="0" />
      </div>
    </div>
    <div class="part-right fl">
      <Advertise />
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
  export default {
    name: "home",
    components: {articleList, Swiper, Advertise, Forum, Hot, Activity},
    data() {
      return {
        newsList: [
          {
            title: '在印度，很多女性经常这么做，让男性深受其害',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '在印度，很多女性经常这么做，让男性深受其害',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '在印度，很多女性经常这么做，让男性深受其害',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '在印度，很多女性经常这么做，让男性深受其害',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '在印度，很多女性经常这么做，让男性深受其害',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }, {
            title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
            synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
            publishtime: 1558335347172
          }
        ],
        total: 1
      }
    },
    methods: {
      getNewList(page) {
        this.$axios.get('/information/', {
          params: {
            page: page || 1,
            limit: 1
          }
        }).then(res => {
            if(res.data.code === 0) {
              this.newsList = [...res.data.data]
              this.total = res.data.count
            }
          })
      }
    },
    mounted() {
      this.getNewList()
    },
    watch: {
      $route (to, from) {
        this.getNewList(to.query.page)
      }
    }
  }
</script>

<style scoped>
  .home {
    overflow: hidden;
    margin-top: 30px;
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