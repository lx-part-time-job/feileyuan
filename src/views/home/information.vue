<template>
  <div class="infomation">
    <article-list :newsList="newsList" :contentWidth="830" :isLeft="false" :mb="10" />
    <Pagination :total="total" />
  </div>
</template>

<script>
  import articleList from './components/articleList/index';
  import Pagination from './components/pagination/index';
  export default {
    name: "information",
    components: {articleList, Pagination},
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
.infomation {
  width: 100%;
  padding-right: 30px;
  box-sizing: border-box;
}
</style>