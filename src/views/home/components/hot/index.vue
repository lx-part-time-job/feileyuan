<template>
  <div class="hot">
    <side-list :titleImg="titleImg" :sideHeaderList="sideHeaderList" :sideFooterList="sideFooterList"
               :isActivity="isActivity" :side_icon="side_icon" :index='index'/>
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
        isActivity: false,
        index:'hot'
      }
    },
    mounted() {
      this.getHotList()
    },
    methods: {
      getHotList() {
        this.$axios.get('/information/getHotInformationActivityList', {
          params: {
            page: 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            let dataList = [...res.data.data];
            let hotList = [];
            dataList.map(item => {
              item.type === 1 && hotList.push(item)
            });
            this.sideHeaderList = hotList.splice(0, 2);
            this.sideFooterList = hotList.splice(0, 3);
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