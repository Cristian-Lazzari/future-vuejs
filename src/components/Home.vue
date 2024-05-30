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
  height: 120vh;
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
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.34);
  background-color: rgba(0, 0, 0, 0.21);
  position: relative;
  padding:15px 60px;
  border: clamp(4px, .9vw, 8px) solid rgba(255, 255, 255, 0.796);

  z-index: 1100;
  border-radius: 15px;
  width: clamp(300px, 60%, 500px);

  animation: pulselogo 3s ease-out infinite;
}


@keyframes pulselogo {
    0%{
        scale: 1;
    }
    50%{
        scale: 1.02;
    }

    100%{
        scale: 1;
    }
}  


@media only screen and (max-device-width: 480px) {
  .section-1 .container  img {
    padding: 10px 50px;
  } 
  }

</style>
