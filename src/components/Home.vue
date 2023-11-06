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

    <div class="container">
      <div class="c-title">
        <div>Future +</div>
      </div>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-1 .container .c-title {
  padding: 1.1rem 5.8rem 1.2rem;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid $c-white;
  box-shadow: 3px 3px 15px black;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1200;
}
.section-1 .container .c-title div {
  font-family: "Bukhari Script", sans-serif;
  font-size: 3rem;
  display: inline;
  z-index: 1000;
  color: $c-white;
  text-shadow: 4px 4px 6px black;
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
  .section-1 .container .c-title {
  }
  .section-1 .container .c-title div {
    font-size: $d-title4-min;
  }
}

@media (max-width: 470px) {
  .section-1 .container .c-title {
  }
  .section-1 .container .c-title div {
    font-size: $d-title4-min;
  }
}
</style>
