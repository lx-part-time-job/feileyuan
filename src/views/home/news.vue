<template>
  <div class="news">
    <list-tab :tabList="tabList" @changeTab="changeTab" />
    <article-list :total="total" :articleList="articleList" :contentWidth="830" :isLeft="false" :mb="10" type="news" />
  </div>
</template>

<script>
  import articleList from './components/articleList/index';
  import listTab from './components/listTab/index';
  import backTop from '../../../mixin/back_top';
  import changeQuery from '../../../mixin/change_query';

  export default {
    name: "news",
    mixins: [backTop, changeQuery],
    components: {articleList, listTab},
    data() {
      return {
        articleList: [],
        newArticleList: [],
        hotArticleList: [],
        tabList: [{ name: '最新', index: 'new' }, { name: '最热', index: 'hot' }],
        total: 1
      }
    },
    methods: {
      getNewArticleList(page) {
        this.$axios.get('/information/', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if(res.data.code === 0) {
            this.articleList = this.newArticleList = [...res.data.data];
            this.total = res.data.count
          }
        })
      },
      getHotArticleList(page) {
        this.$axios.get('/information/hot/', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if(res.data.code === 0) {
            this.articleList = this.hotArticleList = [...res.data.data];
            this.total = res.data.count
          }
        })
      },
      changeTab(index) {
        this.changeQuery({index});
        index === 'hot' && (this.articleList = this.hotArticleList);
        index === 'new' && (this.articleList = this.newArticleList);
      }
    },
    mounted() {
      this.getNewArticleList(this.$route.query.page);
    },
    watch: {
      async $route (to, from) {
        if(to.query.index === 'hot') {
          await this.getHotArticleList(to.query.page);
        } else {
          await this.getNewArticleList(to.query.page);
        }
        await this.goTop();
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