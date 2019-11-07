<template>
  <div>
    <div class="row">
      <div class="col-auto d-flex justify-content-start pr-0">
        <img src="https://bulma.io/images/placeholders/96x96.png" class="mr-3 text-left rounded-circle" alt="#" height="52" width="52">
      </div>
      <div class="col d-flex flex-column justify-content-start pl-0 py-1">
        <span class="text-left mb-0 font-weight-bold">Center-aligned media</span>
        <div class="d-flex flex-row justify-content-start">
          <small><Rating class="text-left" totalStar='80' totalRater='20' className='mr-1' /></small>
          <span class="ml-2 font-weight-light"><small>November 6, 2019</small></span>
        </div>
      </div>
    </div>
    <div class="row pt-1">
      <div class="col text-left">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste, sed modi a porro eligendi, maiores aperiam doloribus dignissimos ipsa aspernatur, illum rem voluptate adipisci esse officia ex maxime laudantium?</p>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '../components/Rating'

export default {
  name: 'comment',
  components: {
    Rating
  }
}
</script>

<style>

</style>
