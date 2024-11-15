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
      height: 50svh;
    }
    h2{
      
      font-size: $fs_xxlg;
      font-weight: 600;
      color: $c1;
    }
  }
  @media (max-width: $bp_sm) {
    .mycl{
      height: 80svh;
    }
    
   }

</style>
