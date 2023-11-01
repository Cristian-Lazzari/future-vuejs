<script>
import AppNav from "./AppNav.vue";

// import Bsection from './components/Bsection.vue'
// import Csection from './components/Csection.vue'
// import Dsection from './components/Dsection.vue'
export default {
  components: {
    AppNav,
  },
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
    <app-nav />
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

@keyframes moveb1{
    0%{
        left: 5%
    }
    50%{
        left: 20%
    }
    100%{
        left: 5%
    }
}
@keyframes moveb2{
    0%{
        top:25%
    }
    50%{
    
    top:5%
    }
    100%{
        top:25%
    }
}
@keyframes moveb3{
    0%{
        top: 30%;
    left: 30%;
    }
    25%{
        top: 40%;
        left: 40%;
    }
    50%{
        top: 20%;
    left: 20%;

    }
    100%{
        top: 30%;
    left: 30%;
    }
}
@keyframes moveb4{
    0%{
        bottom: 30%;
        right: 30%;
    }
    25%{
        bottom: 40%;
        right: 40%;
    }
    50%{
        bottom: 20%;
        right: 20%;
    }
    100%{
        bottom: 30%;
        right: 30%;
    }
}
@keyframes moveb5{
    0%{
        bottom: 15%;
        right: 15%;
    }
    50%{
        bottom: 5%;
    
    }
    100%{
        bottom: 15%;
        right: 15%;
    }
}
@keyframes moveb6{
    0%{
        bottom: 5%;
        right: 5%;
    }
    25%{
        right: 15%;
    }
    100%{
        bottom: 5%;
        right: 5%;
    }
}

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
