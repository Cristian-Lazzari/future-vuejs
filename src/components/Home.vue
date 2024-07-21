<script>

// import Bsection from './components/Bsection.vue'
// import Csection from './components/Csection.vue'
// import Dsection from './components/Dsection.vue'
export default {

};
</script>

<template>
  <div id="home" class="section-1">
    
    <div class="b-3"></div>

    <div class="b-4"></div>
    <div class="b-1"></div>
    <div class="b-6"></div>

    <a class="container" href="#why">

        <img src="../assets/img/logo.png" alt="">

    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
.section-1 {
  background-color: $c-bg;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  z-index: 5;
}
.section-1 .container {
  height: 100%;
  width: 100%;
  position: relative;
  top: -10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-1 .container  img {
  filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.324));
  position: relative;
  z-index: 1100;
  width: clamp(300px, 60%, 500px);
  animation: pulselogo 3s ease-in infinite;
}


@keyframes pulselogo {
    0%{
        scale: 1;
    }
    50%{
      scale: 1.02;
      filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.324));
    }

    100%{
        scale: 1;
    }
}  


</style>
