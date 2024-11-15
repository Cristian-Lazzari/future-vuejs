<script>
import TypewriterText from "/src/components/TypewriterText.vue";

export default {
  components:{
    TypewriterText
  },
  props: {
  },
  data(){
    return {

    }
  }
};
</script>

<template>
    <div class="hero">
        <div class="center_hero">
            <img src="../../public/img/LOGO (1).png" alt="">
            <div class="text">
              <TypewriterText text="La prima web agency dedicata esclusivamente alla ristorazione..." :speed="30" />
              <TypewriterText text="Non sei curioso?" :speed="80" />
              <TypewriterText text="Prova ora, È GRATIS!" :speed="80" />
              <div class="btn-2">Provalo GRATIS</div>
            </div>
        </div>
        <div class="btn-1 br">Scopri di più</div>
        <div class="bottom_bar">
            <div class="piva">P. IVA 02974730422</div>
            <div>
                <a href="">Cookie Policy</a>
            <a href="">Privacy Policy</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
    .hero{
      color: $c1;
      height: 100svh;
      width: 100%;
      background-image: url('../../public/img/herofplus.png');
      background-position: center;
      background-size: cover;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      position: relative;
      overflow: hidden;
      .center_hero{
        padding: 0 5vw;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.5rem;
        img{
          width: clamp(180px, 30vw, 680px);
          //height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 10px $c1_op);
          animation: logobig .6s ease-out;
        }
        .text{
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
          width: 40%;
        }
      }
      .btn-2{
        //width: 80%;
        margin-left: auto;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 900;
        font-size: $fs_sml;
      }
      .btn-1{
        position: absolute;
        bottom: 10%
      }
      .bottom_bar{
        @include dfc;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 1rem;
        background-color: $c1_op;
        div{
          display: flex;
          gap: .5rem;
        }
        a, .piva{
          font-size: $fs_xsm;
          color: $c1_op;
          font-family: 'Courier New', Courier, monospace;
          text-decoration: none;
          transition: all 1s ease-out;
          font-weight: 400;
        }
        a{
          font-weight: 600;

        }
        a:hover, .piva:hover{
          color: $c1;
          text-shadow: 0 0 15px $c2;
          transition: all .3s ease-out;
        }
      }
    }
    @media (max-width: $bp_xlg) {
      .center_hero{
        
        gap: 6svh !important;
        justify-content: space-between;
        flex-direction: column;
        img{
          max-width: 600px;
          width: 74% !important;
        }
        .btn-2{
          margin: 1.5rem auto 0!important;
        }
        .text{
          width: 60%!important;
          gap: 1.6rem !important;
        }
      }
    }
    @media (max-width: $bp_md) {
      .center_hero{  
        gap: 2svh !important;
        .text{
          width: 90% !important;
          gap: 1.2rem !important;
        }
      }
    }
    @keyframes logobig {
      0%{
        transform: scale(500%);
        opacity: 0;
        
      }
      1%{
        transform: scale(500%);
      }
      100%{
        opacity: 1;
        transform: scale(1);

      }
    }

    
</style>
