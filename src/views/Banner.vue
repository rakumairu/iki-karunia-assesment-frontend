<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <swiper :options='swiperOption' v-if="banners.length > 0">
          <swiper-slide v-for="(item, index) in banners" :key="index">
            <a :href="item.redirect_url" target="_blank">
              <img :src="item.img_url" alt="image" class="img-fluid">
            </a>
          </swiper-slide>
        </swiper>
        <div><p>Ini Banner</p></div>
        <swiper :options='swiperOptionVertical' class="swiper-2" v-if="notifications.length > 0">
          <swiper-slide v-for="(notification, index) in notifications" :key="index">
            <span>{{ notification.date }} {{ notification.time }} In {{ notification.name }} Sukses Meminjam {{ notification.amount }} Istilah {{ notification.term }}</span>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4 class="text-left">Trending</h4>
      </div>
      <div class="col-md-6">
        <router-link :to="{ name: 'apps' }" tag="h4" class="text-right">Lihat Semua</router-link>
      </div>
      <ProductCard v-for="(app, index) in apps" :key="index" v-bind="app" />
    </div>
    <OnlineService />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import OnlineService from '../components/OnlineService'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import axios from 'axios'

export default {
  name: 'product-card',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000
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
      },
      banners: [],
      apps: [],
      notifications: []
    }
  },
  mounted () {
    let self = this
    axios.get('http://147.139.138.100:8000/api/banners')
      .then(response => {
        self.banners = response.data
      })
    axios.get('http://147.139.138.100:8000/api/apps')
      .then(response => {
        self.apps = response.data
      })
    axios.get('http://147.139.138.100:8000/api/notifications')
      .then(response => {
        self.notifications = response.data
      })
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
