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
        <div class="col-auto d-flex justify-content-end align-items-center">
          <router-link :to="{ name: 'Detail', params: { appId: id } }" class="btn btn-primary btn-lg float-right" :key="id">Ajukan</router-link>
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
export default {
  name: 'product-card',
  props: ['id', 'name', 'logo_url', 'loan_amount_from', 'loan_amount_to', 'interest_rate', 'term_from', 'term_to', 'annotations']
}
</script>

<style>

</style>
