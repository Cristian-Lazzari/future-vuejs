<script>
import { store } from "../store.js";
export default {
  props: {
  },
  data() {
    return {
      store,
      reviews: [
        {
          'text' : 'Consiglio vivamente a chi ha un’attività di affidarsi a Futureplus per quattro semplici motivi: rispetto verso il cliente e le sue richieste, trasparenza, utilità e velocità. Il sito creato è molto semplice da utilizzare sia da cliente che da proprietario e questo ne facilita il lavoro. Inoltre, per qualsiasi problematica Cristian risponde tempestivamente e risolve il problema in poco tempo. Lo stile e la creatività che mette nel proprio lavoro, rendono il tutto molto credibile e accattivante.',
          'link' : 'https://www.trustpilot.com/reviews/676442470492b858bb8b9070',
          'autore' : 'Letizia - Il Capriccio di Leo'
        },
        {
          'text' : 'Voglio ringraziare Cristian per il lavoro eccellente che ha fatto nel creare il sito con il menù per il mio pub. È stato davvero un professionista: sempre disponibile a chiarire ogni mio dubbio, con risposte chiare e precise, e una velocità sorprendente nel gestire tutto. Il risultato è andato oltre le mie aspettative! Un ringraziamento speciale va anche ad Anita, che me lo ha fatto conoscere e mi ha spiegato in ogni dettaglio come Cristian avrebbe lavorato per realizzare il progetto. È stato un team perfetto! Se cercate qualcuno di competente, disponibile e affidabile, Cristian è la persona giusta.',
          'link' : 'https://www.trustpilot.com/reviews/675756f2e57b6b7b4efa542b',
          'autore' : 'Stefano - La Zona pub'
        },

        
        
        // 'Non sapevo neanche di averne bisogno, ma ammetto che la loro professionalità e il loro supporto sono impeccabili. Consigliatissimi!' 
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
    <div class="wrap">
        <h2 id="review" >Le recensioni dei <span class="c2">nostri</span> clienti</h2>
        <p class="text">
            Noi, <span class="strg">come te</span>, ce la <span class="strg">mettiamo tutta ogni giorno</span>
            per rendere ogni persona la <span class="strg">nostra priorità</span> .
            Crediamo davvero di <span class="strg"> poterti aiutare</span> , ma non 
            parliamo noi, lo dicono i <span class="strg">nostri clienti!</span> 
        </p>
        <div class="reviews">
            <div v-for="r in reviews" :key="r" class="panel rev">
                <div class="star">
                  <svg v-for="r in 5" :key="r" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </div>
                <p class="content">
                  {{ r.text }}
                </p>
                <span>
                 Di "{{ r.autore }}""
                </span>
                <a :href="r.link">Leggi su Trust Pilot</a>
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
       color: var(--c3);
       gap: 3rem;
       background-color: var(--c1);
       h2{
         text-shadow: 0 0 11px rgba(var(--c3-rgb), .3);
         font-size: $fs_xxlg;
         font-weight: 600;
         span.c2{
           text-shadow: 0 0 17px rgba(var(--c3-rgb), .7);
           
         }
        }
        p{
         text-shadow: 0 0 9px rgba(var(--c3-rgb), .3);

       }
        .reviews{
            @include dfj;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 3.5rem;
            .rev{
                display: flex;
                flex-direction: column;
                gap: 2.7rem;
                .star{
                  @include dfc;
                  gap: .7rem;
                  svg{

                    color: $c2;
                    filter: drop-shadow( -1px 1.4px 0 var(--c1));
                  }

                }
                //padding: 1.2rem 3rem;
                color: var(--c1);
                box-shadow: -5px 5px var(--c3_op), -7px 6px 18px -5px rgba(0, 0, 0, 0.616) ;
                background-color: var(--c3);
                width: clamp(200px, 80vw, 300px);
                span{
                  font-size: $fs_xsm;
                  opacity: .8;
                }
                a{
                  font-size: 14px;
                  color: $c2;
                  font-family: monospace;
                  margin-top: auto;
                  width: 100%;
                  text-align: center;
                }
            }
        }
   }

</style>
