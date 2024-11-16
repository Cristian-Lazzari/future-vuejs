<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
      scroll: false,
      theme : localStorage.getItem("theme") || 'light',
    };
  },
  methods: {
    actionScroll(event) {
      const scroll = window.scrollY;
      //   console.log(scroll);
      if (scroll > 1000) {
        this.scroll = true;
      } else if (scroll < 900) {
        this.scroll = false;
      }
    },
    openmenu(){
      this.store.nav_menu = !this.store.nav_menu
      
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      document.documentElement.setAttribute("data-theme", this.theme);
      console.log(this.theme)
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
      <li>
        <div @click="toggleTheme" :class=" theme === 'light' ? 'toggle-btn light' : 'toggle-btn dark'">
          <div class="sun-rays"></div>
          <div class="main-circle"></div>
        </div>
        <!-- <p  @click="toggleTheme" for="">Tema: {{ theme === 'light' ? 'chiaro' : 'scuro' }}</p> -->
      </li>
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
      <li>
        <div @click="toggleTheme" :class=" theme === 'light' ? 'toggle-btn light' : 'toggle-btn dark'">
          <div class="sun-rays"></div>
          <div class="main-circle"></div>
        </div>
      </li>
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
    color: $c1;
    font-weight: bolder;
    transition: all .3s ease-in;
  }
  a::after{
    content: '';
    position: absolute;

  }
  
  background-color: rgba(var(--c3-rgb), .8);
  box-shadow: 0 10px 17px -2px rgba(0, 0, 0, 0.279);
}
.nav-mobile {
  display: none;
}

.nav_scroll {
  background-color: var(--c1_op);
  transition: all .2s ease-in;
  z-index: 10 !important;
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
      color: var(--c3);
    }
  }
}
.mobile-on{
    display: block;
    background-color: var(--c3);
    position: fixed;
    inset: 0;
    z-index: 1112!important;
    .flex{
      @include dfc;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      padding: 20% 0 30%;
      li{
        a{
          text-decoration: none;
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 25px;
          font-weight: bolder;
          color: var(--c1);
          text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.623);
          transition: all .2s ease-in-out ;
        }
        a:hover{
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 30px;
          font-weight: bolder;
          color: rgba(254, 252, 255, 0.775);
          text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.623);
          user-select: none;
          transition: all .2s ease-in-out ;
        }
      }
    }
  }
  .mobile-off{
    display: none;
    
  }
  @media (min-width:600px) {
    .mobile-on{
      display: none;
    }
  }
  @media (max-width:600px) {
    .nav{
      display: none !important;
    }
    .nav-mobile-on{
      @include dfc;
      position: fixed;
      z-index: 1113 !important;
      flex-direction: column; 
      gap: 6px;
      top: 30px;
      right: 30px;
      .line{
        height: 3px;
        width: 27px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 7px black;
      }
      .l1, .l2{
        position: absolute;
        transform: rotateZ(405deg);
        transition: all .3s linear;
      }
      .l3{
        position: absolute;
        transform: rotateZ(-405deg);
        transition: all .3s linear;
      }
      .l2{
        box-shadow: 0px 0px 0px black;
      }
      
    }
    .nav-mobile-off{
      @include dfc;
      position: fixed;
      z-index: 1113 !important;
      flex-direction: column;
      
      gap: 6px;
      top: 20px;
      right: 20px;
      
      .line{
        height: 3px;
        width: 27px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 2px 2px 7px black;
        transition: all .3s linear;
      }
      
      
    }
  }
  @media (max-height:400px) {
    .mobile-on{
      display: none;
    }
  }
  @media (max-height:400px) {
    .nav{
      display: none !important;
    }
    .nav-mobile-on{
      @include dfc;
      position: fixed;
      z-index: 1113 !important;
      flex-direction: column; 
      gap: 6px;
      top: 30px;
      right: 30px;
      .line{
        height: 3px;
        width: 27px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 7px black;
      }
      .l1, .l2{
        position: absolute;
        transform: rotateZ(405deg);
        transition: all .3s linear;
      }
      .l3{
        position: absolute;
        transform: rotateZ(-405deg);
        transition: all .3s linear;
      }
      .l2{
        box-shadow: 0px 0px 0px black;
      }
      
    }
    .nav-mobile-off{
      @include dfc;
      position: fixed;
      z-index: 1113 !important;
      flex-direction: column;
      
      gap: 6px;
      top: 20px;
      right: 20px;
      
      .line{
        height: 3px;
        width: 27px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 2px 2px 7px black;
        transition: all .3s linear;
      }
      
      
    }
  }

</style>
