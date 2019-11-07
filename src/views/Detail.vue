<template>
  <div class="container px-0">
    <div class="card mt-md-4 mt-sm-0">
      <div class="card-body">
        <div class="row">
          <div class="col-auto d-flex justify-content-start pr-0">
            <img src="https://bulma.io/images/placeholders/96x96.png" class="mr-3 text-left" alt="#" width="96" height="96">
          </div>
          <div class="col d-flex flex-column justify-content-start pl-0">
            <h4 class="mt-3 text-left">Center-aligned media</h4>
            <div class="d-flex flex-row justify-content-start">
              <small><Rating class="text-left" totalStar='80' totalRater='20' className='mr-1' /></small>
              <small><span class="ml-2 font-weight-light">12344</span></small>
              <small><font-awesome-icon :icon="['fas', 'user']" class="ml-2" /></small>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col d-flex">
            <a href="#" class="btn btn-success button-mobile">Install</a>
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
            <h1 class="rating-score mb-0">4.0</h1>
            <Rating totalStar='80' totalRater='20' className='mr-1' />
            <br>
            <font-awesome-icon :icon="['fas', 'user']" />
            <span class="ml-2 font-weight-light">12344</span>
          </div>
          <div class="col-md-6 col-sm-12">
            <Scorecard :ratingStar='dummyStar' />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <Comment />
            <Comment />
            <Comment />
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
            <p class="font-weight-light">2019-11-05</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Ukuran</p>
            <p class="font-weight-light">35MB</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Install</p>
            <p class="font-weight-light">100.000+</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Versi Terkini</p>
            <p class="font-weight-light">1.5.4</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Versi Android</p>
            <p class="font-weight-light">4.4 dan lebih</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Rating Konten</p>
            <p class="font-weight-light">Rating 3+<br>pelajari lebih lanjut</p>
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
            <p class="font-weight-light">Mobile Loan</p>
          </div>
          <div class="col-6 text-left">
            <p class="font-weight-bold mb-0">Developer</p>
            <p class="font-weight-light">Mobile Loan</p>
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
        <swiper :options='swiperOption'>
          <swiper-slide><AppSuggestion :appId="'2'" /></swiper-slide>
          <swiper-slide><AppSuggestion /></swiper-slide>
          <swiper-slide><AppSuggestion /></swiper-slide>
          <swiper-slide><AppSuggestion /></swiper-slide>
          <swiper-slide><AppSuggestion /></swiper-slide>
          <swiper-slide><AppSuggestion /></swiper-slide>
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

export default {
  name: 'rating',
  data () {
    return {
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
    direct (e) {
      console.log(e)
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
