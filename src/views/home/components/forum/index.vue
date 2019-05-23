<template>
  <div class="forum">
    <side-list :titleImg="titleImg" :sideHeaderList="sideHeaderList" :sideFooterList="sideFooterList" :isActivity="isActivity" :side_icon="side_icon" />
  </div>
</template>

<script>
  import sideList from '../sideList';
  export default {
    name: "forum",
    components: {sideList},
    data() {
      return {
        titleImg: "/img/home/side/forum.png",
        side_icon: '/img/home/icons/article.png',
        sideHeaderList: [],
        sideFooterList: [],
        isActivity: false
      }
    },
    mounted() {
      this.getForumList()
    },
    methods: {
      getForumList(page) {
        this.$axios.get('/activity/getHotActivityList', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            let dataList = [...res.data.data];
            this.sideHeaderList = dataList.splice(0, 1);
            this.sideFooterList = dataList.splice(0, 6);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .forum {
    /*height: 570px;*/

  }


</style>