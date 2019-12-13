<template>
  <div id="app">
    <NavBar v-if="show" />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = this.$route.name !== 'cash-cart' && this.$route.name !== 'apps'
  },
  watch: {
    $route (to) {
      this.show = to.name !== 'cash-cart' && to.name !== 'apps' && to.name !== 'not-found'
    }
  },
  components: {
    NavBar: () => import(/* webpackPrefetch: true */ '@/views/NavBar')
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
