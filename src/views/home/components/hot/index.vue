<template>
  <div class="hot">
    <side-list :titleImg="titleImg" :url="url" :isActivity="isActivity" :side_icon="side_icon" :index='index'/>
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
        isActivity: false,
        index:'hot',
        url: '/information/getHotInformationActivityList'
      }
    }
  }
</script>

<style scoped>
  .hot {
    /*height: 570px;*/

  }


</style>