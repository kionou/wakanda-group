<!-- src/components/SwiperSlider.vue -->
<template>
  <div class="slider-container">
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :navigation="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" :alt="slide.title" class="slide-image">
          <h3 class="slide-title">{{ slide.title }}</h3>
          <p class="slide-description">{{ slide.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  name: 'SwiperSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref([
      {
        title: 'Paris',
        image: 'https://picsum.photos/800/400',
        description: 'La ville lumière'
      },
      {
        title: 'New York',
        image: 'https://picsum.photos/800/400',
        description: 'La grosse pomme'
      },
      {
        title: 'Tokyo',
        image: 'https://picsum.photos/800/400',
        description: 'La ville du futur'
      },
      {
        title: 'Londres',
        image: 'https://picsum.photos/800/400',
        description: 'La ville royale'
      }
    ])

   
    const loadSlides = async () => {
      try {
      
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error)
      }
    }

    onMounted(() => {
     
    })

    return {
      modules: [Pagination, Navigation, Autoplay],
      slides,
    }
  },
}
</script>

<style scoped>

</style>