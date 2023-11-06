<script >
import Home from './components/Home.vue';
import appMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppNav from "./components/AppNav.vue";

// import Bsection from './components/Bsection.vue'
// import Csection from './components/Csection.vue'
// import Dsection from './components/Dsection.vue'
export default{
  components: {
    Home,
    appMain,
    AppFooter,
    AppNav,


  },
  data() {
    return {
      side: 0,
    };
  },
  methods:{
    openmenu(){
      if(this.side == 1){
        this.side = 0
        console.log(this.side)
      }else{
        this.side = 1
        console.log(this.side)
      }
      
    }
  }

}
</script>

<template>
 

    <div class="container">
      <AppNav class="nav"/>
      <div :class="side ? 'nav-mobile-on' : 'nav-mobile-off'" @click="openmenu">
        <div class="line"></div> <div class="line"></div> <div class="line"></div>
      </div>
      <div :class="side ? 'mobile-on' : 'mobile-off' ">
        <ul class="flex" >
          <li> <a :class="{ black: scroll }" href="#home"> Home </a> </li>
          <li> <a :class="{ black: scroll }" href="#why"> Perchè avere un sito? </a> </li>
          <li> <a :class="{ black: scroll }" href="#servizi"> Servizi </a> </li>
          <li> <a :class="{ black: scroll }" href="#pacchetti"> Pacchetti </a> </li>
          <li> <a :class="{ black: scroll }" href="#contatti"> Contatti </a> </li>
        </ul>
      </div>
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



  .mobile-on{
    display: block;
    background-color: rgba(255, 255, 255, 0.929);
    position: fixed;
    inset: 0;
    z-index: 1112!important;
    .flex{
      @include dfc;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      padding: 20% 0 30%;
      li{
        a{
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 25px;
          font-weight: bolder;
          color: black;
          text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.623);
        }
        a:active{
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 30px;
          font-weight: bolder;
          color: rgb(255, 255, 255);
          text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.623);
          user-select: none;
        }
      }
    }
  }
  .mobile-off{
    display: none;
    
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
    box-shadow: 2px 2px 7px black;
  }
  

}
  .nav-mobile-off{
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
    box-shadow: 2px 2px 7px black;
  }
  

}
}
</style>
