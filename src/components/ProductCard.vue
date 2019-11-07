<template>
  <div class="card mb-3" style="width: 100%">
    <ul class="list-group">
      <li class="list-group-item d-flex">
        <div class="col-auto d-flex justify-content-start pr-0">
          <img src="https://bulma.io/images/placeholders/96x96.png" class="mr-3 text-left" alt="#" width="96" height="96">
        </div>
        <div class="col d-flex justify-content-start pl-0">
          <h4 class="mt-3 text-left font-weight-bolder">Center-aligned media</h4>
        </div>
        <div class="col-auto d-flex justify-content-end align-items-center">
          <router-link :to="{ name: 'detail', params: { appId: 1 } }" class="btn btn-primary btn-lg float-right">Ajukan</router-link>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-4">
            Rp50000-Rp100000 <br>
            Jumlah Pinjaman
          </div>
          <div class="col-4 border-right border-left">
            0.08% <br>
            referensi tarif
          </div>
          <div class="col-4">
            7 ~ 15 <br>
            jangka waktu
          </div>
        </div>
      </li>
      <li class="list-group-item text-left">Review cepat, terapkan sekarang</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
