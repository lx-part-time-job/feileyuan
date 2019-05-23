<template>
  <div class="hot">
    <side-list :titleImg="titleImg" :sideHeaderList="sideHeaderList" :sideFooterList="sideFooterList"
               :isActivity="isActivity" :side_icon="side_icon"/>
  </div>
</template>

<script>
  import sideList from '../sideList';

  export default {
    name: "hot",
    components: {sideList},
    data() {
      return {
        titleImg: "/img/home/side/hot.png",
        side_icon: '/img/home/icons/fire.png',
        sideHeaderList: [],
        sideFooterList: [],
        isActivity: false
      }
    },
    mounted() {
      this.getHotList()
    },
    methods: {
      getHotList(page) {
        this.$axios.get('/activity/getHotActivityList', {
          params: {
            page: page || 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            let dataList = [...res.data.data];
            this.sideHeaderList = dataList.splice(0, 2);
            this.sideFooterList = dataList.splice(0, 3);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .hot {
    /*height: 570px;*/

  }


</style>