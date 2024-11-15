<script>
import { store } from "../store.js";
export default {
  props: {
  },
  data() {
    return {
      store,
    };
  },
  methods:{

   
  },
  created(){
    
  }
};
</script>

<template>
  <div class="container">
    <!-- Calendly inline widget begin -->
  <div class="calendly-inline-widget"
   data-url="https://calendly.com/futureplus-commerciale/30min?hide_gdpr_banner=1" 
   style="min-width:320px;height:700px;"></div>
<!-- Calendly inline widget end -->
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    height: 100svh;
    
   }

</style>
