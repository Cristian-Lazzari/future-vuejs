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
    <!-- < -->
    <h2>I nostri pacchetti pensati <span class="c2">PER TE</span> </h2>

    <div id="servizi" class="pack">
      <div class="schedule">
        <h4>Pacchetto <br> Essentials</h4>
        <div v-for=" f in store.feats_1" :key="f" :class="f.s ? 'feat' : 'off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
      </div>
      <p class="desc">Ideale per i ristoranti che cercano una soluzione 
        semplice e intuitiva per digitalizzare il proprio menu.
        Con <span class="pack">Essentials</span> , hai accesso a un menu digitale aggiornabile
        e una dashboard facile da usare per gestire post 
        e contenuti in pochi clic. Perfetto per iniziare a 
        costruire la tua presenza online senza rinunciare alla qualità.</p>
    </div>
    <div class="pack">
      <p class="desc" >Il pacchetto <span class="pack">Work on</span> di Future Plus ti permette di ricevere
        prenotazioni e ordini d’asporto direttamente dal tuo sito 
        con <span class="pack">ZERO commissioni</span>. Con questa soluzione, puoi offrire ai
        tuoi clienti la comodità di prenotare e ordinare online, 
        trattenedo il 100% dei guadagni. Oltre al menu digitale
        e alla dashboard completa, hai strumenti per pubblicare 
        contenuti e migliorare la tua visibilità. Un’opzione perfetta
        per ristoranti che puntano a crescere e a fidelizzare 
        la clientela, risparmiando sui costi di intermediazione.</p>
      <div class="schedule">
        <h4>Pacchetto <br> Work On</h4>
        <div v-for=" f in store.feats_2" :key="f" :class="f.s ? 'feat' : 'off'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
      </div>    
    </div>
    <div class="pack">
      <div class="schedule">
        <h4>Pacchetto <br> Boost Up</h4>
        <div v-for=" f in store.feats_3" :key="f" class="feat">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
          <p v-html="f.f"></p>
        </div>
      </div>
      <p class="desc">La soluzione <span class="pack">COMPLETA </span> per la gestione digitale del tuo ristorante.
        Con <span class="pack">Boost Up</span> , hai accesso a tutte le funzionalità: menu interattivo, 
        dashboard completa, gestione dei post, prenotazioni tavoli,
        ordini d’asporto, delivery, statistiche avanzate e pagamenti online.
        Completa il tutto la gestione semplificata di ordini e prenotazioni tramite WhatsApp con ZERO stress. Perfetto per ristoranti che vogliono lavorare sempre al top e 
        distinguersi offrendo un’esperienza utente impeccabile.</p>
    </div>


  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/styles/general.scss' as *;
  .container{
    @include mmw;
    max-width: none;
    padding-inline: 0;
    @include dfc;
    flex-direction: column;
    color: var(--c1);
    gap: 3rem;
    background-color: var(--c3);
    h2{
      @include mmw;
      margin: 0;
      padding-top: 0;
      padding-bottom: 5vh;
      font-size: $fs_xxlg;
      font-weight: 600;
    }
    .pack:nth-child(odd){
      .desc{
        margin-left: auto;
        margin-right: 0;
        text-align: start;
      }
    }
    .pack{
      padding-bottom: 15vh;
      span.pack{
        display: inline;
        font-size: $fs_lg;
      }
      font-size: $fs_sm;
      @include dfa;
      justify-content: space-between;
      gap: 15vw;
      .desc{
        font-size: $fs_sml;
        width: 35%;
        margin-right: auto;
        line-height: $fs_lg;
        padding: 2rem;
        text-align: end;
      }
      
      .schedule{
        background-color: var(--c1);
        box-shadow: -6px -6px rgba(var(--c1_op-rgb), .3),  -7px 0px 15px rgba(0, 0, 0, 0.516) ;

        //width: 900px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: var(--c3);
        padding: 3rem 10vw 3rem 5vw;
        border-top-right-radius: 0 ;
        border-bottom-right-radius: 0 ;
        border-bottom-left-radius: $b_r_md;
        border-top-left-radius: $b_r_md;
        h4{
          font-size: $fs_lg;
          font-weight: bolder;
          text-align: center;
        }
        .feat{
          flex-direction: row-reverse;
          width: 100%;
          @include dfa;
          gap: 2.8rem;
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
          height: 0;
          padding: 0;
          display: none;
        }
      }
      .schedule:nth-child(odd){
        border-top-right-radius: $b_r_md;
        border-bottom-right-radius: $b_r_md;
        border-bottom-left-radius: 0 ;
        border-top-left-radius: 0 ;
        box-shadow: 6px -6px rgba(var(--c1_op-rgb), .3),  7px 0px 15px rgba(0, 0, 0, 0.516) ;
        padding: 3rem 5vw 3rem 10vw  !important;
        //background-color: red;
        .feat{
          flex-direction: row;
          p{
            text-align: end;
            //background-color:red;
          }
        }
      }
      
    }
    @media (max-width:$bp_md) {
      .container{
        gap: 0rem !important;
      }
      .pack{
        padding-bottom: 5vh !important;
        gap: 2rem;
        flex-direction: column;
        .desc{
          width: 80% !important;
          text-align: center !important;
          padding: 1rem !important;
          margin: 0 !important;
          align-self: center;
        }
        .schedule{
          align-self: flex-end;
        }
      }
      .pack:nth-child(even){
        .schedule{
          align-self: flex-start;
        }
        flex-direction: column-reverse;
      }
    }
  }

</style>
