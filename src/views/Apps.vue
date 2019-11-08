<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12">
        <h4>Semua Aplikasi</h4>
      </div>
      <ProductCard v-for="(app, index) in apps" :key="index" v-bind="app" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      apps: []
    }
  },
  mounted () {
    let self = this
    axios.get('http://localhost:8000/api/apps')
      .then(response => {
        self.apps = response.data
      })
  },
  components: {
    ProductCard
  }
}
</script>

<style>

</style>
