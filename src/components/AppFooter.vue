<script>
import { store } from "../store.js";
export default {
  props: {
  },
  data() {
    return {
      store,
    };
  },
  methods:{

   
  },
  created(){
    
  }
};
</script>

<template>
  <footer class="container">
    <div class="wrap">
      <div class="top">
      <img src="/public/img/LOGO (1).png" alt="">
      <div>
        <h5>Pagine</h5>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Servizi</a></li>
          <li><a href="">Contattaci</a></li>
          <li><a href="">Chi Siamo?</a></li>
        </ul>
      </div>
      </div>
      <div class="bottom">
        <div>
          <h5>Info legali</h5>
          <ul>
            <li><a href="">Termini e condizioni</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cookie Policy</a></li>
          </ul>
        </div>
        <div class="social">
          <h5>Contatti e Social</h5>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
          <ul>
            <li>Mail</li>
            <li>Telefono</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="last">Future Plus ® All Rights Reseverd.</p>
    

  </footer>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   footer{
     .wrap{
      @include dfc;
      align-items: flex-start;
      margin: 0 auto;
      max-width: 1200px;
      padding: 8svh 2rem 5svh;
      color: $c1;
      width: 100%;
      background-color: $c4;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;

      ul{
        width: fit-content;
        @include dfj;
        flex-direction: column;
        gap: .6rem;
        font-size: $fs_xsm;
        a{
          text-decoration: none;
          color: $c1;
        }
        li{
          list-style: none;

          opacity: .4;
        }
      }
      .top, .bottom{
        opacity: .8;
        flex: 1 1 auto;
        @include dfj;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 3rem;
        div{
          h5{
            font-size: $fs_sm;
            padding-bottom: 1rem;
          }
          //flex: 1 1 auto;
          
        }
      }
      .top{
        @include dfa;
        img{
          opacity: .3;
          width: clamp(100px, 40vw, 240px);
        }
      }
      .social{
        @include dfa;
        flex-direction: column;
        ul{
          margin-bottom: 3rem;
          width: 100%;
          justify-content: flex-start;

        }
      }
    }
  }
  .last{
    color: $c1;
    padding: 3rem;
   width: 100%;
   text-align: center;
   background-color: rgb(1, 1, 11);
  }
  @media (max-width: $bp_md) {

    .top, .bottom, .wrap{
      text-align: center;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
    }
    
  }

</style>
