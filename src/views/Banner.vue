<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <swiper :options='swiperOption'>
          <swiper-slide><img src="https://via.placeholder.com/300/09f/fff.png" alt="" class="img-fluid"></swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
        </swiper>
        <div><p>Ini Banner</p></div>
        <swiper :options='swiperOptionVertical' class="swiper-2">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4 class="text-left">Trending</h4>
      </div>
      <div class="col-md-6">
        <router-link to="#" tag="h4" class="text-right">Lihat Semua</router-link>
      </div>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <OnlineService />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import OnlineService from '../components/OnlineService'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'product-card',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 1500
        }
      },
      swiperOptionVertical: {
        direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 1500
        },
        setWrapperSize: true,
        allowTouchMove: false
      }
    }
  },
  components: {
    ProductCard,
    OnlineService,
    swiper,
    swiperSlide
  }
}
</script>

<style>
.swiper-2 {
  height: 2rem;
  width: 100%;
}
</style>
