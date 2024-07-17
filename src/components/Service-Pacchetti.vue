<script>
import { store } from '../store';

export default {
  components: {},
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="section-a">
    <div class="wave-2"></div>
    <h1 id="servizi" class="top-title">Scopri i nostri servizi</h1>

    <div class="f-cont">
      <div class="feature ft-1">
        <section>
          <div class="text">
            <h2>Presenza Online</h2>
            <p>
              Configureremo la tua presenza online da 0, garantendoti una
              Web-App peronalizzata, fluida, veloce e compatibile con tutti i
              dispositivi. Inoltre ci occuperemo noi della gestione e
              dell'approvigionamento dei servi terzi necessari per ogni sito web
              (dominio, hosting...)
            </p>
            <div class="line"></div>
          </div>
          <img src="../assets/img/iph.png" alt="" />
        </section>
      </div>
      <div class="feature ft-2">
        <section>
          <div class="text">
            <h2>Pannello di controllo</h2>
            <p>
              Oltre a garantirti una presenza online impeccabile configureremo
              per te una Dashboard con accesso privato in cui potrai monitorare
              e gestire i dati della tua pagina e scegliere le tue disponibilità
              per impostare il sistema di prenotazione automatico
            </p>
            <div class="line"></div>
          </div>
          <img src="../assets/img/test.png" alt="" />
        </section>
      </div>
      <div class="feature ft-3">
        <section>
          <div class="text">
            <h2>Prenotazione servizi online</h2>
            <p>
              Potrai permettere ai tuoi clienti di prenotare un tuo servizio
              direttamente dal sito web ricevendo istantaneamente la
              prenotazione sul tuo pannello di amministrazione
            </p>
            <div class="line"></div>
          </div>
          <img src="../assets/img/f1.png" alt="" />
        </section>
      </div>
      <div class="feature ft-4">
        <section>
          <div class="text">
            <h2>Prenotazione prodotti online</h2>
            <p>
              Se ad esempio la tua attività è un locale o un ristorante, potrai
              permettere ai tuoi clienti di prenotare un "carrello" di prodotti
              personalizzabili (togliendo/aggiungiendo ingredeinti se
              possibile), per offrire un servizio di asporto o di consegna a
              domicilio, con eventuale pagamento alla consegna/ritiro
            </p>
            <div class="line"></div>
          </div>
          <img src="../assets/img/f2.png" alt="" />
        </section>
      </div>
      <div class="feature ft-5">
        <section>
          <div class="text">
            <h2>Creazione di Post</h2>
            <p>
              Nella tua Web-App non può mancare una sezione dove postare novità,
              promozioni, chiusure o qualsiasi altra notiza tu voglia dare ai
              tuoi clienti riguardo alla tua attività
            </p>
            <div class="line"></div>
          </div>
          <img src="../assets/img/f3.png" alt="" />
        </section>
      </div>
      <div class="feature ft-6">
        <section>
          <div class="text">
            <h2>Qr-code</h2>
            <p>
              Creeremo per il tuo locale un qr-code che possa raggiungiere il
              tuo sito e uno che puntera direttamente al tuo menu cosi che potrai
              sostituire i tuoi vecchi menu cartacei con dei nuovi menu digitali piu comodi e semplici da gestire
            </p>
            <div class="line"></div>
          </div>
          <span class="material-symbols-outlined qr">
          qr_code_2_add
          </span>
        </section>
      </div>
      <div class="feature ft-7">
        <section>
          <div class="text">
            <h2>E tu cosa aspetti?</h2>
            <a class="bt" href="#contatti">CONTATTACI</a>
            <!-- <div class="line"></div> -->
          </div>
          <div class="link">

            <a href="#pacchetti" class="pack">SCOPRI I PACCHETTI</a>
            <a href="#home" class="home">Torna alla Home</a>
          </div>
        </section>
      </div>
    </div>

    <div id="pacchetti" class="p-container">
      <h2>Ecco i nostri Pacchetti</h2>
      <div class="promo">
        Non perderti l'occasione di accedere al nostro servizio con i prezzi di lancio
        <p class="promo">La promo di lancio termina tra poco affrettati!</p>
      </div>
      <p>Scegli come pagare</p>
      <div class="radio-inputs">
        <label class="radio">
          <input type="radio" name="radio" checked="" @click="store.typepay = 1" />
          <span class="name">Annuale</span>
        </label>
        <label class="radio">
          <input type="radio" name="radio" @click="store.typepay = 0" />
          <span class="name">Mensile</span>
        </label>
      </div>
      <div class="p-cont">
        <div id="sta" class="parent">
          <div class="card">
            <div class="logo">
              <span class="circle circle2"></span>
              <span class="circle circle3"></span>
              <span class="circle circle4">FUTURE +</span>
            </div>
            <div class="glass"></div>
            <div class="content">
              <div class="name">START</div>
              <div class="feat">
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Presenza
                  Online
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Pannello
                  Amministatore
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>QR Code
                </div>
              </div>
            </div>
            <div class="bottom price">
              <div class="mese">
                <span v-if="store.typepay">€33,<span style="font-size: 50%;">25</span></span>
                <span v-else>€49</span>
                <h4>al mese</h4>
              </div>

              <div class="anno">
                <span> totale annuo</span>
                <span v-if="store.typepay"> €399</span>
                <span v-else> €588</span>

                <!-- <div class="from"></div> -->
              </div>
              <router-link :to="{ name: 'ConsumersRegistration' }" class="shop-btn" @click="store.package = 1" >Avvia la prova gratuita</router-link>

            </div>
          </div>
        </div>
        <div id="med" class="parent med">
          <div class="card">
            <div class="logo">
              <span class="circle circle2"></span>
              <span class="circle circle3"></span>
              <span class="circle circle4">FUTURE +</span>
            </div>
            <div class="glass"></div>
            <div class="content">
              <div class="name">
                MEDIUM <br />
                SERVICE
              </div>
              <div class="feat">
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Presenza
                  Online
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Pannello
                  Amministatore
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>QR Code
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Creazione
                  Post
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span
                  >Prenotazione SERVIZI Online
                </div>
              </div>
            </div>
            <div class="bottom price">
              <div class="mese">
                <span v-if="store.typepay">€66,<span style="font-size: 50%;">58</span></span>
                <span v-else>€89</span>
                <h4>al mese</h4>
              </div>

              <div class="anno">
                <span> totale annuo</span>
                <span v-if="store.typepay"> €799</span>
                <span v-else> €1068</span>
              </div>
              <router-link :to="{ name: 'ConsumersRegistration' }" class="shop-btn" @click="store.package = 2" >Avvia la prova gratuita</router-link>
            </div>
          </div>
        </div>
        <div id="med" class="parent med">
          <div class="card">
            <div class="logo">
              <span class="circle circle2"></span>
              <span class="circle circle3"></span>
              <span class="circle circle4">FUTURE +</span>
            </div>
            <div class="glass"></div>
            <div class="content">
              <div class="name">
                MEDIUM <br />
                PRODUCT
              </div>
              <div class="feat">
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Presenza
                  Online
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Pannello
                  Amministatore
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>QR Code
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Creazione
                  Post
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span
                  >Prenotazione PRODOTTI Online
                </div>
              </div>
            </div>
            <div class="bottom price">
              <div class="mese">
                <span v-if="store.typepay">€74,<span style="font-size: 50%;">91</span></span>
                <span v-else>€99</span>
                <h4>al mese</h4>
              </div>

              <div class="anno">
                <span> totale annuo</span>
                <span v-if="store.typepay"> €899</span>
                <span v-else> €1188</span>
              </div>
              <router-link :to="{ name: 'ConsumersRegistration' }" class="shop-btn" @click="store.package = 3" >Avvia la prova gratuita</router-link>
            </div>
          </div>
        </div>
        <div id="pro" class="parent pro">
          <div class="card">
            <div class="logo">
              <span class="circle circle2"></span>
              <span class="circle circle3"></span>
              <span class="circle circle4">FUTURE +</span>
            </div>
            <div class="glass"></div>
            <div class="content">
              <div class="name">PREMIUM</div>
              <div class="feat">
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Presenza
                  Online
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Pannello
                  Amministatore
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>QR Code
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span>Creazione
                  Post
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span
                  >Prenotazione SERVIZI Online
                </div>
                <div class="line">
                  <span class="material-symbols-outlined"> done </span
                  >Prenotazione PRODOTTI Online
                </div>
              </div>
            </div>
            <div class="bottom price">
              <div class="mese">
                <span v-if="store.typepay">€99,<span style="font-size: 50%;">91</span></span>
                <span v-else>€129</span>
                <h4>al mese</h4>
              </div>

              <div class="anno">
                <span> totale annuo</span>
                <span v-if="store.typepay"> €1199</span>
                <span v-else> €1548</span>
              </div>
              <router-link :to="{ name: 'ConsumersRegistration' }" class="shop-btn" @click="store.package = 4" >Avvia la prova gratuita</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;

.section-a {
  background: linear-gradient(23deg, #041740, #6c32ad, #041740);
  padding: 0rem 0 25% 0;
  font-family: "Roboto Condensed", sans-serif;
  .wave-2 {
    background-image: url("../assets/img/wave-3.svg");
    position: relative;
    z-index: 200;
  }

  h1 {
    font-size: $d-title2-max;
    color: $c-f-az-op;
    margin: -15% 0 10%;
    text-align: center;
    text-shadow: 0px 0px 18px rgba(194, 247, 255, 0.195);
    text-transform: uppercase;
  }
  .f-cont {
    display: flex;
    flex-direction: column;
    //background-color: #2d0c5335;
    border-radius: 20px;
    gap: 20vh ;
    
    .ft-2,
    .ft-4,
    .ft-6 {
      section {
        background: linear-gradient(23deg, #0742e44e, #7c1cc6b9) !important;
      }
      justify-content: flex-end;
    }
    .ft-6{
      .qr{
        font-size: clamp(150px, 30vw, 300px);
      }
    }
    .ft-3 {
      .line {
        height: 55% !important;
      }
    }
    .ft-7 {
      
      position: relative ;
      section {
        width: 100% !important;
        justify-content: center !important;
        flex-direction: column;
        .text {
          max-width: 100% !important;
          text-align: center;
          gap: 3rem !important;
          h2 {
            font-size: 2.4em;
            font-weight: bold;
          }
        }
      }
      .link{
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
      .pack, .home{
        color: white;
      }
      .home{
        font-size: clamp(14px, 2.3vw, 16px);
        
      }
      .pack{   
        font-size: clamp(14px, 2.3vw, 19px);
        
      }
      .bt {
        color: rgba(108, 9, 201, 0.856);
        background-color: white;
        font-family: "Kanit", sans-serif;
        font-weight: bolder;
        text-align: center;
        text-decoration: none;
        padding: 0.4rem 3.5rem;
        border: 3px solid white;
        border-radius: 8px;
        align-self: center;
        box-shadow: 0px 10px 50px rgba(51, 6, 99, 0.99);
        text-shadow: 0px 0px 10px rgba(115, 5, 206, 0.294);
        animation: contpulse 5s ease-in infinite;
        
      }
      @keyframes contpulse {
        0%{
          transform: scale(1);
          text-shadow: 0px 0px 20px rgba(246, 245, 245, 0.725);
        }
        25%{
          transform: scale(1.03);
          text-shadow: 0px 0px 20px rgba(246, 245, 245, 0.494);
          
        }
        50%{
          transform: scale(1);
          text-shadow: 0px 0px 20px rgba(228, 155, 247, 0.339);
          
        }
        75%{
          transform: scale(1.07);
          text-shadow: 0px 0px 30px rgba(224, 237, 255, 0.841);
          
        }
        100%{
          transform: scale(1.0);
          text-shadow: 0px 0px 20px rgba(247, 237, 247, 0.725);

        }
      }
    }
    .feature {
      width: 100%;
      scroll-snap-align: start;

      @include dfa;

      section {
        width: 91%;
        background: linear-gradient(23deg, #6f0ebab7, #0742e44f);
        @include dfc;
        padding: 5% 5%;
        gap: 30px;
        justify-content: space-between;
        box-shadow: 10px 10px 50px rgba(31, 2, 47, 0.585);
        .text {
          position: relative;
          @include dfj;
          flex-direction: column;
          gap: 2rem;
          font-size: clamp(18px, 4vw, 27px);
          max-width: 25vw;
          text-shadow: 0 0 18px rgba(255, 255, 255, 0.169);
          h2 {
            font-family: "Kanit", sans-serif;
            font-weight: 400;
            font-style: normal;
            line-height: 100%;
          }
          p {
            max-width: 23vw;

            font-family: "Kodchasan", sans-serif;
            font-weight: 400;
            font-style: normal;

            font-size: clamp(15px, 2.3vw, 20px);
            margin: 0 0 0 8%;
            opacity: 0.7;
          }
        }
        .line {
          position: absolute;
          left: 0%;
          bottom: 0;
          height: 67%;
          width: 4px;
          background-color: white;
        }
        img {
          width: 50%;
          filter: drop-shadow(10px 0px 18px rgba(0, 0, 0, 0.617));
        }
      }
    }
    .ft-1 {
      section {
        position: relative;
        img {
          width: 40%;
          max-width: 380px !important;
          position: absolute;
          bottom: 0;
          right: 10%;
        }
      }
    }
    .ft-2 {
      img {
        width: 40%;
        max-width: 500px;
      }
    }
  }
}
@media (max-width: 800px) {
  .f-cont {
    .feature {
      section {
        flex-direction: column !important;
        width: 100% !important;
        img {
          width: 90% !important;
        }
        .text {
          max-width: 95% !important;
          p {
            max-width: 100% !important;
          }
        }
      }
    }
    .ft-1 {
      img {
        position: relative !important;
        right: 0 !important;
        width: 100% !important;
      }
    }
  }
}

.wave-3 {
  background-image: url("../assets/img/wave-3.svg");
}

.p-container {
  padding: 0 1rem;

  margin: 100px auto;
  height: 100%;
  h2 {
    font-size: $d-title1-max;
    color: $c-f-az-op;
    margin: 4rem 0 4rem 0;
    text-align: center;
    text-shadow: 2px 2px 15px rgba(45, 46, 46, 0.79);
    text-transform: uppercase;
  }
  .promo {
    text-align: center;
    font-size: 2rem;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.316);
    margin-bottom: 4rem;
  }
  p {
    text-align: center;
  }
  .radio-inputs {
    margin: 2rem auto 4rem;
  }
  .p-cont {
    @include dfc;
    gap: 2.5rem;
    flex-wrap: wrap;
  }
}

.name {
  font-size: 3rem;
  font-weight: bolder;
  text-shadow: 2px 2px 15px rgba(58, 61, 90, 0.9);
  margin-left: 10px;
}
.feat {
  text-shadow: 2px 1px 10px rgba(58, 61, 90, 0.9);
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1rem;
  .line {
    display: flex;
    gap: 0.3rem;
    font-weight: bold;
    text-transform: capitalize;
  }
}
.price {
  text-shadow: 2px 2px 15px rgba(58, 61, 90, 0.9);
  font-size: 1.1rem;

  .mese {
    font-weight: 600;
    font-size: 3rem;
    text-shadow: 0 0 4px rgba(179, 175, 232, 0.849);
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: flex-end;
    h4 {
      line-height: 250%;
      font-size: 1rem;
    }
  }
  .anno {
    font-weight: bold;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    position: relative;
    margin-bottom: 1rem;
    .from {
      font-size: 1.6rem;
      text-decoration: line-through;
      font-weight: normal;
      position: absolute;
      left: 90px;
      // bottom: 94px;
      top: -17px;
    }
  }
}

.med {
  // height: 570px !important;
  .card {
    background: linear-gradient(
      135deg,
      rgb(28, 52, 237) 0%,
      rgb(71, 53, 136) 100%
    );
  }
  .circle2,
  .circle3 {
    background-color: #3469da4f !important;
  }
}
.pro {
  // height: 620px !important;
  .card {
    background: linear-gradient(
      135deg,
      rgb(171, 34, 216) 0%,
      rgb(48, 0, 220) 100%
    );
  }
  .circle2,
  .circle3 {
    background-color: #7320c553 !important;
  }
}

.parent {
  width: 290px;
  // height: 520px;
  perspective: 1000px;
}

.card {
  // height: 100%;
  padding: 6rem 1rem 1rem 1rem;
  border-radius: 50px;
  background: linear-gradient(
    135deg,
    rgb(29, 217, 237) 0%,
    rgb(13, 59, 102) 100%
  );
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px,
    rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
}

.glass {
  transform-style: preserve-3d;
  position: absolute;
  inset: 8px;
  border-radius: 55px;
  border-top-right-radius: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.349) 0%,
    rgba(255, 255, 255, 0.815) 100%
  );
  transform: translate3d(0px, 0px, 25px);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.3s ease-in-out;
}

.content {
  // padding: 100px 60px 0px 30px;
  transform: translate3d(0, 0, 26px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.bottom {
  padding: 10px 12px;
  transform-style: preserve-3d;
  // position: absolute;
  // bottom: 20px;
  // left: 20px;
  // right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6em;
  justify-content: space-between;
  transform: translate3d(0, 0, 26px);
  position: relative;
  .shop-btn{
    width: 70%;
    align-self: center;

  }
}

.logo {
  position: absolute;
  right: 0;
  top: 0;
  transform-style: preserve-3d;
}

.logo .circle {
  display: block;
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 0;
  right: 0;
  box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(0, 249, 203, 0.2);
  transition: all 0.2s ease-in-out;
}

.logo .circle2 {
  width: 140px;
  transform: translate3d(0, 0, 40px);
  top: 10px;
  right: 10px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  transition-delay: 0.3s;
}

.logo .circle3 {
  width: 110px;
  transform: translate3d(0, 0, 60px);
  top: 17px;
  right: 17px;
  transition-delay: 0.4s;
}

.logo .circle4 {
  width: 80px;
  transform: translate3d(0, 0, 80px);
  top: 23px;
  right: 23px;
  transition-delay: 0.5s;
  font-family: "Bukhari Script", sans-serif;
  @include dfc;
}

.logo .circle5 {
  width: 50px;
  transform: translate3d(0, 0, 100px);
  top: 30px;
  right: 30px;
  display: grid;
  place-content: center;
  transition-delay: 1.6s;
}

.logo .circle5 .svg {
  width: 20px;
  fill: white;
}

.parent:hover .card {
  transform: rotate3d(1, 1, 0, 30deg);
  box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
    rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
}

.parent:hover .card .logo .circle2 {
  transform: translate3d(0, 0, 60px);
}

.parent:hover .card .logo .circle3 {
  transform: translate3d(0, 0, 80px);
}

.parent:hover .card .logo .circle4 {
  transform: translate3d(0, 0, 100px);
}

.parent:hover .card .logo .circle5 {
  transform: translate3d(0, 0, 120px);
}
.radio-inputs {
  font-family: "Courier New", Courier, monospace;
  user-select: none;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #acb3e3;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 220px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  font-size: 18px !important;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: rgba(51, 65, 85, 0.48);
  transition: all 0.15s ease-in-out;
  margin: 0 !important;
}

.radio-inputs .radio input:checked + .name {
  color: rgba(51, 65, 85, 1);
  background-color: #fff;
  font-weight: 600;
}
@media (max-width: 670px) {
  .wave-2 {
    box-shadow: -50px -150px 5px $c-bg-1, 10px -150px 5px $c-bg-1;
  }
  .p-container {
    h2 {
      font-size: $d-title1-min;
    }
  }

  .parent:hover .card {
    transform: rotate3d(0, 0, 0, 0deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
      rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 40px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 100px);
  }

  .line {
    white-space: wrap !important;
  }
}
@media (max-width: 490px) {
  .wave-2 {
    box-shadow: -50px -100px 5px $c-bg-1, 10px -100px 5px $c-bg-1;
  }
  .feature {
    width: 100% !important;
  }
  .bg-sef {
    width: 100% !important;
  }

  .p-container {
    h2 {
      font-size: $d-title2-min;
    }
  }
  .container {
    .top-title {
      font-size: $d-title1-min !important;
      letter-spacing: 2px;
    }
  }
}
</style>
