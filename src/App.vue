<template>
  <div id="app">
    <NavBar v-if="show" />
    <transition name="component-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: false,
      noNavbar: [
        'not-found',
        'prohibited'
      ]
    }
  },
  mounted () {
    this.show = this.noNavbar.includes(this.$route.name)
    document.getElementById('splash').style.display = 'none'
  },
  watch: {
    $route (to) {
      this.show = to.name !== 'not-found'
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

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
