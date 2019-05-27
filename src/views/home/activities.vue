<template>
  <div class="activity">
    <list-tab :tabList="tabList" @changeTab="changeTab" />
    <article-list :total="total" :articleList="articleList" :contentWidth="830" :isLeft="false" :mb="10" type='activity' />
  </div>
</template>

<script>
  import articleList from './components/articleList/index';
  import listTab from './components/listTab/index';
  import backTop from '../../../mixin/back_top';
  import changeQuery from '../../../mixin/change_query';

  export default {
    name: "activity",
    mixins: [backTop, changeQuery],
    components: {articleList, listTab},
    data() {
      return {
        articleList: [],
        newActivityList: [],
        hotActivityList: [],
        tabList: [{ name: '最新', index: 'new' }, { name: '最热', index: 'hot' }],
        total: 1
      }
    },
    methods: {
      getNewActivityList(page) {
        this.$axios.get('/activity/', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if(res.data.code === 0) {
            this.articleList = this.newactivityList = [...res.data.data];
            this.total = res.data.count;
          }
        })
      },
      getHotActivityList(page) {
        this.$axios.get('/activity/', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if(res.data.code === 0) {
            this.articleList = this.hotActivityList = [...res.data.data];
            this.total = res.data.count
          }
        })
      },
      changeTab(index) {
        let page = this.$route.query.page;
        index === 'hot' && (this.articleList = this.hotActivityList);
        index === 'new' && (this.articleList = this.newactivityList);
        this.changeQuery({index});
      }
    },
    mounted() {
      this.getNewActivityList(this.$route.query.page);
    },
    watch: {
      async $route (to, from) {
        if(to.query.index === 'hot') {
          await this.getHotActivityList(to.query.page);
        } else {
          await this.getNewActivityList(to.query.page);
        }
        await this.goTop();
      }
    }
  }
</script>

<style scoped>
  .activity {
    padding-right: 30px;
    box-sizing: border-box;
    margin-top: 20px;
  }
</style>