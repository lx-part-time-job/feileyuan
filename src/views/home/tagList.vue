<template>
  <div class="tag-list">
    <article-list :total="total" :articleList="articleList" :contentWidth="830" :isLeft="false" :mb="10" type="tagList" />
  </div>
</template>

<script>
  import articleList from './components/articleList/index';
  import backTop from '../../../mixin/back_top';
  import changeQuery from '../../../mixin/change_query';

  export default {
    name: "tagList",
    mixins: [backTop, changeQuery],
    components: {articleList},
    data() {
      return {
        articleList: [],
        total: 1
      }
    },
    methods: {
      getTagArticleList(page) {
        this.$axios.get('/information/getInfoListByProperty', {params: {
            id: Number(this.$route.params.tagId),
            page: page || 1,
            limit: 10
          }}, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          }
        }).then(res => {
          if(res.data.code === 0) {
            this.articleList = [...res.data.data];
            this.total = res.data.count
          }
        })
      }
    },
    mounted() {
      this.getTagArticleList(this.$route.query.page);
    },
    watch: {
      $route (to, from) {
        this.getTagArticleList(to.query.page);
        this.goTop();
      }
    }
  }
</script>

<style scoped>
  .tag-list {
    padding-right: 30px;
    box-sizing: border-box;
    margin-top: 20px;
  }
</style>