<script >

import ServicePacchetti from '../components/Service-Pacchetti.vue'
import Contatti from '../components/Contatti.vue'


export default{
  components: {

    ServicePacchetti,
    Contatti,
  }

}
</script>

<template>
 

    <div class="container">
      <div class="sub-c">
        
        <!-- <Asection />
        <Bsection />
        <Csection /> -->
        <ServicePacchetti />
      </div>

        <Contatti />
 

    </div>

</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
   .container{
    position: relative;
    width: 100%;
    color: $c-white;   
    z-index: 10;
    //overflow: hidden;
    .sub-c{
      background: linear-gradient(23deg, #6c32ad , #3d62c5 );
      
    }
  }

</style>
