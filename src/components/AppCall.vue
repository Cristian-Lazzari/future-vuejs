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
    <h2>Prenota una chiamata con in nostri <span class="c2">ESPERTI</span> </h2>
    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget mycl" data-url="https://calendly.com/futureplus-commerciale/30min?hide_event_type_details=1&hide_gdpr_banner=1"></div>
<!-- Calendly inline widget end -->
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    @include mmw;

     height: 100svh;
    .mycl{
      width: 60vw;
      margin: 0 auto;
      height: 50svh;
    }
    h2{
      
      font-size: $fs_xxlg;
      font-weight: 600;
      color: $c1;
      margin-bottom: 10svh;
    }
  }
  @media (max-width: $bp_md) {
    .mycl{
      width: 90vw !important;
      height: 90svh !important;
      border-radius: $b_r_md !important;
      overflow: hidden;
      background-color: aqua;
    }
    
   }

</style>
