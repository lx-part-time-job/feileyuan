<template>
  <div>
    <List :newsList="newsList" :listWidth="800" :contentWidth="460" :isLeft="true" />
  </div>
</template>

<script>
  import List from '../../components/list';
  export default {
    name: "home",
    components: {List},
    data() {
      return {
        newsList: [{
          title: '在印度，很多女性经常这么做，让男性深受其害',
          synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          publishtime: 1558335347172
        }, {
          title: '在印度，很多女性经常这么做，让男性深受其害',
          synopsis: '我在印度期间，发现印度的电视节目，在报道一些新闻的时候，女性的脸往往被打上马赛克，而男性的脸却被展示在电视机屏幕上，供全印度的人评判。 这源于印...',
          publishtime: 1558335347172
        }]
      }
    },
    methods: {
      getNewList() {
        this.$axios.get('/information')
          .then(res => {
            console.log(res.data)
          })
      }
    },
    mounted() {
      // this.getNewList()
    }
  }
</script>

<style scoped>

</style>