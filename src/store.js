import { reactive } from "vue";

export const store = reactive({
  //baseUrl: "http://127.0.0.1:8000/",
  baseUrl: "https://dashboard.future-plus.it/",
  domain: "https://future-plus.it/",
  //domain: "http://localhost:5173/",
  nav_menu: 0,
  package : 0,
  typepay: 1,
  pUrl:[
    [
      'https://buy.stripe.com/00g8A40U933i4Zq3co',
      'https://buy.stripe.com/28o6rWcCR7jyeA028m',
      'https://buy.stripe.com/28o4jO32h0VaajK14k',
    ],
    [
      'https://buy.stripe.com/6oE3fK9qF0Va0Ja3cn',
      'https://buy.stripe.com/3cs4jO5ap33i1Ne6oB',
      'https://buy.stripe.com/7sIbMgfP3avKgI89AP',
    ],
  ],
  price : [
    [
      ['49' , '598'],//.8
      ['33' , '399'] //.32
    ],
    [
      ['99' , '1198'], //.8
      ['83' , '999'] //.32
    ],
    [
      ['129' , '1558'],
      ['99' , '1199'] //.99
    ],
  ],

  feats_1: [ 
    {s: 1, f: 'Sito vetrina su dominio personalizzato'},
    {s: 1, f: 'Menu online con prezzi foto ed allergieni'},
    {s: 1, f: 'Dashboard con Software <span class="strg">Restaurant+ </span>'},
    {s: 0, f: 'Post per arricchire il tuo sito e mostrare i tuoi eventi '},
    {s: 0, f: 'Prenotazioni per cene e pranzi senza commisioni'},
    {s: 0, f: 'Ordini d’asporto senza commisioni'},
    {s: 0, f: 'Ordini a domicilio senza commisioni'},
    {s: 0, f: 'Pagamento online con fee Stripe (dal 1.5% al 2.5%)'},
    {s: 0, f: 'Statistiche e report su ordini e prenotazioni'},
  ],
  feats_2: [ 
    {s: 1, f: 'Sito vetrina su dominio personalizzato'},
    {s: 1, f: 'Menu online con prezzi foto ed allergieni'},
    {s: 1, f: 'Dashboard con Software <span class="strg">Restaurant+ </span>'},
    {s: 1, f: 'Post per arricchire il tuo sito e mostrare i tuoi eventi '},
    {s: 1, f: 'Prenotazioni per cene e pranzi senza commisioni'},
    {s: 1, f: 'Ordini d’asporto senza commisioni'},
    {s: 1, f: 'Ordini a domicilio senza commisioni'},
    {s: 0, f: 'Pagamento online con fee Stripe (dal 1.5% al 2.5%)'},
    {s: 0, f: 'Statistiche e report su ordini e prenotazioni'},
  ],
  feats_3: [ 
    {s: 1, f: 'Sito vetrina su dominio personalizzato'},
    {s: 1, f: 'Menu online con prezzi foto ed allergieni'},
    {s: 1, f: 'Dashboard con Software <span class="strg">Restaurant+ PRO</span>'},
    {s: 1, f: 'Post per arricchire il tuo sito e mostrare i tuoi eventi '},
    {s: 1, f: 'Prenotazioni per cene e pranzi senza commisioni'},
    {s: 1, f: 'Ordini d’asporto senza commisioni'},
    {s: 1, f: 'Ordini a domicilio senza commisioni'},
    {s: 1, f: 'Pagamento online con fee Stripe (dal 1.5% al 2.5%)'},
    {s: 1, f: 'Statistiche e report su ordini e prenotazioni'},
  ],
  scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  },


 
  stepRegistration : {
    a : {
      passed : false,
      firstName : '',
      lastName : '',
      email : '',
      phone : '',
    },
    b : {
      passed : false,
      cv : '',
      pec : '',
      city : '',
      address : '',
      district : '',
      r_s : '',
      p_iva : '',
      type_agency : '2',
    },
    c : {
      passed : false,
      opening_times : [],
      service_time : {
        mod: '', //a-pizzeria b-sushi
        //b
        max_asporto : 0,
        //a-b
        max_domicilio : 0,
        max_reservation : 0,
        timesDay : [],
        //a
        max_pz_t : 0,
        max_pz_q : 0,
      },

    },
    d : {
      passed : false,
      content_plot : {},
    },
  },
  


});
