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
    <div class="top">
      <img src="/public/img/LOGO (1).png" alt="">
      <h5>Pagine</h5>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Servizi</a></li>
        <li><a href="">Contattaci</a></li>
        <li><a href="">Chi Siamo?</a></li>
      </ul>
    </div>
    <div class="bottom">
      <h5>Info legali</h5>
      <ul>
        <li><a href="">Termini e condizioni</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Cookie Policy</a></li>
      </ul>
      <h5>Contatti e Social</h5>
      <div class="social">
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

  </footer>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   footer{
    width: 100%;
    background-color: rgb(1, 1, 22);
    @include dfc;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
    .top, .bottom{
      justify-content: space-evenly;
      @include dfc;

    }
   }

</style>
