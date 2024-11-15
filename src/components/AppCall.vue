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
    <p class="text" >Dopo questa call <span class="pack">GRATUITA  </span> sarai in grado di capire a pieno le potenzialità e le agevolazioni che la nostra azienda è in grado di portarti, e soprattutto noi saremo in grado di sapere se e come possiamo aiutarti al massimo, prenota ora la tua chiamata!</p>
    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget mycl" data-url="https://calendly.com/futureplus-commerciale/30min?hide_event_type_details=1&hide_gdpr_banner=1"></div>
<!-- Calendly inline widget end -->
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    color: $c1;
    @include mmw;

     height: 100svh;
    .mycl{
      width: 60vw;
      padding-inline: auto;
      margin: 0 auto;
      height: 1400px;
      overflow: hidden !important;
    }
    h2{
      font-size: $fs_xxlg;
      font-weight: 600;

      margin-bottom: 10svh;
    }
  }
  @media (max-width: $bp_md) {
    .mycl{
      margin: 0 auto !important;
      width: 90vw !important;
      height: 90svh !important;
      border-radius: $b_r_md !important;
     
      //background-color: aqua;
    }
    
   }

</style>
