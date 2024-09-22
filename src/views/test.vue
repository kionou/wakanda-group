<template>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img src="@/assets/images/slider/hero-img-slider-1.jpg" class="authentication-image img-thumbnail   h-400  w-600" alt="">

      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/slider/hero-img-slider-2.jpg" class="authentication-image img-thumbnail   h-400  w-600" alt="">

      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/slider/hero-img-slider-3.jpg" class="authentication-image img-thumbnail   h-400  w-600" alt="">
      </swiper-slide>
      ...
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
  </script>