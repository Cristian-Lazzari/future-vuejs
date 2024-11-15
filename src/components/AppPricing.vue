<script>
import { store } from "../store.js";
export default {
  props: {
  },
  data() {
    return {
      store,
      pay_time : 0,
      price : [
        [
          '49,90' , '399,90'
        ],
        [
          '99,90' , '999,90'
        ],
        [
          '129,90' , '1199,90'
        ],
      ]

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
    <p>Scegli il tipo di abbonamento</p>
    <div class="scelta">
      <div :class="pay_time == 1 ? 'right ball' : 'left ball' "></div>
      <div @click="pay_time = 1" :class="pay_time == 1 ? 'on aa' : 'off'">Mensile</div>
      <div @click="pay_time = 0" :class="pay_time == 0 ? 'on mm' : 'off'">Annuale</div>
    </div>
    <div class="prices">
      <div class="schedule">
        <h4>Pacchetto <br> Essentials</h4>
        <div v-for=" f in store.feats_1" :key="f" :class="f.s ? 'feat' : 'feat off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
        <div class="price">{{price[0][pay_time]}}</div>
      </div>
      <div class="schedule">
        <h4>Pacchetto <br> Work On</h4>
        <div v-for=" f in store.feats_2" :key="f" :class="f.s ? 'feat' : 'feat off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
        <div class="price">{{price[1][pay_time]}}</div>
      </div>
      <div class="schedule">
        <h4>Pacchetto <br> Boost Up</h4>
        <div v-for=" f in store.feats_3" :key="f" :class="f.s ? 'feat' : 'feat off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
        <div class="price">{{price[2][pay_time]}}</div>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
     //max-width: none;
     background-color: $c1;
     color: $c3;
     padding: 5vh 0;
     h2{
      @include mmw;
      margin-top:0;
      font-size: $fs_xxlg;
      font-weight: 600;
      margin-bottom: 5vh;
    }
    p{
      text-align: center;
      margin: 1rem;
      font-size: $fs_sm;
    }
    .scelta{
      border: 4px solid $c1;
      box-shadow: -3px 3px rgba($c3, .3),  -7px 5px 12px -3px rgba(0, 0, 0, 0.316) ;
      background-color: $c3;
      color: $c1;
      padding: .5rem;
      border-radius: $b_r_md;
      margin: 0 auto 3rem; 
      font-size: $fs_sml;
      @include dfc;
      gap: 2rem;
      width: fit-content;
      position: sticky;
      top: 20vh;
      z-index: 9;
      div{
        border-radius: 100px;
      }
      .on{
        transition: all .4s ease-in-out;
        position: relative;
        z-index: 4;
        padding: .8rem 1.2rem;
        background-color: $c1_op;
      }
      .on.mm{
        background-color: $c2_op;

      }
      .off{
        transition: all .4s ease-in;
        position: relative;
        z-index: 4;
        padding: .8rem 1.2rem;
        opacity: .4;
      }

      .ball{
        transition: all .5s cubic-bezier(0.455, 2, 0.3, 1.2);
        z-index: 2;
        background-color:$c2;
        height: 2.3rem;
        width: 3rem;
        position: absolute;
        filter: blur(16px);
        animation: ball 5s linear infinite;
      }
      
      .right{
        margin-left: -50%;
        background-color:$c1;
      }
      .left{   
        margin-right: -50%;
      }
      
    }
    .prices{
      width: 100%;
      @include dfc;
      justify-content: space-evenly;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      .schedule{
        background-color: $c3;
        max-width: 330px;
        box-shadow:  -7px 0px 15px rgba(0, 0, 0, 0.516) ;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: $c1;
        padding: 3rem 1.4rem;
        border-radius: $b_r_md;
        h4{
          font-size: $fs_lg;
          font-weight: bolder;
          text-align: center;
        }
        .feat{
          width: 100%;
          flex-direction: row;
          @include dfa;
          gap: 1.4rem;
          justify-content: space-between;
          p{
            width: clamp(180px, 30vw, 340px);
            
            text-align: start;
          }
          svg{
            flex:  0 0 auto;
            width: 23px;
            height: 23px;
            //aspect-ratio: 1;
          }
        }
        .off{
          opacity: .3;
          text-decoration: line-through ;
        }
      }
    }
  }
  @media (max-width: $bp_sm) {
    .mycl{
      height: 80svh;
    }
    
   }
   @keyframes ball {
        0%{
          transform: scale(100%);
        }
        25%{
          
          transform: scale(90%);
          filter: blur(10px);
        }
        75%{
          
          filter: blur(9px);
          transform: scale(130%);
        }
        100%{
          transform: scale(100%);

        }
      }

</style>