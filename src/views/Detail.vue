<template>
  <div class="container px-0" v-if="app && comments">
    <div class="card mt-md-4 mt-sm-0">
      <div class="card-body">
        <div class="row">
          <div class="col-auto d-flex justify-content-start pr-0">
            <img :src="app.logo_url" class="mr-3 text-left" alt="#" width="96" height="96">
          </div>
          <div class="col d-flex flex-column justify-content-start pl-0">
            <h4 class="mt-3 text-left">{{ app.name }}</h4>
            <div class="d-flex flex-row justify-content-start">
              <small><Rating class="text-left" :totalStar='starTotal' :totalRater='peopleRate' className='mr-1' /></small>
              <small><span class="ml-2 font-weight-light">{{ peopleRate }}</span></small>
              <small><font-awesome-icon :icon="['fas', 'user']" class="ml-2" /></small>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col d-flex">
            <button class="btn btn-success button-mobile" @click="install()">Install</button>
            <a :href="app.apk_url" target="_blank" hidden ref="install_link"></a>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col d-flex justify-content-start align-items-center">
            <font-awesome-icon class="mr-1" :icon="['far', 'bookmark']"/>Tambahkan ke wishlist
          </div>
        </div>
        <hr>
        <!-- Review -->
        <div class="row mt-3">
          <div class="col-6 text-left">
            Ulasan
          </div>
          <div class="col-6 text-right">
            <font-awesome-icon :icon="['fas', 'info-circle']" />
            Kebijakan Resensi
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 col-sm-12 mb-md-0 mb-3">
            <h1 class="rating-score mb-0">{{ ratingNumber }}</h1>
            <Rating :totalStar='starTotal' :totalRater='peopleRate' className='mr-1' />
            <br>
            <font-awesome-icon :icon="['fas', 'user']" />
            <span class="ml-2 font-weight-light">{{ peopleRate }}</span>
          </div>
          <div class="col-md-6 col-sm-12">
            <Scorecard :ratingStar='starArray' />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <p v-if="comments.length === 0">Belum ada resensi</p>
            <Comment v-for="(comment, index) in firstFourComments" :key="index" v-bind="comment" />
            <router-link
              style="color: #33691e; font-weight: 500;"
              class="text-uppercase"
              :to="{ name: 'reviews', params: { appId: $route.params.appId } }"
              v-if="comments.length !== 0"
            >
              Lihat Semua Resensi
            </router-link>
          </div>
        </div>
        <!-- End of Review -->
        <hr>
        <!-- Additional Information -->
        <div class="row mb-3">
          <div class="col text-left">
            Informasi Tambahan
          </div>
        </div>
        <div class="row">
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Diupdate</p>
            <p class="font-weight-light">{{ app.updated }}</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Ukuran</p>
            <p class="font-weight-light">{{ app.size }}</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Install</p>
            <p class="font-weight-light">{{ app.installed }}</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Versi Terkini</p>
            <p class="font-weight-light">{{ app.current_version }}</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Versi Android</p>
            <p class="font-weight-light">{{ app.android_version }}</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Rating Konten</p>
            <p class="font-weight-light">{{ app.content_rating }}<br>pelajari lebih lanjut</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Izin</p>
            <p class="font-weight-light">Lihat Detail</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Laporan</p>
            <p class="font-weight-light">Tandai sebagai tidak pantas</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Ditawarkan Oleh</p>
            <p class="font-weight-light">{{ app.offered_by }}</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Developer</p>
            <p class="font-weight-light">{{ app.developer }}</p>
          </div>
        </div>
        <!-- End of Additional Information -->
        <hr>
        <div class="row">
          <div class="col text-left mb-3">
            Aplikasi Sejenis
          </div>
        </div>
        <!-- Similar Apps -->
        <swiper :options='swiperOption' v-if="apps.length > 0">
          <swiper-slide v-for="(app) in apps" :key="app.id">
            <router-link :to="{ name: 'detail', params: { appId: app.id } }" :key="app.id" >
              <AppSuggestion v-bind="app" />
            </router-link>
          </swiper-slide>
        </swiper>
        <!-- End of Similar Apps -->
      </div>
    </div>
    <footer class="mt-3 mb-4 text-left px-3 px-md-0">
      <span>©2019 Google</span><a href="#"> Persyaratan Layanan </a><a href="#">Situs Privasi Developer Tentang Google</a> | <span>Lokasi: Indonesia </span><span>Bahasa: Indonesia</span>
      <div>Dengan membeli item ini, Anda bertransaksi dengan Google Payments dan menyetujui <a href="#">Persyaratan Layanan </a>serta <a href="#">Pemberitahuan Privasi</a> Googel Payments</div>
    </footer>
  </div>
