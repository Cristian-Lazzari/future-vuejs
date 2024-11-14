<script>
import { store } from "../store.js";
export default {
  props: {
  },
  data() {
    return {
      store,
      reviews: 3
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
    <div class="wrap">
        <h2>Le recensioni dei <span class="c2">nostri</span> clienti</h2>
        <p class="text">
            Noi, <span class="strg">come te</span>, ce la <span class="strg">mettiamo tutta ogni giorno</span>
            per rendere ogni persona la <span class="strg">nostra priorità</span> .
            Crediamo davvero di <span class="strg"> poterti aiutare</span> , ma non 
            parliamo noi, lo dicono i <span class="strg">nostri clienti!</span> 
        </p>
        <div class="reviews">
            <div v-for="r in reviews" :key="r" class="rev">
                <p class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex veritatis eos vero enim, illo dolorem expedita placeat atque consequuntur hic quae quibusdam animi dicta non aspernatur quaerat dolore tempora!
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   
   .container{
        .wrap{
            @include mmw;
        }
       @include dfc;
       flex-direction: column;
       color: $c3;
       gap: 3rem;
       background-color: $c1;
       h2{
           font-size: $fs_xxlg;
           font-weight: 600;
       }
        .reviews{
            @include dfc;
            flex-wrap: wrap;
            gap: 2rem;
            .rev{
                font-size: $fs_sm;
                padding: 1.2rem 3rem;
                border-radius: $b_r_sm;
                background-color: $c3_op;
                width: clamp(200px, 80vw, 300px);

            }
        }
   }

</style>
