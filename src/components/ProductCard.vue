<template>
  <div class="card mb-3" style="width: 100%">
    <ul class="list-group">
      <li class="list-group-item d-flex">
        <div class="col-auto d-flex justify-content-start pr-0">
          <img :src="logo_url" class="mr-3 text-left" alt="#" width="96" height="96">
        </div>
        <div class="col d-flex justify-content-start pl-0">
          <h4 class="mt-3 text-left font-weight-bolder">{{ name }}</h4>
        </div>
        <div class="col-auto d-flex justify-content-end align-items-center" @click="something">
          <router-link :to="{ name: 'Detail', params: { appId: id } }" class="btn btn-primary btn-lg float-right" :key="id" v-if="!playstore_url">Ajukan</router-link>
          <a :href="playstore_url" class="btn btn-primary btn-lg float-right" :key="id" target="__blank" v-else>Ajukan</a>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-4">
            Rp {{ loan_amount_from.toLocaleString() }} - Rp {{ loan_amount_to.toLocaleString() }} <br>
            Jumlah Pinjaman
          </div>
          <div class="col-4 border-right border-left">
            {{ interest_rate }}% <br>
            referensi tarif
          </div>
          <div class="col-4">
            {{ term_from }} ~ {{ term_to }} <br>
            jangka waktu
          </div>
        </div>
      </li>
      <li class="list-group-item text-left">{{ annotations }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'product-card',
  props: ['id', 'name', 'logo_url', 'loan_amount_from', 'loan_amount_to', 'interest_rate', 'term_from', 'term_to', 'annotations', 'playstore_url'],
  methods: {
    something () {
      let user = localStorage.getItem('user')
      if (user) {
        user = JSON.parse(user)
        axios.post('http://147.139.138.100:8000/api/add_user_app', {
          app_id: this.id,
          phone_number: user.phone_number.toString(),
          jwt: localStorage.getItem('jwt')
        })
          .then(response => console.log(response))
      }
    }
  }
}
</script>

<style>

</style>
