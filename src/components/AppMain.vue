<script >
import Asection from '../components/Asection.vue'
import Bsection from '../components/Bsection.vue'
import Csection from '../components/Csection.vue'
import Dsection from '../components/Dsection.vue'
import Pacchetti from '../components/Pacchetti.vue'

export default{
  components: {
    Asection,
    Bsection,
    Csection,
    Dsection,
    Pacchetti,

  }

}
</script>

<template>
 

    <div class="container">
      <Home />
      <Asection />
      <Bsection />
      <Csection />
      <Dsection />
      <Pacchetti />
  
    </div>

</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
   .container{
    margin: 0;
    width: 100%;
    color: $c-white;   
  }

</style>
