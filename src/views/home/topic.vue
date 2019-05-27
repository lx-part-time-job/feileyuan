<template>
  <div class="topic">
    <list-tab :tabList="tabList" @changeTab="changeTab" />
    <article-list :total="total" :articleList="articleList" :contentWidth="830" :isLeft="false" :mb="10" type='topic' />
  </div>
</template>

<script>
  import articleList from './components/articleList/index';
  import listTab from './components/listTab/index';
  import backTop from '../../../mixin/back_top';
  import changeQuery from '../../../mixin/change_query';

  export default {
    name: "topic",
    mixins: [backTop, changeQuery],
    components: {articleList, listTab},
    data() {
      return {
        articleList: [],
        newTopicList: [],
        hotTopicList: [],
        tabList: [{ name: '最新', index: 'new' }, { name: '最热', index: 'hot' }],
        total: 1
      }
    },
    methods: {
      getNewTopicList(page) {
        this.$axios.get('/activity/getSpecialTopicList', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if(res.data.code === 0) {
            this.articleList = this.newTopicList = [...res.data.data];
            this.total = res.data.count;
          }
        })
      },
      getHotTopicList(page) {
        this.$axios.get('/activity/getSpecialTopicList', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if(res.data.code === 0) {
            this.articleList = this.hotTopicList = [...res.data.data];
            this.total = res.data.count
          }
        })
      },
      changeTab(index) {
        let page = this.$route.query.page;
        index === 'hot' && (this.articleList = this.hotTopicList);
        index === 'new' && (this.articleList = this.newTopicList);
        this.changeQuery({index});
      }
    },
    mounted() {
      this.getNewTopicList(this.$route.query.page);
    },
    watch: {
      async $route (to, from) {
        if(to.query.index === 'hot') {
          await this.getHotTopicList(to.query.page);
        } else {
          await this.getNewTopicList(to.query.page);
        }
        await this.goTop();
      }
    }
  }
</script>

<style scoped>
  .topic {
    padding-right: 30px;
    box-sizing: border-box;
    margin-top: 20px;
  }
</style>