<template>
  <div class="container px-0" v-if="comments">
    <div class="card mt-md-4 mt-sm-0">
      <div class="card-body">
        <div class="row mt-4">
          <div class="col">
            <p v-if="comments.length === 0">Belum ada resensi</p>
            <Comment v-for="(comment, index) in comments" :key="index" v-bind="comment" />
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-3 mb-4 text-left px-3 px-md-0">
      <span>©2019 Google</span><a href="#"> Persyaratan Layanan </a><a href="#">Situs Privasi Developer Tentang Google</a> | <span>Lokasi: Indonesia </span><span>Bahasa: Indonesia</span>
      <div>Dengan membeli item ini, Anda bertransaksi dengan Google Payments dan menyetujui <a href="#">Persyaratan Layanan </a>serta <a href="#">Pemberitahuan Privasi</a> Googel Payments</div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'reviews',
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    let self = this
    axios.post('http://147.139.138.100:8000/api/comments', { id: self.$route.params.appId })
      .then(function (response) {
        self.comments = response.data
      })
  },
  created () {
    if (!document.title.includes('| Review')) {
      document.title = document.title + ' | Review'
    }
  },
  components: {
    Comment: () => import('../components/Comment')
  }
}
</script>

<style>

</style>
