<script>

// import Bsection from './components/Bsection.vue'
// import Csection from './components/Csection.vue'
// import Dsection from './components/Dsection.vue'
export default {

};
</script>

<template>
  <div id="home" class="section-1">
    <div class="b-2"></div>
    <div class="b-3"></div>
    <div class="b-5"></div>
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
  height: 100%;
  position: relative;
  scroll-snap-align: start;
  z-index: 5;
}
.section-1 .container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-1 .container  img {
  box-shadow: 0px 0px 10px white;
  background-color: rgba(0, 0, 0, 0.21);
  position: relative;
  padding:15px 60px;
  border: 8px solid $c-white;

  z-index: 1100;
  border-radius: 15px;
  width: 60%;
  max-width: 580px;
  min-width: 260px;
 
  animation: pulselogo 3.3s ease-in-out infinite;
}

/* 
@keyframes pulselogo {
    0%{
        scale: 1;
    }
    36%{
        scale: 1.03;
    }

    100%{
        scale: 1;
    }
}  */



@media (max-width: 670px) {

  .section-1 .container .c-title div {
    font-size: $d-title4-min;
  }
}

@media (max-width: 470px) {
  
  .section-1 .container .c-title div {
    font-size: $d-title4-min;
  }
}
</style>
