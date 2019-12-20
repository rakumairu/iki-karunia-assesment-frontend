<template>
  <div class="d-flex flex-column justify-content-center align-items-center pt-3">
    <div class="container mt-auto mb-auto">
      <!-- <div v-for="(item, index) in apps" :key="index">
        {{ item.name }}
      </div> -->
      <HistoryCard v-bind="app" v-for="(app, index) in apps" :key="index" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'application-history',
  data () {
    return {
      apps: []
    }
  },
  mounted () {
    let user = localStorage.getItem('user')
    let self = this
    if (user) {
      user = JSON.parse(user)
      axios.post('http://147.139.138.100:8000/api/get_user_app', {
        phone_number: user.phone_number.toString(),
        jwt: localStorage.getItem('jwt')
      })
        .then(function (response) {
          self.apps = response.data.data
          console.log(self.apps)
        })
    }
  },
  components: {
    HistoryCard: () => import('../components/HistroyCard')
  }
}
</script>

<style>

</style>
