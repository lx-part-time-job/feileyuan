<template>
  <div>
    <ul class="advertise">
      <li class="ad-item" v-for="item in adList">
        <a class="img100" :href="item.topicurl || 'javascript:;'" target="__blank">
          <img :src="$IMG_URL + item.imgurl" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "advertise",
    data() {
      return {
        adList: []
      }
    },
    methods: {
      getTopicList() {
        this.$axios.get('/activity/getSpecialTopicList', {
          params: {
            page: 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.adList = [...res.data.data];
          }
        })
      }
    },
    mounted() {
      this.getTopicList()
    }
  }
</script>

<style scoped>
  .advertise {
    height: 400px;
    margin-bottom: 30px;
  }

  .ad-item {
    border-radius: 5px;
    margin-bottom: 16px;
  }

  .ad-item:last-child {
    margin-bottom: 0;
  }

  .ad-item img {
    width: 100%;
    height: 192px;
    display: block;
    background-color: #fff;
    border-radius: 5px;
  }
</style>