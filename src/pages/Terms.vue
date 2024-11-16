  
  <script>
  import { store } from "../store.js";
  export default {
    data() {
      return {
        store,
        accepted: false, // Stato della checkbox
        error: false, // Stato della checkbox
      };
    },
    methods: {
      proceedToCheckout() {
        this.error = false
        if (this.accepted) {
          // Reindirizza alla pagina Stripe
          window.location.href = this.store.pUrl[this.store.package][this.store.typepay];
        } else {
          this.error = true
        }
      },
    },
    mounted(){
      this.store.package = localStorage.getItem('pack');
      this.store.typepay = localStorage.getItem('typepay');
    }
  };
  </script>




<template>
  <div class="terms-page">
    <h1>Termini e Condizioni di Future Plus</h1>
    <div class="terms">
      <!-- Inserisci i tuoi termini e condizioni -->
      <h2>Benvenuti in Future Plus!</h2>
      <p>
         Il nostro servizio consente la creazione di siti personalizzati per la ristorazione, 
        con funzionalità come gestione menu, ordini online e prenotazioni.
      </p>
      <h3>1. Periodo di prova gratuita:</h3>
      <p>
         Offriamo un periodo di prova gratuita di 30 giorni senza costi. Al termine, 
        l'abbonamento si rinnova automaticamente al costo di € {{store.price[store.package - 1][store.typepay]}}<span>,90</span> {{ store.typepay == 0 ? 'al mese' : 'all\' anno' }}.
      </p>
      <h3> 2. Annullamento:</h3>
      <p>
        Puoi disdire il tuo abbonamento in qualsiasi momento durante il periodo di prova senza alcun addebito.
      </p>
      <h3>3. Responsabilità:</h3>
      <p>
         Future Plus non è responsabile per perdite o danni causati dall'uso improprio del servizio.
      </p>
      <h3>4. Pagamenti:</h3>
      <p>
         I dati della carta di credito vengono gestiti tramite Stripe, che garantisce la sicurezza delle transazioni.
      </p>
      <p>
        Accettando i presenti Termini e Condizioni, autorizzi Future Plus ad addebitare l'importo al termine del periodo di prova.
      </p>
    </div>
    <p v-if="error" class="error">
        Devi accettare i Termini e Condizioni prima di procedere.
    </p>
    <!-- Checkbox per accettare i termini -->
    <div class="actions">
      <div class="cond">
        <label class="ui-check">
          <input v-model="accepted" type="checkbox">
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
          </svg>
        </label>
        <p>
          Accetto i Termini e Condizioni
        </p>
      </div>
      
      <button class="btn-3" :class="{ dis: !accepted}" @click="proceedToCheckout">
        Procedi al Checkout
      </button>
    </div>
    <router-link :to="{ name: 'home' }" class="back btn-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
      </svg> Torna alla Home
    </router-link>
  </div>
</template>

  
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

  .terms-page {
    height: 100svh;
    overflow: auto;
    background-color: $c1;
    padding: 3rem 1rem 10svh;
    // @include dfc;
    // flex-direction: column;
    gap: 3rem;
    font-size: $fs_sm;
    position: relative;
    .terms {
      
      background-color: $c3_op;
      border-radius: $b_r_md;
      padding: 2rem 1.6rem;
      h3, h2{
        margin: 2rem 0 1rem;
      }
      p{
        font-weight: 200
      }
    }
  }
  .actions {
    @include dfc;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .cond{
      @include dfc;
      gap: 1rem;
    }
  }
  .btn-3 {
    border: none;
    cursor: pointer;
    margin: 1rem;
    transition: all .4s ease-in;
  }
  .btn-3.dis {
    transition: all .4s ease-in;
    cursor: not-allowed;
    opacity: .3;
  }
  .error{
    padding: 2rem;
    color: rgb(105, 25, 25);
    text-shadow: 0 0 20px rgba(255, 0, 0, 0.447);
  }
  .back{
    @include dfc;
    gap: 10px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: $c4_op;
    color: $c1_op;
    font-size: $fs_xsm;
    text-decoration: none;
    border-radius: 50px;
    padding: .5em 1.2em;
    box-shadow: 0 0 4px rgba(4, 4, 69, 0.27);

  }
  </style>
  