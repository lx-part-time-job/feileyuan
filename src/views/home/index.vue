<template>
  <div class="home">
    <div class="part-left">
      <Swiper />
      <article-list :newsList="newsList" :contentWidth="460" :isLeft="true" />
    </div>
    <div class="part-right">
      <Advertise />
      <Forum />
    </div>
  </div>
</template>

<script>
  import articleList from '../../components/articleList';
  import Swiper from '../../components/swiper';
  import Advertise from './components/advertise';
  import Forum from './components/forum';
  export default {
    name: "home",
    components: {articleList, Swiper, Advertise, Forum},
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
        ]
      }
    },
    methods: {
      getNewList() {
        this.$axios.get('/information')
          .then(res => {
            console.log(res)
          })
      }
    },
    mounted() {
      // this.getNewList()
    }
  }
</script>

<style scoped>
  .home {
    overflow: hidden;
  }

  .part-left {
    float: left;
    width: 800px;
  }

  .part-right {
    width: 380px;
    float: right;
  }
</style>