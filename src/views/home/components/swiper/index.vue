<template>
  <div class="swiper-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img class="swiper-img" :src="swiperImg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: "swiperWrapper",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active'
          }
        },
        swiperSlides: [1, 2, 3],
        swiperImg: '/img/home/banner/banner1.png'
      }
    }
  }
</script>

<style scoped>
  .swiper-wrapper {
    height: 400px;
  }

  .swiper-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
</style>

<style>
  .bullet {
    display: inline-block;
    border-radius: 50%;
    background: #fff;
    width: 10px;
    height: 10px;
    z-index: 188;
    margin-right: 5px;
  }

  .bullet-active {
    background: rgb(0, 119, 255);
  }
</style>