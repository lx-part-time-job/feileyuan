<template>
  <div class="swiper-box">
    <!-- swiper1 -->
    <div class="swiper-wrapper-top">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="(swiperItem, index) in swiperList" :key="index">
          <a class="img100" :href="swiperItem.topicurl || 'javascript:;'" target="__blank">
            <img class="swiper-img" :src="swiperItem.imgurl ? ($IMG_URL + swiperItem.imgurl) : swiperImg" alt="">
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="(swiperItem, index) in swiperList" :key="index">
        <img class="swiper-img" :src="swiperItem.imgurl ? ($IMG_URL + swiperItem.imgurl) : swiperImg" alt="">
      </swiper-slide>
    </swiper>
    <!--  -->
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "bbsSwiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
      },
      swiperImg: "/img/home/banner/banner1.png",
      swiperList: []
    };
  },
  methods: {
    getBannerList() {
      this.$axios.get("./activity/getbannerlist").then(res => {
        if (res.data.code === 0) {
          this.swiperList = res.data.data;
        }
      });
    }
  },
  mounted() {
    this.getBannerList();
    this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
    });
  }
};
</script>

<style lang="scss" scoped>
.gallery-top {
  width: 467px;
  height: 329px;
  position: relative;
}

.swiper-img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.gallery-thumbs {
  width: 467px;
  height: 76px;
  margin-top: 11px;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>