<template>
    <div class="container">
        <div>
    <h2>Forgot Password</h2>
</div>
         
<form style="max-width: 420px; margin: 0 auto;">
<div class="border border-secondary rounded p-3">
    <div>
        <p>We will be sending a reset password link to your email.</p>
    </div>
    <div>
        <p>
            <input type="email" v-model="email"  placeholder="Enter your e-mail" required />
        </p>         
   
    </div>
</div>
</form>
<p class="text-center">
            <input type="button" value="Send" @click="submit" class="btn btn-primary" />
        </p>
    </div>
  </template>
  


  <script>
  import resetpwdService from '@/services/resetpwd.service';
  export default {
    name: 'forgot_passwd',
    data() {
      return {
        content: '' ,
        email:''
      };

    },
    methods:{
submit(){
    resetpwdService.postEmail(this.email) ;
} 
    }
  };
  </script>