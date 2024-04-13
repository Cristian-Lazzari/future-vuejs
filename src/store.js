import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://127.0.0.1:8000/",
  //baseUrl: "https://dashboard.future-plus.it/",
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
      pec : '',
      r_s : '',
      p_iva : '',
      type_agency : '',
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
        days_off : 0,
      },
      r_s : '',
      p_iva : '',
      type_agency : '',
    },
    d : {
      passed : false,
      content_plot : {},
    },
  },
  steps : 1,
});
