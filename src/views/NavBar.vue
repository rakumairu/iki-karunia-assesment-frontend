<template>
  <nav class="d-flex justify-content-between" style="height: 56px">
    <div class="d-flex align-items-center">
      <button class="btn" @click="back" v-if="$route.name !== 'Tercepat'"><arrow-left-icon size='1.75x' class="custom-icon"></arrow-left-icon></button>
      <span style="font-size: 1.25rem" v-text="$route.name" :class="[$route.name === 'Tercepat' ? 'ml-3' : '']"></span>
    </div>
    <div class="d-flex align-items-center" v-if="$route.name !== 'Profile'">
      <router-link :to="{ name: 'Profile' }" class="btn"><user-icon size="1.75x" class="custom-icon"></user-icon></router-link>
    </div>
  </nav>
</template>

<script>
// import { UserIcon } from 'vue-feather-icons'
export default {
  name: 'navbar',
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
    notProfile () {
      return this.$route.name === 'Profile'
    },
    title () {
      return this.$route.name
    }
  },
  components: {
    UserIcon: () => import('vue-feather-icons/icons/UserIcon'),
    ArrowLeftIcon: () => import('vue-feather-icons/icons/ArrowLeftIcon')
  }
}
</script>

<style>
.profile-button {
  font-size: 1.5rem;
}

.nav-button {
  font-size: 1.5rem;
}

nav {
  background-color: #007bff;
  color: white;
  border-bottom: 1px solid #007bff8c;
  box-shadow:  -1px 1px #007bff8c;
}

.custom-icon {
  color: white;
}
</style>
