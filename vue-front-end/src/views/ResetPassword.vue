<template>
    <div>
      <h2>Reset Your Password</h2>
      <form @submit.prevent="resetPassword">
        <input type="hidden" name="token" :value="token" />
        <div class="border border-secondary rounded p-3">
          <div>
            <p>
              <input type="password" v-model="password" id="password" class="form-control"
                placeholder="Enter your new password" required autofocus />
            </p>
            <p>
              <input type="password" v-model="confirmPassword" class="form-control"
                placeholder="Confirm your new password" required />
            </p>
            <p class="text-center">
              <button type="submit" class="btn btn-primary">Change Password</button>
            </p>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import resetpwdService from '@/services/resetpwd.service';
  export default {
    data() {
      return {
        token: '',
        password: '',
        confirmPassword: ''
      }
    },
    mounted() {
      this.token = this.$route.query.token || ''
    },
    methods: {
      resetPassword() {
  resetpwdService.postRestPassword
    .then(response => {
      console.log(response);
      this.$router.push('/home'); 
    })
    .catch(error => {
      console.error(error);
    });
  }
    }
  }
  </script>
  