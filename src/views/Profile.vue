<template>
  <div>
    <!-- Not Logged in -->
    <div class="d-flex flex-column justify-content-center align-items-center pt-3" v-if="!user">
      <div class="container mt-auto mb-auto">
        <h3 class="mb-4">Tercepat</h3>
        <div class="alert alert-danger" v-for="(message, index) in error_messages" :key="index">
          {{ message }}
        </div>
        <div class="form-group mb-3">
          <input
            type="number"
            v-model="phone_number"
            :class="['form-control', phone_number_error ? 'is-invalid' : '']"
            placeholder="Nomor handphonne" >
        </div>
        <div class="form-group mb-5">
          <input
            type="password"
            v-model="password"
            :class="['form-control', password_error ? 'is-invalid' : '']"
            placeholder="Password" >
        </div>
        <div v-if="view === 'login'">
          <button class="btn btn-primary btn-block" @click="login">Login</button>
          <small class="pb-2 mt-auto"><a href="#" @click="changeView('register')">Belum punya akun?</a></small>
        </div>
        <div v-else>
          <button class="btn btn-primary btn-block" @click="register">Register</button>
          <small class="pb-2 mt-auto"><a href="#" @click="changeView('login')">Sudah punya akun?</a></small>
        </div>
      </div>
    </div>
    <!-- Logged In -->
    <div class="d-flex flex-column justify-content-center align-items-center pt-3" v-else>
      <div class="container">
        {{ user.phone_number }}
        <router-link :to="{ name: 'Riwayat Aplikasi' }" class="btn btn-primary btn-block">Riwayat Aplikasi</router-link>
        <router-link :to="{ name: 'Change Password' }" class="btn btn-primary btn-block">Ubah Password</router-link>
        <button class="btn btn-primary btn-block" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'profile',
  data () {
    return {
      phone_number: '',
      password: '',
      phone_number_error: false,
      password_error: false,
      view: 'login',
      user: null,
      error_messages: []
    }
  },
  mounted () {
    let user = localStorage.getItem('user')
    if (user) {
      this.user = JSON.parse(user)
    }
  },
  methods: {
    changeView (view) {
      this.view = view
      this.clearErrorTrace()
    },
    login () {
      this.clearErrorTrace()
      axios.post('http://147.139.138.100:8000/api/login', {
        phone_number: this.phone_number,
        password: this.password
      })
        .then(response => response.data)
        .then(data => {
          if (data.status === 'success') {
            localStorage.setItem('user', JSON.stringify(data.data.user))
            localStorage.setItem('jwt', data.data.jwt)
            this.user = data.data.user
            this.phone_number = ''
            this.password = ''
          } else {
            if (data.data.type) {
              if (typeof data.data.type === 'object') {
                this.error_messages.push(data.data.message)
                if (data.data.type['phone_number']) {
                  this.phone_number_error = true
                }
                if (data.data.type['password']) {
                  this.password_error = true
                }
              } else {
                if (data.data.type === 'phone_number_error') {
                  this.phone_number_error = true
                  this.error_messages.push(data.data.message)
                } else if (data.data.type === 'password_error') {
                  this.password_error = true
                  this.error_messages.push(data.data.message)
                }
              }
            }
          }
        })
    },
    register () {
      this.clearErrorTrace()
      axios.post('http://147.139.138.100:8000/api/register', {
        phone_number: this.phone_number,
        password: this.password
      })
        .then(response => response.data)
        .then(data => {
          if (data.status === 'success') {
            localStorage.setItem('user', JSON.stringify(data.data.user))
            localStorage.setItem('jwt', data.data.jwt)
            this.user = data.data.user
            this.phone_number = ''
            this.password = ''
          } else {
            if (data.data.type) {
              if (typeof data.data.type === 'object') {
                this.error_messages.push(data.data.message)
                if (data.data.type['phone_number']) {
                  this.phone_number_error = true
                }
                if (data.data.type['password']) {
                  this.password_error = true
                }
              } else {
                if (data.data.type === 'phone_number_error') {
                  this.phone_number_error = true
                  this.error_messages.push(data.data.message)
                }
                if (data.data.type === 'password_error') {
                  this.password_error = true
                  this.error_messages.push(data.data.message)
                }
              }
            }
          }
        })
    },
    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('jwt')
      this.user = null
    },
    clearErrorTrace () {
      this.error_messages = []
      this.phone_number_error = false
      this.password_error = false
    }
  },
  watch: {
    phone_number: function () {
      this.phone_number_error = false
    },
    password: function () {
      this.password_error = false
    }
  }
}
</script>

<style>
.nav-button {
  font-size: 1.5rem;
}
</style>
