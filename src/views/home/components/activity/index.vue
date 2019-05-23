<template>
  <div class="activity">
    <side-list :titleImg="titleImg" :sideHeaderList="sideHeaderList" :sideFooterList="sideFooterList" :isActivity="isActivity" :side_icon="side_icon" />
  </div>
</template>

<script>
  import sideList from '../sideList';
  export default {
    name: "activity",
    components: {sideList},
    data() {
      return {
        titleImg: "/img/home/side/activity.png",
        side_icon: '/img/home/icons/football.png',
        sideHeaderList: [],
        sideFooterList: [],
        isActivity: true
      }
    },
    mounted() {
      this.getActivityList()
    },
    methods: {
      getActivityList(page) {
        this.$axios.get('/activity/getHotActivityList', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            let dataList = [...res.data.data];
            this.sideHeaderList = dataList.splice(0, 3);
            this.sideFooterList = dataList.splice(0, 5);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .activity {
    /*height: 570px;*/

  }


</style>