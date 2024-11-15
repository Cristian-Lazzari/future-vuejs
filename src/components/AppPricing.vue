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
    <div class="prices">
      <div class="schedule">
        <h4>Pacchetto <br> Essentials</h4>
        <div v-for=" f in store.feats_1" :key="f" :class="f.s ? 'feat' : 'feat off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
        <div class="price">€399</div>
      </div>
      <div class="schedule">
        <h4>Pacchetto <br> Work On</h4>
        <div v-for=" f in store.feats_2" :key="f" :class="f.s ? 'feat' : 'feat off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
        <div class="price">€399</div>
      </div>
      <div class="schedule">
        <h4>Pacchetto <br> Boost Up</h4>
        <div v-for=" f in store.feats_3" :key="f" :class="f.s ? 'feat' : 'feat off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
        <div class="price">€399</div>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    @include mmw;
    max-width: none;
    background-color: $c1;
    color: $c3;
    h2{
      font-size: $fs_xxlg;
      font-weight: 600;
      margin-bottom: 5vh;
    }
    .prices{
      width: 100%;
      @include dfc;
      justify-content: space-evenly;
      gap: 3rem;
      flex-wrap: wrap;
      .schedule{
        max-width: 330px;
        background-color: $c3;
        box-shadow: -6px -6px rgba($c3_op, .3),  -7px 0px 15px rgba(0, 0, 0, 0.516) ;

        //width: 900px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: $c1;
        padding: 3rem 1rem;
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

</style>