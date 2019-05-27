<template>
  <div class="activity">
    <side-list :titleImg="titleImg" :sideHeaderList="sideHeaderList" :sideFooterList="sideFooterList" :isActivity="isActivity" :side_icon="side_icon" :index='index' />
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
        isActivity: true,
        index: 'activity'
      }
    },
    mounted() {
      this.getActivityList()
    },
    methods: {
      getActivityList(page) {
        this.$axios.get('/information/getHotInformationActivityList', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            let dataList = [...res.data.data];
            let hotList = [];
            dataList.map(item => {
              item.type === 2 && hotList.push(item)
            });
            this.sideHeaderList = hotList.splice(0, 3);
            this.sideFooterList = hotList.splice(0, 5);
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