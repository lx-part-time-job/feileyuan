<template>
  <div class="news">
    <article-list :total="total" :newsList="newsList" :contentWidth="830" :isLeft="true" :mb="10" />
  </div>
</template>

<script>
  import articleList from './components/articleList/index';
  export default {
    name: "news",
    components: {articleList},
    data() {
      return {
        newsList: [],
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
.news {
  padding-right: 30px;
  box-sizing: border-box;
  margin-top: 20px;
}
</style>