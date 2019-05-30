<template>
  <div class="side-list" @mouseleave="leaveList">
    <img class="title-img" :src="titleImg" alt=""/>
    <div class="side-item cursor" v-for="(sideItem, idx) in list" @click='goArticle(sideItem.id)' @mouseenter="hoverItem(idx)">
      <div v-if="idx === i">
        <div v-if="isActivity">
          <div class="news-content">
            <img class="news-img-l" :src="$IMG_URL + sideItem.imgurl" alt="">
            <p class="news-title news-title-r fr">{{sideItem.title}}</p>
          </div>
        </div>
        <div v-else>
          <p class="news-content">
            <i class="iconfont news-icon" :class="index === 'hot' ? 'red' : (index === 'activity' ? 'blue' : 'brown')">{{index === 'hot' ? '&#xe6e2;' : (index === 'activity' ? '&#xe602;' : '&#xe60a;')}}</i>
            <span class="news-title textEllipsis">{{sideItem.title}}</span>
          </p>
          <img class="news-img" :src="$IMG_URL + sideItem.imgurl" alt="">
        </div>
      </div>
      <p v-else class="news-content">
        <i class="iconfont news-icon" :class="index === 'hot' ? 'red' : (index === 'activity' ? 'blue' : 'brown')">{{index === 'hot' ? '&#xe6e2;' : (index === 'activity' ? '&#xe602;' : '&#xe60a;')}}</i>
        <span class="news-title textEllipsis">{{sideItem.title}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sideList",
    props: {
      isActivity: Boolean,
      titleImg: String,
      index: String,
      url: String,
    },
    data() {
      return {
        list: [],
        i: 0
      }
    },
    methods:{
      hoverItem(index) {
        this.i = index;
      },
      leaveList() {
        this.i = 0;
      },
      goArticle(id){
        this.index === 'hot' && window.open(location.origin + '/#/news/' + id);
        this.index === 'activity' && window.open(location.origin + '/#/activity/' + id);
      },
      getDataList(page) {
        this.$axios.get(this.url, {
          params: {
            page: page || 1
          }
        }).then(res => {
          if (res.data.code === 0) {
            let dataList = [...res.data.data];
            if(this.index === 'hot') {
              dataList.map(item => {
                item.type === 1 && this.list.push(item)
              });
            } else if(this.index === 'activity') {
              dataList.map(item => {
                item.type === 2 && this.list.push(item)
              });
            } else {
              this.list = dataList
            }
          }
        })
      }
    },
    mounted() {
      this.getDataList()
    }
  }
</script>

<style scoped>
  .side-list {
    background: #fff;
    border-radius: 5px;
    height: 100%;
    padding: 39px 30px 14px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .title-img {
    margin-bottom: 15px;
  }

  .side-item {
    border-bottom: 1px solid #efefef;
    overflow: hidden;
  }

  .side-item:last-child {
    border: 0;
  }

  .news-content {
    padding: 11px 0 14px;
    line-height: 1.286;
  }

  .news-img {
    width: 318px;
    height: 150px;
    margin-bottom: 14px;
  }

  .news-img-l {
    width: 130px;
    height: 80px;
    vertical-align: top;
  }

  .news-icon {
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    margin-top: -10px;
    overflow: hidden;
  }

  .red {
    color: red;
  }

  .brown {
    color: rgb(225, 137, 59);
  }

  .blue {
    color: blue;
  }

  .news-title {
    width: 290px;
    font-size: 14px;
    color: rgb(102, 102, 102);
    display: inline-block;
  }

  .news-title-r {
    width: 180px;
  }
</style>