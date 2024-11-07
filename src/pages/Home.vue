<script >

import AppNav from "../components/AppNav.vue";
export default{
  components: {

    AppNav,


  },
  data() {
    return {
      side: 0,
      slide_1: [1,2,3],
    };
  },
  methods:{
    openmenu(){
      if(this.side == 1){
        this.side = 0
        console.log(this.side)
      }else{
        this.side = 1
        console.log(this.side)
      }
      
    }
  }

}
</script>

<template>
 

    <div class="container">
      <AppNav class="nav"/>
      <div :class="side ? 'nav-mobile-on' : 'nav-mobile-off'" @click="openmenu">
        <div class="line l1"></div>
        <div class="line l2"></div> 
        <div class="line l3"></div>
      </div>
      <div :class="side ? 'mobile-on' : 'mobile-off' ">
        <ul class="flex" >
          <li> <a @click="openmenu" :class="{ black: scroll }" href="#home"> Home </a> </li>
          <li> <a @click="openmenu" :class="{ black: scroll }" href="#servizi"> Servizi </a> </li>
          <li> <a @click="openmenu" :class="{ black: scroll }" href="#pacchetti"> Pricing </a> </li>
          <li> <a @click="openmenu" :class="{ black: scroll }" href="#contatti"> Contatti </a> </li>
        </ul>
      </div>
      <div class="hero">
        <div class="center_hero">
          <img src="../../public/img/LOGO (1).png" alt="">
          <div class="text">
            <p>La prima web agency dedicata esclusivamente alla ristorazione...</p>
            <p>Non sei curioso? <br> Prova ora, È GRATIS!</p>
            <div class="btn-2">Provalo GRATIS</div>
          </div>
        </div>
        <div class="btn-1">Scopri di più</div>
        <div class="bottom_bar">
          <div class="piva"></div>
        </div>
      </div>
      <div class="section_tip">
        <h2>Diventa finalmente il <span class="c2">PADRONE</span> della tua attività</h2>
        <p>
          <span class="pack">Restaurant +</span> <br> 
          è il sistema FACILE adatto per essere usato da tutti, è COMODO perchè puoi usarlo subito ed ovunque senza scaricare app, è COMPLETO perchè comprende tutte le tue esigenze
        </p>
        <div class="grid">
          <div class="left">
            <div class="panel">
              <div class="top">
                <h5>Gestisci il tuo menu <span class="strg"> ovunque</span> e <span class="strg"> comodamente</span></h5>
                <div class="small"></div>
              </div>
              <p>Puoi creare un menu, che puoi suddividere in categorie e con foto e detttagli a portata di clic i tuoi clienti saranno attratti come non mai</p>
            </div>
            <div class="panel">
              <div class="top">
                <h5>Statistiche <span class="strg"> accurate</span> ti mostreranno come muoverti</h5>
                <div class="small"></div>
              </div>
              <p>Saprai i prodotti più ordinati ed i periodi di picco, traccerà la clientela che prenota il tavolo e l andamento dei tuoi ricavi</p>
            </div>
            <div class="panel qr">
              <div class="top">
                <h5>Genriamo per te il <span class="strg"> QR-CODE </span> per scansionare il menu e ordinare</h5>
                <div class="small"></div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="slider">
              <img v-for="s in slide" :src="s" alt="">
              <div class="points">
                <div v-for="s in slide" class="point"></div>
              </div>
            </div>
            <div class="panel">Nuove funzionalità sempre in implementazione, prendendo spunto proprio dal tuo modo di lavorare!</div>
          </div>
        </div>
      </div>
      <div class="section_tip">
        <h2>Incassa il <span class="c2">100%</span> dalla tua attività e di <span class="c2">ADDIO</span> alle <span class="c2">COMMISSIONI</span> </h2>
        <p>
          <span class="pack">Restaurant+ PRO </span> <br> 
          il nostro softwere nella sua versione piu completa ti permette raccogliere ordini e prenotazioni dal tuo sito così che non dovrai piu pagare commissioni! 
        </p>
        <div class="grid">
          <div class="right">
            <div class="slider">
              <img v-for="s in slide" :src="s" alt="">
              <div class="points">
                <div v-for="s in slide" class="point"></div>
              </div>
            </div>
            <div class="panel">
              <div class="top">
                <h5>Analizza  costantemente le tue <span class="strg">PERFORMANCE</span></h5>
                <div class="small"></div>
              </div>
              <p>Trova gli orari e in cui sei piu attivo e gestisci al meglio il tuo personale</p>
            </div>
          </div>
          <div class="left">
            <div class="panel">
              <div class="top">
                <h5>Ordini a domicilio o d’asporto <span class="strg">ILLIMITATI</span></h5>
                <div class="small"></div>
              </div>
              <div class="bottom">
                <p>Risparmia dal 20% al 40% sugli ordini online*</p>
              </div>
            </div>
            <div class="panel">
              <div class="top">
                <h5>Prenotazioni tavoli <span class="strg">ILLIMITATE</span></h5>
                <div class="small"></div>
              </div>
              <div class="bottom">
                <p>Risparmia oltre il 20% sulle prenotazioni online*</p>
              </div>            
            </div>
            <div class="panel">
              <div class="top">
                <h5>Possibilità di abilitare il pagamento <span class="strg">ONLINE</span></h5>
                <div class="small"></div>
              </div>
              <p>Annulla il rischio di ordini non ritirati e pagati*</p>
            </div>
          </div>
        </div>
      </div>

    </div>

</template>




<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
  .container{
    background-color: $c3;
    .hero{
      color: $c1;
      height: 100vh;
      width: 100%;
      background-image: url('../../public/img/herofplus.png');
      background-position: center;
      background-size: cover;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .center_hero{
        margin-bottom: 2rem;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.5rem;
        img{
          width: clamp(180px, 40vw, 280px);
          //height: auto;
          object-fit: contain;
        }
        .text{
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          p{
            font-size: $fs_sm;
            margin: 0 auto;
            max-width: 300px;

          }
        }
      }
    }
    .section_tip{
      h2{
        font-size: $fs_sm;
        font-weight: 300;
      }
      color: $c1;
    }
  }




</style>
