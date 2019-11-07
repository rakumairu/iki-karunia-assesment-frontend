<template>
  <div class="card flex-row flex-wrap flex-md-nowrap" @click="direct">
    <div class="card-header border-0 p-0">
      <img src="//placehold.it/200" alt="" width="128" height="128" class="img-thumbnail p-0 p-md-2 border-0">
    </div>
    <div class="card-body text-left pl-2 pl-md-1 pt-1 pt-md-3 d-flex flex-column flex-wrap ">
      <small><span class="text-mobile">Title</span></small>
      <small><span class="mb-auto text-mobile">Description</span></small>
      <small><Rating totalStar='80' totalRater='20' className='mr-0' /></small>
    </div>
    <!-- <div class="card-block px-auto">
    </div> -->
  </div>
</template>

<script>
import Rating from '../components/Rating'

export default {
  name: 'app-suggestion',
  props: ['appId'],
  methods: {
    direct () {
      this.$router.push({ name: 'detail', params: { appId: this.appId } })
    }
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
