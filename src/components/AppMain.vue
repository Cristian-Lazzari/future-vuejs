<script >
import Asection from '../components/Asection.vue'
import Bsection from '../components/Bsection.vue'
import Csection from '../components/Csection.vue'
import ServicePacchetti from '../components/Service-Pacchetti.vue'
import Contatti from '../components/Contatti.vue'


export default{
  components: {
    Asection,
    Bsection,
    Csection,
    ServicePacchetti,
    Contatti,
  }

}
</script>

<template>
 

    <div class="container">
      <div class="sub-c">
        
        <Asection />
        <Bsection />
        <Csection />
      </div>
      <ServicePacchetti />

        <Contatti />
 

    </div>

</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
   .container{
   
    width: 100%;
    color: $c-white;   
    z-index: 2;
    //overflow: hidden;
    .sub-c{
      background: linear-gradient(23deg,#4a82fa 5%, #6c32ad 30%, #3d62c5  63%);
    }
  }

</style>
