<template>
  <div>
    salem
  </div> 
</template>
<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_KEY',
    libraries: 'places' // add any additional Google Maps libraries you want to use
  }
})
</script>