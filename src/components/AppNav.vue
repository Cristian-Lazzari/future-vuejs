<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
      scroll: false,
    };
  },
  methods: {
    actionScroll(event) {
      const scroll = window.scrollY;
      //   console.log(scroll);
      if (scroll > 800) {
        this.scroll = true;
      } else if (scroll == 0) {
        this.scroll = false;
      }
    },
    openmenu(){
      this.store.nav_menu = !this.store.nav_menu
      
    },
  },
  created() {
    window.addEventListener("scroll", this.actionScroll);
  },

};
</script>

<template>
  <nav :class="{ nav_scroll: scroll }" class="nav">
    <ul :class="{ ul_scroll: scroll }" >
      <li><a class="" href="#home"> Home </a></li>
      
      <li><a class="" href="#servizi"> Servizi </a></li>
      <li><a class="" href="#pacchetti"> Pricing </a></li>
      <li><a class="" href="#contatti"> Contatti </a></li>
    </ul>
  </nav>
  <div :class="store.nav_menu ? 'nav-mobile-on' : 'nav-mobile-off'" @click="openmenu">
      <div class="line l1"></div>
      <div class="line l2"></div> 
      <div class="line l3"></div>
  </div>
  
  <div :class="store.nav_menu ? 'mobile-on' : 'mobile-off' ">
    <ul class="flex" >
      <li> <a @click="openmenu" :class="{ black: scroll }" href="#home"> Home </a> </li>
      <li> <a @click="openmenu" :class="{ black: scroll }" href="#servizi"> Servizi </a> </li>
      <li> <a @click="openmenu" :class="{ black: scroll }" href="#pacchetti"> Pricing </a> </li>
      <li> <a @click="openmenu" :class="{ black: scroll }" href="#contatti"> Contatti </a> </li>
    </ul>
  </div>
  
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  z-index: 7 !important;
  backdrop-filter: blur(50px);
  font-size: $fs_sml;
  font-family: "Inter", sans-serif;
  font-weight: bolder;
  //background-color: rgba(255, 255, 255, 0.283);
  transition: all .2s ease-in;
  @include dfc;
  //justify-content: flex-end;
  gap: 1rem;
  a {
    position: relative;
    z-index: 10;
    text-decoration: none;
    color: rgba($c1, .8);
    font-weight: bolder;
    transition: all .3s ease-in;
  }
  a::after{
    content: '';
    position: absolute;

  }
  
  background-color: $c3_op;
  box-shadow: 0 21px 40px -18px rgb(0, 0, 0);
}
.nav-mobile {
  display: none;
}

.nav_scroll {
  background-color: $c1_op;
  transition: all .2s ease-in;
}

ul {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  justify-content: space-evenly;
  width: 60%;
  transition: all .3s ease-in;
  //justify-content: flex-end;
  margin: 0;
}
.ul_scroll {
  transition: all .3s ease-in;
  width: 50%;
  margin-left: auto;
  
  li{
    a{
      transition: all .3s ease-in;
      color: $c3;
    }
  }
}

</style>
