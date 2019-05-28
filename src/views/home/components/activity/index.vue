<template>
  <div class="activity">
    <side-list :titleImg="titleImg" :url="url" :isActivity="isActivity" :side_icon="side_icon" :index='index' />
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
        isActivity: true,
        index: 'activity',
        url: '/information/getHotInformationActivityList'
      }
    }
  }
</script>