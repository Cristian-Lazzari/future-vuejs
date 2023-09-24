<script >
import Asection from '../components/Asection.vue'
import Bsection from '../components/Bsection.vue'
import Csection from '../components/Csection.vue'
import ServicePacchetti from '../components/Service-Pacchetti.vue'


export default{
  components: {
    Asection,
    Bsection,
    Csection,
    ServicePacchetti,
  }

}
</script>

<template>
 

    <div class="container">
      <Home />
      <Asection />
      <Bsection />
      <Csection />
      <ServicePacchetti />
 
  
    </div>

</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
   .container{
   
    width: 100%;
    color: $c-white;   
    z-index: 2;
    //overflow: hidden;
  }

</style>
