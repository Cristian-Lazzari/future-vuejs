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
    <h2 id="call" >Prenota una chiamata con i nostri <span class="c2">ESPERTI</span> </h2>
    <p class="text" >Dopo questa call <span class="pack">GRATUITA  </span> sarai in grado di capire a pieno le potenzialità e le agevolazioni che la nostra azienda è in grado di portarti, e soprattutto noi saremo in grado di sapere se e come possiamo aiutarti al massimo, prenota ora la tua chiamata!</p>
    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget mycl" data-url="https://calendly.com/futureplus-commerciale/scopri-come-restaurant-puo-svoltare-il-tuo-lavoro?hide_gdpr_banner=1" style="min-width:250px;height:700px;"></div>
<!-- Calendly inline widget end -->
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    color: var(--c1);
    @include mmw;
  
    .mycl{
      @include dfc;
      width: 100%;
      padding-inline: auto;
      margin: 0 auto;
      height: 1400px;
      overflow: hidden;
    }
    h2{
      font-size: $fs_xxlg;
      font-weight: 600;
      
      margin-bottom: 10svh;
    }
  }
  @media (max-width: $bp_md) {
    .container{
      padding-inline: .5rem !important;
    }
    h2{
      padding-inline: 1.5rem;  
    }
    .mycl{
      overflow: auto;
      padding: 0 !important;
      margin: 0 auto !important;
      width: clamp(250px, 90%, 600px) !important;
      height: 180vh !important;
      border-radius: $b_r_md !important;
    }
    
   }

</style>
