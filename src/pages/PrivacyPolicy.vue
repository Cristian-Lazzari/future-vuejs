  
<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,

    };
  },
  methods: {
  },
  created(){
  }
};
</script>




<template>
<div class="terms-page">
<h3 class="btn-1">Ultimo aggiornamento: 22/11/2024</h3>
  <h1>Privacy Policy di Future Plus</h1>

  <div class="terms">
    <p>
        Future Plus prende seriamente la protezione dei dati personali e si impegna a garantire la massima
        trasparenza sull'utilizzo delle informazioni raccolte tramite i propri servizi, inclusa l'integrazione con
        l'applicazione "WaBusinessManager" di seguito "l'Applicazione".
        Questa Privacy Policy descrive come raccogliamo, utilizziamo, condividiamo e proteggiamo i dati
        personali dei nostri utenti, in conformità con le normative vigenti, incluso il Regolamento Generale
        sulla Protezione dei Dati (GDPR).
    </p>
    <h3>1. Informazioni raccolte</h3>
    <p>
        L'utilizzo dell'Applicazione e dei servizi correlati comporta la raccolta dei seguenti dati:
        Dati del ristoratore (utente del gestionale):
        - Nome, indirizzo email, numero di telefono.
        - Informazioni relative agli ordini ricevuti tramite il gestionale.
        Dati dei clienti finali (che effettuano ordini presso i ristoranti):
        - Nome, numero di telefono e dettagli dell'ordine (ad esempio, prodotti ordinati e eventuali note).
    </p>
    <h3>2. Finalità del trattamento dei dati</h3>
    <p>
        I dati raccolti vengono utilizzati esclusivamente per scopi tecnici e operativi, necessari per fornire il
        servizio.
        In particolare:
        - Inviare notifiche tramite WhatsApp al ristoratore contenenti informazioni sugli ordini ricevuti.
        - Consentire al ristoratore di accettare o rifiutare un ordine direttamente tramite il messaggio
        WhatsApp.
        - Salvare e archiviare gli ordini effettuati dai clienti finali nel gestionale di Future Plus.
        I dati non saranno utilizzati per finalità promozionali o pubblicitarie.
    </p>
    <h3>3. Base legale per il trattamento</h3>
    <p>
        Trattiamo i dati personali solo quando:
        - È necessario per l'esecuzione del contratto con il ristoratore (ad esempio, per gestire gli ordini
        ricevuti).
        - È richiesto per adempiere a obblighi legali.
        - È basato sul consenso esplicito dei clienti finali, se applicabile.
    </p>
    <h3>4. Conservazione dei dati</h3>
    <p>
        Conserviamo i dati personali per il tempo strettamente necessario a:
        - Garantire la fornitura del servizio (gestione ordini e notifiche).
        - Soddisfare eventuali obblighi legali o contabili.
        I dati dei clienti finali vengono archiviati nel gestionale del ristoratore e rimangono disponibili fino alla
        chiusura del loro account o su richiesta di cancellazione.
    </p>
    <h3>5. Condivisione dei dati</h3>
    <p>
        Non condividiamo i dati con terze parti, salvo nei seguenti casi:
        - I dati degli ordini sono trasmessi a WhatsApp Business Platform (di proprietà di Meta Platforms
        Inc.) per consentire l'invio delle notifiche al ristoratore.
        - Per ottemperare a obblighi legali o richieste delle autorità competenti.
    </p>
    
    <h3>6. Diritti degli interessati</h3>
    <p>
        I ristoratori e i clienti finali hanno il diritto di:
        - Accedere ai propri dati personali.
        - Richiedere la rettifica o la cancellazione dei dati.
        - Opporsi al trattamento dei dati, ove applicabile.
        - Trasferire i propri dati ad altro titolare del trattamento (diritto alla portabilità).
        Per esercitare questi diritti, è possibile contattarci all'indirizzo email:
        futureplus.commerciale@gmail.com.
    </p>

    <h3>7. Sicurezza dei dati</h3>
    <p>
        Future Plus adotta misure tecniche e organizzative per proteggere i dati personali da accessi non
        autorizzati, perdita o alterazione. Utilizziamo protocolli di sicurezza standard, tra cui crittografia
        (HTTPS), e protezioni contro attacchi informatici.
    </p>

    <h3>8. Utilizzo dei servizi di Meta</h3>
    <p>
        L'Applicazione utilizza le API di WhatsApp Business Platform per l'invio di notifiche agli utenti. I dati
        trasmessi a Meta Platforms Inc. sono gestiti in conformità con le Norme sulla privacy di Meta:
        https://www.facebook.com/privacy/policy/
    </p>

    <h3>9. Aggiornamenti alla Privacy Policy</h3>
    <p>
        Ci riserviamo il diritto di aggiornare questa Privacy Policy per adeguarla a eventuali modifiche
        normative o evoluzioni dei nostri servizi. Gli aggiornamenti saranno pubblicati sul nostro sito web e
        notificati agli utenti.
    </p>


    <h3>10. Contatti</h3>
    <p>
        Per domande o chiarimenti su questa Privacy Policy, contattaci:
    - Email: futureplus.commerciale@gmail.com
    - Sito web: https://future-plus.it
    </p>
    <p>
      Accettando i presenti Termini e Condizioni, autorizzi Future Plus ad addebitare l'importo al termine del periodo di prova.
    </p>
  </div>

  <!-- Checkbox per accettare i termini -->

</div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.terms-page {
  height: 100svh;
  overflow: auto;
  background-color: var(--c3);
  padding: 3rem 1rem 10svh;
  // @include dfc;
  // flex-direction: column;
  font-size: $fs_sm;
  position: relative;
  h1{
    color: var(--c1);
    padding: .5rem;
    font-size: $fs_xxlg;
  }
  .terms {
    
    background-color: var(--c1_op);
    border-radius: $b_r_md;
    padding: 2rem 1.6rem;
    margin: 2rem .4rem;
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
  color: var(--c1);
  .cond{
    color: var(--c1);
    @include dfc;
    gap: 1rem;
  }
}
.btn-3 {
  background-color: var(--c1_op);
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
  text-align: center;
  padding: 2rem;
  color: rgb(105, 25, 25);
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.447);
}
.back{
  @include dfc;
  gap: 10px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  background-color: $c4_op;
  color: var(--c1_op);
  font-size: $fs_xsm;
  text-decoration: none;
  border-radius: 50px;
  padding: .5em 1.2em;
  box-shadow: 0 0 4px rgba(4, 4, 69, 0.27);

}
</style>
