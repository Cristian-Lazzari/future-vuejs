<script>
import { store } from "../store.js";
export default {
  props: {
  },
  data() {
    return {
      store,
      slide_1_a : 0,
      slide: [store.domain + '/img/ip.png', store.domain + '/img/ip1.png' ,store.domain + '/img/ip2.png'],
      slide_1: [1,2,3],
    };
  },
  methods:{

    slide_infinite() {
        setInterval(() => {
          if (this.slide.length > (this.slide_1_a + 1)) {
            this.slide_1_a ++; // Ciclo infinito sugli oggetti
          }else{
            this.slide_1_a = 0 // Ciclo infinito sugli oggetti
          }
          //console.log(this.slide_1_a)
        }, 4000); // 10000 millisecondi = 10 secondi
      },
  },
  created(){
    this.slide_infinite() 
  }
};
</script>

<template>
  <div class="container">
    <div class="section_tip first">
      <h2>Diventa finalmente il <span class="c2">PADRONE</span> della tua attività</h2>
      <p class="text">
        <span class="pack">Restaurant +</span> <br> 
        è il sistema FACILE adatto per essere usato da tutti, è COMODO perchè puoi usarlo subito ed ovunque senza scaricare app, è COMPLETO perchè comprende tutte le tue esigenze
      </p>
      <div class="grid">
        <div class="left">
          <div class="panel">
            <div class="top">
              <h5>Gestisci il tuo menu <span class="strg"> ovunque</span> e <span class="strg"> comodamente</span></h5>
              <div class="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
              </div>
            </div>
            <p>Puoi creare un menu, che puoi suddividere in categorie e con foto e dettagli a portata di clic i tuoi clienti saranno attratti come non mai</p>
          </div>
          <div class="panel">
            <div class="top">
              <h5>Statistiche <span class="strg"> accurate</span> ti mostreranno come muoverti</h5>
              <div class="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data" viewBox="0 0 16 16">
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"/>
                </svg>
              </div>
            </div>
            <p>Saprai i prodotti più ordinati ed i periodi di picco, traccerà la clientela che prenota il tavolo e l andamento dei tuoi ricavi</p>
          </div>
          <div class="panel qr">
            <div class="top">
              <h5>Genriamo per te il <span class="strg"> QR-CODE </span> per scansionare il menu e ordinare</h5>
              <div class="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                  <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"/>
                  <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"/>
                  <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"/>
                  <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z"/>
                  <path d="M12 9h2V8h-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
  
          <div class="slider">
            <img v-for="(s, i) in slide" :src="s" :class="slide_1_a == i ? 'on' : 'off'" :key="s" alt="">
            <div class="points">
              <div v-for="(s, i) in slide" @click="slide_1_a = i" :class="slide_1_a == i ? 'on point' : 'point'" :key="s"></div>
            </div>
          </div>
          <div class="panel">
            <div class="top">
              <h5> Nuove funzionalità sempre in implementazione, prendendo spunto proprio dal <span class="strg">tuo modo di lavorare! </span> </h5>
            </div>
          </div>
        
        </div>
  
      </div>
    </div>
    <div class="section_tip second">
      <h2>Incassa il <span class="c2">100%</span> dalla tua attività e di <span class="c2">ADDIO</span> alle <span class="c2">FEE di TERZI</span> </h2>
      <p class="text">
        <span class="pack">Restaurant+ PRO </span> <br> 
        il nostro softwere nella sua versione piu completa ti permette raccogliere ordini e prenotazioni dal tuo sito così che non dovrai piu pagare commissioni! 
      </p>
      <div class="grid">
        <div class="right">
          <div class="slider">
            <img v-for="(s, i) in slide" :src="s" :class="slide_1_a == i ? 'on' : 'off'" :key="s" alt="">
            <div class="points">
              <div v-for="(s, i) in slide" @click="slide_1_a = i" :class="slide_1_a == i ? 'on point' : 'point'" :key="s"></div>
            </div>
          </div>
          <div class="panel">
            <div class="top">
              <h5>Analizza  costantemente le tue <span class="strg">PERFORMANCE</span></h5>
              <div class="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data" viewBox="0 0 16 16">
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"/>
                </svg>
              </div>
            </div>
            <p>Trova gli orari e in cui sei piu attivo e gestisci al meglio il tuo personale</p>
          </div>
        </div>
        <div class="left">
          <div class="panel">
            <div class="top">
              <h5>Ordini a domicilio o d’asporto <span class="strg">ILLIMITATI</span></h5>
              <div class="small">
                <svg id="mail" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                  <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9z"/>
                  <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4M8 7a4 4 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8zm-3.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157"/>
                </svg>
                <svg id="box" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-inboxes" viewBox="0 0 16 16">
                  <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg>
  
              </div>
            </div>
            <div class="bottom">
              <p>Risparmia dal 20% al 40% sugli ordini online*</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-infinity" viewBox="0 0 16 16">
                <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
              </svg>
            </div>
          </div>
          <div class="panel">
            <div class="top">
              <h5>Prenotazioni tavoli <span class="strg">ILLIMITATE</span></h5>
              <div class="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-range" viewBox="0 0 16 16">
                  <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1M1 9h4a1 1 0 0 1 0 2H1z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg>
              </div>
            </div>
            <div class="bottom">
              <p>Risparmia oltre il 20% sulle prenotazioni online*</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-infinity" viewBox="0 0 16 16">
                <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
              </svg>
            </div>            
          </div>
          <div class="panel">
            <div class="top">
              <h5>Possibilità di abilitare il pagamento <span class="strg">ONLINE</span></h5>
              <div class="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>
                </svg>
              </div>
            </div>
            <p>Annulla il rischio di ordini non ritirati e pagati*</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   @use '../assets/styles/general.scss' as *;
   .container{
    background-color: $c3;
    .slider{
      text-align: center;
      flex-grow: 1;
      position: relative;
      //background-color: rgba(0, 255, 8, 0.499);
      width: clamp(220px, 65vw, 500px);

      img{
        width: 90%;
        margin: 0 auto;
        transition: opacity .5s ease-in-out;
      }
      .off{
        opacity: 0;
        width: 0;
        transition: opacity .5s ease-in-out;
      }
      .points{
        @include dfc;
        gap: .5rem;
        height: 22px;
        .point{
          height: 10px;
          width: 10px;
          background-color: $c1_op;
          border-radius: 20px;
          transition: all .3s ease-in-out;
        }
        .point:hover{
          transform: scale(150%);
          background-color: $c1;
          transition: all .3s ease-in-out;

        }
        .on{
          transition: all .3s ease-in-out;
          transform: scale(210%);
          margin-inline: 20px;
          background-color: $c1;
        }
      }
    }
    
    .panel, .small{
      background-color: $c1_op;
      box-shadow: -3px 3px rgba($c1_op, .3) ;
      
    }
  
    .section_tip{
      padding: 3rem;
      @include mmw;
      color: $c1;
      
      p{
        font-weight: 300;
      }
      h2{
        font-size: $fs_xxlg;
        font-weight: 600;
      }
      $gap:1.2rem;
      $gap_p_in: 1.8rem;
      .grid{
        display: flex;
        gap: $gap;
        .left, .right, .panel{
          display: flex;
          gap: $gap;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .small{
          @include dfc;
          padding: 8px 12px;
          border-radius: $b_r_sm;
          gap: 18px;
          svg{
            $w_svg : 35px;
            height: $w_svg;
            width: $w_svg;
          }
          #box{
            $w_svg : 30px;
            height: $w_svg !important;
            width: $w_svg !important;
          }
          #mail{
            $w_svg : 37px;
            height: $w_svg !important;
            width: $w_svg !important;
          }
        }
        .panel{
          $c_op : rgba(165, 175, 196, 0.864);
          box-shadow: -5px 5px rgba($c1_op, .3) ;
          //background: linear-gradient( 45deg,  $c1_op 10%, $c_op 22%, $c1_op 50%, $c_op 63%, $c1_op 86%  );

          width: 100%;
          text-align: left;
          gap: $gap_p_in;
          justify-content: flex-start;
          padding: 1.2rem 1.2rem 1.2rem 2.2rem;
          border-radius: $b_r_md;
          .top{
            width: 100%;
            display: flex;
            gap: $gap_p_in;
            justify-content: space-between;
            align-items: flex-start;
            h5{
              font-weight: 400;
              font-size: $fs_md;
              
            }
          }
          p{
            font-size: $fs_sm;
          }
        }
        .right{
          align-items: center;
          .panel{
            width: 90%;
            margin: 0 auto;
          }
          //background-color: rgba(0, 110, 255, 0.119);
        }
        .left{
          justify-content: center;
          //background-color: rgba(255, 0, 0, 0.119);
        }
      }
    }
    .first{
      .qr{
        gap: .5rem !important;
        
        h5{
          border-radius: $b_r_md;
        }
        .top{
          align-items: center !important;
          .small{
            height:  110px;
            aspect-ratio: 1;
            svg{
              height: 100%;
              width: 100%;

            }
          }
        }
        //flex: 1;
        height: fit-content;
        
      }
    }
    .second{
      .panel{
        .bottom{
          width: 100%;
          @include dfa;
          text-align: left;
          justify-content: space-between;
          align-items: center;
          svg{
            $w_svg : 35px;
            height: $w_svg;
            width: $w_svg; 
          }
        }
        p{
          text-align: left;
          width: 100%;
        }
      }
    }

    @media (max-width: $bp_md) {
      .section_tip{
        padding: 1rem !important;
      }
    }
    @media (max-width: $bp_lg) {
      .section_tip{
        .grid{
          flex-wrap: wrap;
          .left,.right{

            flex-grow: 1;
            .top{
              flex-direction: column;
              align-items: center;
              .small{
                //align-self: flex-end;
              }
            }
          }
          //flex-direction: column;
        }
      }
      .second{
        .right{
          flex-direction: column-reverse !important;
        }
      }
      
    }
  }
</style>
