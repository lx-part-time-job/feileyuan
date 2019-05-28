<template>
  <div class="forum">
    <side-list :titleImg="titleImg" :url="url" :isActivity="isActivity" :side_icon="side_icon" />
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
        isActivity: false,
        index: 'forum',
        url: '/activity/getHotActivityList'
      }
    }
  }
</script>

<style scoped>
  .forum {
    /*height: 570px;*/

  }


</style>