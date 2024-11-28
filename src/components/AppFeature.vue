<script>
import { store } from "../store.js";
export default {
  props: {
  },
  data() {
    return {
      store,
      slide_c : 0,
      slide_1_c : 0,
      slide: [store.domain + 'img/v1.webm', store.domain + 'img/v2.webm' ,store.domain + 'img/v3.webm'],
      slide_1: [store.domain + 'img/v7.webm', store.domain + 'img/v4.webm' ,store.domain + 'img/v5.webm', store.domain + 'img/v6.webm'],
    };
  },
  methods:{


    playAndStopVideo(old, ref, new_ ){
      let videoOff = this.$refs[ref][old];
      let video = this.$refs[ref][new_];
      if(videoOff){
        videoOff.currentTime = 0; // Riavvia il video
        videoOff.pause(); // Fai partire il video
      }
      if(video){
        video.currentTime = 0; // Riavvia il video
        video.play(); // Fai partire il video
      }
    },
    nexts(set, i){ // come parametro inserire il set di video
      if(i !== 'none'){
        if(set == 1){
          this.playAndStopVideo(this.slide_c, 'video', i )
          this.slide_c = i
        }else{
          this.playAndStopVideo(this.slide_1_c, 'videoa', i )
          this.slide_1_c = i
        }
        return
      }

      if (this.slide.length > (this.slide_c + 1) && set == 1 ) {
        this.playAndStopVideo(this.slide_c, 'video', (this.slide_c + 1) )
        this.slide_c ++
      }else if(set == 1){
        this.playAndStopVideo(set, 'video', 0 )
        this.slide_c = 0
      }
      if (this.slide_1.length > (this.slide_1_c + 1)&& set == 2) {
        this.playAndStopVideo(this.slide_1_c, 'videoa', (this.slide_1_c + 1) )
        this.slide_1_c ++
      }else if(set == 2){
        this.playAndStopVideo(set, 'videoa', 0 )
        this.slide_1_c = 0
      }
      
    }
  },
  mounted(){

  },
  created(){
    //this.slide_infinite() 
  }
};
</script>

