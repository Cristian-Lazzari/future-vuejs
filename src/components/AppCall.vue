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
    <div class="calendly-inline-widget" data-url="https://calendly.com/futureplus-commerciale/30min?hide_event_type_details=1&hide_gdpr_banner=1"></div>
<!-- Calendly inline widget end -->
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    padding: 1rem;
    height: 100svh;

   }

</style>
