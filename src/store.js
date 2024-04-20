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
  package : 4,
  steps :1,
  pv : [
    "AG", // Agrigento
    "AL", // Alessandria
    "AN", // Ancona
    "AO", // Aosta
    "AR", // Arezzo
    "AP", // Ascoli Piceno
    "AT", // Asti
    "AV", // Avellino
    "BA", // Bari
    "BT", // Barletta-Andria-Trani
    "BL", // Belluno
    "BN", // Benevento
    "BG", // Bergamo
    "BI", // Biella
    "BO", // Bologna
    "BZ", // Bolzano
    "BS", // Brescia
    "BR", // Brindisi
    "CA", // Cagliari
    "CL", // Caltanissetta
    "CB", // Campobasso
    "CI", // Carbonia-Iglesias
    "CE", // Caserta
    "CT", // Catania
    "CZ", // Catanzaro
    "CH", // Chieti
    "CO", // Como
    "CS", // Cosenza
    "CR", // Cremona
    "KR", // Crotone
    "CN", // Cuneo
    "EN", // Enna
    "FM", // Fermo
    "FE", // Ferrara
    "FI", // Firenze
    "FG", // Foggia
    "FC", // Forlì-Cesena
    "FR", // Frosinone
    "GE", // Genova
    "GO", // Gorizia
    "GR", // Grosseto
    "IM", // Imperia
    "IS", // Isernia
    "SP", // La Spezia
    "AQ", // L'Aquila
    "LT", // Latina
    "LE", // Lecce
    "LC", // Lecco
    "LI", // Livorno
    "LO", // Lodi
    "LU", // Lucca
    "MC", // Macerata
    "MN", // Mantova
    "MS", // Massa-Carrara
    "MT", // Matera
    "VS", // Medio Campidano
    "ME", // Messina
    "MI", // Milano
    "MO", // Modena
    "MB", // Monza e della Brianza
    "NA", // Napoli
    "NO", // Novara
    "NU", // Nuoro
    "OG", // Ogliastra
    "OT", // Olbia-Tempio
    "OR", // Oristano
    "PD", // Padova
    "PA", // Palermo
    "PR", // Parma
    "PV", // Pavia
    "PG", // Perugia
    "PU", // Pesaro e Urbino
    "PE", // Pescara
    "PC", // Piacenza
    "PI", // Pisa
    "PT", // Pistoia
    "PN", // Pordenone
    "PZ", // Potenza
    "PO", // Prato
    "RG", // Ragusa
    "RA", // Ravenna
    "RC", // Reggio Calabria
    "RE", // Reggio Emilia
    "RI", // Rieti
    "RN", // Rimini
    "RM", // Roma
    "RO", // Rovigo
    "SA", // Salerno
    "SS", // Sassari
    "SV", // Savona
    "SI", // Siena
    "SR", // Siracusa
    "SO", // Sondrio
    "TA", // Taranto
    "TE", // Teramo
    "TR", // Terni
    "TO", // Torino
    "TP", // Trapani
    "TN", // Trento
    "TV", // Treviso
    "TS", // Trieste
    "UD", // Udine
    "VA", // Varese
    "VE", // Venezia
    "VB", // Verbano-Cusio-Ossola
    "VC", // Vercelli
    "VR", // Verona
    "VV", // Vibo Valentia
    "VI"  // Vicenza
  ],
  times : [ '00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'],
  settimes : [ 
            '12:00', 
            '12:30', 
            '13:00', 
            '13:30', 
            '14:00', 
            '14:30', 
            '15:00', 
            '15:30', 
            '16:00', 
            '16:30', 
            '17:00', 
            '17:30', 
            '18:00', 
            '18:30', 
            '19:00', 
            '19:30', 
            '20:00', 
            '20:30', 
            '21:00', 
            '21:30', 
            '22:00', 
            '22:30', 
            '23:00', 
            '23:30', 
            '00:00',
  ],
  services:['','',
  ['Tavoli', ],
  [ 'Asporto','Domicilio',],
  [ 'Asporto','Domicilio', 'Tavoli', ],
]


});
