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
  <div class="container">
    <h2>
        La nostra offerta esclusiva
    </h2>
    
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    @include mmw;

     height: 100svh;
    .mycl{
      height: 50svh;
    }
    h2{
      
      font-size: $fs_xxlg;
      font-weight: 600;
      color: $c1;
    }
  }
  @media (max-width: $bp_sm) {
    .mycl{
      height: 80svh;
    }
    
   }

</style>