</template>

<script>
import Rating from '../components/Rating'
import Scorecard from '../components/Scorecard'
import Comment from '../components/Comment'
import AppSuggestion from '../components/AppSuggestion'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import axios from 'axios'

export default {
  name: 'rating',
  data () {
    return {
      app: null,
      apps: [],
      comments: [],
      dummyStar: {
        five: 10000,
        four: 390,
        three: 200,
        two: 1000,
        one: 150
      },
      swiperOption: {
        freeMode: true,
        slidesPerView: 3.5,
        grabCursor: true,
        spaceBetween: 10
      }
    }
  },
  methods: {
    sum (total, val) {
      return total + parseInt(val.rating)
    },
    loadData () {
      let self = this
      /**
       * Load current app data
       */
      axios.post('http://147.139.138.100:8000/api/app', { id: self.$route.params.appId })
        .then(function (response) {
          if (response.data.status === 'error') {
            self.$router.push({ name: 'not-found' })
          } else {
            self.app = response.data
          }
        })

      /**
       * Load comments for current app
       */
      axios.post('http://147.139.138.100:8000/api/comments', { id: self.$route.params.appId })
        .then(function (response) {
          self.comments = response.data
        })

      /**
       * Load suggestion apps
       */
      axios.post('http://147.139.138.100:8000/api/suggest', { appId: self.$route.params.appId })
        .then(response => {
          self.apps = response.data
        })
    },
    countView () {
      axios.post('http://147.139.138.100:8000/api/add_open_count', { app_id: this.$route.params.appId })
    },
    install () {
      axios.post('http://147.139.138.100:8000/api/add_install_count', { app_id: this.$route.params.appId })
      this.$refs['install_link'].click()
    }
  },
  computed: {
    starTotal () {
      if (this.comments.length > 0) {
        return this.comments.reduce(this.sum, 0)
      } else {
        return 0
      }
    },
    peopleRate () {
      return this.comments.length
    },
    ratingNumber () {
      if (this.comments.length > 0) {
        return (this.starTotal / this.peopleRate).toFixed(1)
      } else {
        return 0
      }
    },
    starArray () {
      let five = this.comments.filter(element => element.rating === 5).length
      let four = this.comments.filter(element => element.rating === 4).length
      let three = this.comments.filter(element => element.rating === 3).length
      let two = this.comments.filter(element => element.rating === 2).length
      let one = this.comments.filter(element => element.rating === 1).length

      return {
        five, four, three, two, one
      }
    },
    firstFourComments () {
      return this.comments.slice(0, 4).map(element => element)
    }
  },
  mounted () {
    this.loadData()
    this.countView()
  },
  watch: {
    '$route.params.appId': function () {
      this.loadData()
      this.countView()
    }
  },
  components: {
    Rating,
    Scorecard,
    Comment,
    swiper,
    swiperSlide,
    AppSuggestion
  }
}
</script>

<style>
@media only screen and (max-width:480px) {
  .button-mobile { width: 100%; display:block; }
}

footer {
  font-size: 12px;
}

.rating-score {
  font-size: 5rem;
  line-height: 1em;
  font-weight: 100;
}
</style>
