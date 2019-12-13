<template>
  <div class="card flex-row flex-wrap flex-md-nowrap" @click="direct">
    <div class="card-header border-0 p-0">
      <img :src="logo_url" alt="" width="128" height="128" class="img-thumbnail p-0 p-md-2 border-0">
    </div>
    <div class="card-body text-left pl-2 pl-md-1 pt-1 pt-md-3 d-flex flex-column flex-wrap ">
      <small><span class="text-mobile">{{ name }}</span></small>
      <small><span class="mb-auto text-mobile">30 menit</span></small>
      <small><Rating :totalStar='starTotal' :totalRater='peopleRate' className='mr-0' /></small>
    </div>
  </div>
</template>

<script>
import Rating from '../components/Rating'

import axios from 'axios'

export default {
  name: 'app-suggestion',
  props: ['id', 'logo_url', 'name'],
  data () {
    return {
      comments: []
    }
  },
  methods: {
    direct () {
      this.$router.push({ name: 'detail', params: { appId: this.id } })
    },
    sum (total, val) {
      return total + parseInt(val.rating)
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
    }
  },
  mounted () {
    let self = this
    axios.post('http://147.139.138.100:8000/api/comments', { id: self.id })
      .then(function (response) {
        self.comments = response.data
      })
  },
  components: {
    Rating
  }
}
</script>

<style>
@media all and (max-width:480px) {
  .text-mobile {
    font-size: 12px;
  }
}
</style>
