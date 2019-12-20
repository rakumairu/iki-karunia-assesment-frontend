<template>
  <div class="card mb-3" style="width: 100%">
    <ul class="list-group">
      <li class="list-group-item d-flex">
        <div>
          <img :src="logo_url" class="mr-3 text-left" alt="#" width="36" height="36">
        </div>
        <div class="">
          <span class="mt-3 text-left" style="font-size: 1.25rem">{{ name }}</span>
        </div>
        <!-- <div class="col-auto d-flex justify-content-end align-items-center" @click="something">
          <router-link :to="{ name: 'Detail', params: { appId: id } }" class="btn btn-primary btn-lg float-right" :key="id" v-if="!playstore_url">Ajukan</router-link>
          <a :href="playstore_url" class="btn btn-primary btn-lg float-right" :key="id" target="__blank" v-else>Ajukan</a>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'history-card',
  props: ['logo_url', 'name']
}
</script>

<style>

</style>
