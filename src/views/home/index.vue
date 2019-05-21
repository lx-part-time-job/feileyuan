<template>
  <div class="home">
    <div class="part-left">
      <Swiper />
      <article-list :newsList="newsList" :contentWidth="460" :isLeft="true" :mb="0" />
      <!--<paginate-->
        <!--name="languages"-->
        <!--:list="langs"-->
        <!--:per="2"-->
      <!--&gt;-->
        <!--<li v-for="lang in paginated('languages')">-->
          <!--{{ lang }}-->
        <!--</li>-->
      <!--</paginate>-->
    </div>
    <div class="part-right">
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
          // {
          //   title: '在印度，很多女性经常这么做，让男性深受其害',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '在印度，很多女性经常这么做，让男性深受其害',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '在印度，很多女性经常这么做，让男性深受其害',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '在印度，很多女性经常这么做，让男性深受其害',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '在印度，很多女性经常这么做，让男性深受其害',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }, {
          //   title: '这是一个需要留20字的标题，可以拆行，鼠 标经过这个标题变色 ',
          //   synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          //   publishtime: 1558335347172
          // }
        ],
        langs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Ruby', 'Python', 'Erlang'],
        paginate: ['languages']
      }
    },
    methods: {
      getNewList() {
        this.$axios.get('/information/')
          .then(res => {
            if(res.data.code === 0) {
              this.newsList = res.data.data
            }
            console.log(res)
          })
      }
    },
    mounted() {
      this.getNewList()
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