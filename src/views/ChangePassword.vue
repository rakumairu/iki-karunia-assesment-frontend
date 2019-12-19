<template>
  <div class="d-flex flex-column justify-content-center align-items-center pt-3">
    <div class="container mt-auto mb-auto">
      <h3 class="mb-4">Change Password</h3>
      <div class="form-group mb-3">
        <input
          type="password"
          v-model="password"
          :class="['form-control', password_error ? 'is-invalid' : '']"
          placeholder="Password lama" >
      </div>
      <div class="form-group mb-3">
        <input
          type="password"
          v-model="new_password"
          :class="['form-control', new_password_error ? 'is-invalid' : '']"
          placeholder="Password baru" >
      </div>
      <div class="form-group mb-3">
        <input
          type="password"
          v-model="new_password_confirmation"
          :class="['form-control', new_password_confirmation_error ? 'is-invalid' : '']"
          placeholder="Konfirmasi password baru" >
      </div>
      <div>
        <button class="btn btn-primary btn-block" @click="change">Ubah</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'change-password',
  data () {
    return {
      password: '',
      password_error: false,
      new_password: '',
      new_password_error: false,
      new_password_confirmation: '',
      new_password_confirmation_error: false
    }
  },
  methods: {
    change () {
      axios.post('http://147.139.138.100:8000/api/change_password', {
        phone_number: JSON.parse(localStorage.getItem('user')).phone_number.toString(),
        password: this.password,
        new_password: this.new_password,
        new_password_confirmation: this.new_password_confirmation,
        jwt: localStorage.getItem('jwt')
      })
        .then(response => response.data)
        .then(data => {
          if (data.status === 'success') {
            this.password = ''
            this.new_password = ''
            this.new_password_confirmation = ''
          } else {
            // todo: handle message ditampilin
            console.log(data.data.message)
            if (data.data.type) {
              if (typeof data.data.type === 'object') {
                if (data.data.type['password']) {
                  this.password_error = true
                }
                if (data.data.type['new_password']) {
                  this.new_password_error = true
                }
                if (data.data.type['new_password_confirmation']) {
                  this.new_password_confirmation_error = true
                }
              } else {
                if (data.data.type === 'password_error') {
                  this.password_error = true
                }
                if (data.data.type === 'new_password_error') {
                  this.new_password_error = true
                }
                if (data.data.type === 'new_password_confirmation_error') {
                  this.new_password_confirmation_error = true
                }
              }
            }
          }
        })
    }
  },
  mounted () {
    if (!localStorage.getItem('user')) {
      this.$router.go(-1)
    }
  },
  watch: {
    password: function () {
      this.password_error = false
    },
    new_password: function () {
      this.new_password_error = false
    },
    new_password_confirmation: function () {
      this.new_password_confirmation_error = false
    }
  }
}
</script>

<style>

</style>
