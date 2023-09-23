<script >
import Home from './components/Home.vue';
import appMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

// import Bsection from './components/Bsection.vue'
// import Csection from './components/Csection.vue'
// import Dsection from './components/Dsection.vue'
export default{
  components: {
    Home,
    appMain,
    AppFooter,
   

  }

}
</script>

<template>
 

    <div class="container">
      <Home />
      <appMain />
      <AppFooter />
    </div>

</template>

<style lang="scss" scoped >
   @use './assets/styles/general.scss' as *;
  .container{
  
    height: 100vh ;
  }

</style>
