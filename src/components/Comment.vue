<template>
  <div>
    <div class="row">
      <div class="col-auto d-flex justify-content-start pr-0">
        <img :src="user.img_url" class="mr-3 text-left rounded-circle" alt="#" height="52" width="52">
      </div>
      <div class="col d-flex flex-column justify-content-start pl-0 py-1">
        <span class="text-left mb-0 font-weight-bold">{{ user.name }}</span>
        <div class="d-flex flex-row justify-content-start">
          <small><Rating class="text-left" :star="rating" className='mr-1' /></small>
          <span class="ml-2 font-weight-light"><small>{{ date }}</small></span>
        </div>
      </div>
    </div>
    <div class="row pt-1">
      <div class="col text-left">
        <p>{{ comments }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '../components/Rating'

export default {
  name: 'comment',
  props: ['user', 'rating', 'date', 'comments'],
  components: {
    Rating
  }
}
</script>

<style>

</style>
