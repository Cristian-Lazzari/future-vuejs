import { reactive } from "vue";

export const store = reactive({
  //baseUrl: "http://127.0.0.1:8000/",
  baseUrl: "https://dashboard.future-plus.it/",
  domain: "https://future-plus-demo.netlify.app/",
  //domain: "http://localhost:5173/",
  nav_menu: 0,
  package : 0,
  typepay: 1,
  pUrl:[
    [
      '',
      'https://buy.stripe.com/3cs4jOgT7gU80JafZ3',
      'https://buy.stripe.com/00g6rW46l7jy9fG8wC',
      'https://buy.stripe.com/8wMg2w0U95bq63ueV1',
      'https://buy.stripe.com/3cs7w0cCR47meA09AI'
    ],
    [
      '',
      'https://buy.stripe.com/bIY8A47ix1Ze1Ne8wA',
      'https://buy.stripe.com/4gw9E86eteM02Ri9AD',
      'https://buy.stripe.com/cN27w046lavKdvW4gi',
      'https://buy.stripe.com/4gwcQkgT79rG2Ri9AB'
    ],
  ],
  price : [
    [
      '49' , '399'
    ],
    [
      '99' , '999'
    ],
    [
      '129' , '1199'
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
