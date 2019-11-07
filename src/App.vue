<template>
  <div id="app">
    <NavBar v-if="show" />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'

export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = this.$route.name !== 'cash-cart'
  },
  watch: {
    $route (to) {
      console.log(to)
      this.show = to.name !== 'cash-cart'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
