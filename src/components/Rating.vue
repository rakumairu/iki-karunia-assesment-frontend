<template>
  <span>
    <font-awesome-icon :icon="rating >= 1 ? ['fas', 'star'] :['far', 'star']" size='xs' :class="className" />
    <font-awesome-icon :icon="rating >= 2 ? ['fas', 'star'] :['far', 'star']" size='xs' :class="className" />
    <font-awesome-icon :icon="rating >= 3 ? ['fas', 'star'] :['far', 'star']" size='xs' :class="className" />
    <font-awesome-icon :icon="rating >= 4 ? ['fas', 'star'] :['far', 'star']" size='xs' :class="className" />
    <font-awesome-icon :icon="rating >= 5 ? ['fas', 'star'] :['far', 'star']" size='xs' />
  </span>
</template>

<script>
export default {
  name: 'rating',
  props: ['totalStar', 'totalRater', 'className'],
  computed: {
    rating () {
      return this.totalStar / this.totalRater
    }
  }
}
</script>

<style>

</style>