<template>

  <div class="container">
    <div class="section_tip first">
      <h2 id="feature" >Diventa finalmente il <span class="c2">PADRONE</span> della tua attività</h2>
      <p class="text">
        <span class="pack">Restaurant +</span> <br> 
        è il sistema <span class="strg">FACILE</span> adatto per essere usato da tutti, è <span class="strg">COMODO</span> perchè puoi usarlo subito ed ovunque senza scaricare app, è <span class="strg">COMPLETO</span> perchè comprende tutte le tue esigenze
      </p>
      <div class="grid">
        <div class="left">
          <div @click="nexts(1, 0)" class="panel">
            <div :class="slide_c == 0 ? 'up top' : 'top'" >
              <h5>Gestisci il tuo menu <span class="strg"> ovunque</span> e con <span class="strg"> comodità</span></h5>
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
          <div @click="nexts(1, 1)" class="panel">
            <div :class="slide_c == 1 ? 'up top' : 'top'">
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
          <div @click="nexts(1, 2)" class="panel qr">
            <div :class="slide_c == 2 ? 'up top' : 'top'">
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
            <div v-for="(s, i) in slide" :key="s" :class="slide_c == i ? 'wrap-v on' : 'wrap-v off'">
                <video
                :src="s"
                playsinline
                v-show="slide_c == i"
                ref="video"
                autoplay
                :class="slide_c == i ? 'on' : 'off'"
                muted
                @ended="nexts(1,'none')"
              ></video>
            </div>
            
            <div class="points">
              <div v-for="(s, i) in slide" @click="nexts(1, i)" :class="slide_c == i ? 'on point' : 'point'" :key="s"></div>
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
            <div v-for="(s, i) in slide_1" :key="s" :class="slide_1_c == i ? 'wrap-v on' : 'wrap-v off'">
                <video
                :src="s"
                playsinline
                v-show="slide_1_c == i"
                ref="videoa"  
                autoplay
                :class="slide_1_c == i ? 'on' : 'off'"
                muted
                @ended="nexts(2,'none')"
              ></video>
            </div>
            <div class="points">
              <div v-for="(s, i) in slide_1" @click="nexts(2, i)" :class="slide_1_c == i ? 'on point' : 'point'" :key="s"></div>
            </div>
          </div>
          <div @click="nexts(2, 0)" class="panel">
            <div :class="slide_1_c == 0 ? 'up top' : 'top'">
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
          <div @click="nexts(2, 1)" class="panel">
            <div :class="slide_1_c == 1 ? 'up top' : 'top'">
              <h5>Ordini a domicilio o d’asporto <span class="strg">ILLIMITATI</span></h5>
              <div class="small">
                <svg id="mail" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                  <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9z"/>
                  <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4M8 7a4 4 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8zm-3.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157"/>
                </svg>
                <svg id="box" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-inboxes" viewBox="0 0 16 16">
                  <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0z"/>
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
          <div @click="nexts(2, 2)" class="panel">
            <div :class="slide_1_c == 2 ? 'up top' : 'top'">
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
          <div @click="nexts(2, 3)" class="panel">
            <div :class="slide_1_c == 3 ? 'up top' : 'top'">
              <h5>Possibilità di abilitare il pagamento <span class="strg">ONLINE</span></h5>
              <div class="small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                  <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z"/>
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
    background-color: var(--c3);
    .slider{
      text-align: center;
      flex-grow: 1;
      position: relative;
      //background-color: rgba(0, 255, 8, 0.499);
      width: clamp(220px, 65vw, 500px);

      .wrap-v{
        position: relative;
        min-height: 600px;
        width: 100%;
        margin: 0 auto;
        transition: opacity .5s ease-in-out;
        margin-bottom: 1rem;

        video{
          background: transparent;
          pointer-events: none; /* Disabilita il clic o il tocco */
          user-select: none;    /* Impedisce la selezione del video */
          //box-shadow: 0 10px 30px -10px $c4;
          border-radius: $b_r_sm;
          max-height: 600px;
          //width: 100%;
          position: relative;
          z-index: 2;
          
        }
      }
      .on{
        z-index: 3;
        opacity: 1;
        transition: position 0 ease-in-out 0, opacity 3.5s ease-in .5s;
      }
      .off{
        position: absolute;
        top: 0;
        z-index: 0;
        opacity: 0;
        // width: 0;
        // height: 0;
        transition: position 0 ease-in-out 0, opacity 3.5s ease-in .5s;
      }
      .points{
        
        @include dfc;
        gap: .5rem;
        height: 22px;
        .point{
          position: relative;
          z-index: 20;
          height: 10px;
          width: 10px;
          background-color: var(--c1_op);
          border-radius: 20px;
          transition: all .3s ease-in-out;
        }
        .point:hover{
          transform: scale(110%);
          background-color: var(--c1);
          transition: all .3s ease-in-out;

        }
        .on{
          transition: all .3s ease-in-out;
          transform: scale(210%);
          margin-inline: 20px;
          background-color: var(--c1);
        }
      }
    }
    @media (max-width: $bp_md) {
      .slider{
        width: 100% !important;
      }
    }
    
    .panel, .small{
      background-color: var(--c1_op);
    }

    .up{
      .small{
        scale: 1.01;
        box-shadow: -7px 7px var(--c3) !important;
        transition: all .2s ease-in;
        background-color: var(--c1);
        transform: translate( 5px, -5px);
        svg{
          color: var(--c3);
          transition: all .2s ease-in;
          filter: drop-shadow(0 0 3px var(--c3));
          text-shadow: 0 0 10px var(--c3) !important;
        }
      }
      h5{
        text-shadow: 0 0 5px var(--c3_op) !important;
        color: var(--c3);
        transition: all .2s ease-in;
        //font-size: $fs_mdl !important;
      }
      transition: all .2s ease-in;
    }
  
    .section_tip{
      @include mmw;
      color: var(--c1);
      
      p{
        font-weight: 300;
      }
      h2{
        font-size: $fs_xxlg;
        font-weight: 600;
      }
      $gap:1.9rem;
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
          box-shadow: -3px 3px var(--c1) ;   
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
            height: $w_svg;
            width: $w_svg;
          }
          #mail{
            $w_svg : 37px;
            height: $w_svg;
            width: $w_svg;
          }
        }
        
        .right{
          align-items: center;
          .panel{
            // width: 90%;
            // margin: 0 auto;
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
          gap: 1rem;
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
        padding: 0 !important;
      }
      .panel{
        width: 95%;
        margin: 0 auto;
      }
      .slider{
        background-color: black;
        padding: 1rem 0;
        gap: .2rem !important;
      }

      video{
        max-height: none !important;
        height: auto !important;
        width: 100%;
        
      }
    }
    @media (max-width: $bp_lg) {
      .section_tip{
        .grid{
          flex-wrap: wrap;
          .top{
            width: 100%;
            justify-content: space-between !important;
            flex-wrap: wrap;
            align-items: flex-start !important;
          }
          .small{
            //flex-direction: column !important;
            //flex-wrap: wrap;
            margin: 0 auto;
            svg{
              $w_svg : 22px;
              height: $w_svg !important;
              width: $w_svg !important;
            }
          }
          .qr{
            .small{
              svg{
                $w_svg : 100%;
                height: $w_svg !important;
                width: $w_svg !important;
              }
            }
          }
          .left,.right{
            flex-grow: 1;
            .top{
              //flex-direction: column;
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
