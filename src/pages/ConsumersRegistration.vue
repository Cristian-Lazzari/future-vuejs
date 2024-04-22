<script >
import axios from "axios";
import { store } from "../store";
import AppFooter from '../components/AppFooter.vue';
import AppLoader from '../components/AppLoader.vue';
import { faL } from "@fortawesome/free-solid-svg-icons";
  export default {
    components:{
      AppFooter,
      AppLoader,
    },
    data(){
        return{     
          store,
          title:['',
            'Registrazione - dati generali',
            'Registrazione - dati azienda',
            'Registrazione - Orari Aperture',
            'Registrazione - Disponibilità servizi',
            'Registrazione - Disponibilità servizi',
            'Registrazione - Inserici il tuo menu',
          ],
          consumersData: [
            {
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
            },
            {
              pec : '',
              cf : '',
              r_s : '',
              p_iva : '',
              type_agency : 2,
              city : '',
              address : '',
              district : '0',
            },
            {
              opening_times : [
                { day : 'lunedì', fromam :  '0', toam : '0', frompm: '0', topm: '0'},
                { day : 'martedì', fromam :  '0', toam : '0', frompm: '0', topm: '0'},
                { day : 'mercoledì', fromam :  '0', toam : '0', frompm: '0', topm: '0'},
                { day : 'giovedì', fromam :  '0', toam : '0', frompm: '0', topm: '0'},
                { day : 'venerdì', fromam :  '0', toam : '0', frompm: '0', topm: '0'},
                { day : 'sabato', fromam :  '0', toam : '0', frompm: '0', topm: '0'},
                { day : 'domenica', fromam :  '0', toam : '0', frompm: '0', topm: '0'},
              ],
              service_time : {
                mod: '', //a-pizzeria b-sushi
                //b
                max_asporto : 0,
                //a-b
                max_domicilio : 0,
                max_reservation : 0,
                timesDay : [
                { day : 'lunedì', active : false, time:[]},
                { day : 'martedì', active : false, time:[]},
                { day : 'mercoledì', active : false, time:[]},
                { day : 'giovedì', active : false, time:[]},
                { day : 'venerdì', active : false, time:[]},
                { day : 'sabato', active : false, time:[]},
                { day : 'domenica', active : false, time:[]}
              ],
                //a
                max_pz_t : 0,
                max_pz_q : 0,
              },
            },
            {
              link_menu : '',
              images_menu : [],
            },
          ],     
          consumersDataError: [
            {
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
            },
            {
              pec : '',
              cf : '',
              r_s : '',
              p_iva : '',
              type_agency : '',
              city : '',
              address : '',
              district : '',
            },
            {
              opening_times : [],
              service_time : {
                mod: '', //a-pizzeria b-sushi
                //b
                max_asporto : '',
                //a-b
                max_domicilio : '',
                max_reservation : '',
                timesDay : [],
                //a
                max_pz_t : '',
                max_pz_q : '',
                days_off : '',
              },
              r_s : '',
              p_iva : '',
              type_agency : '',
            },
            {
              content_plot : {},
            },
          ],
          
          choice :false,     
          check :false,     
          loader :false,     
          message :'', 
          menu : 0
        }   
        
    },
    methods:{
      async storeconsumers(c){

//         if(c == 1){
//           const newconsumer = await axios.post(
//                 store.baseUrl + "api/consumers",
//                 this.consumersData[0]
//               );
//               if (newconsumer.data.error) {
//                 this.message = "Impossibile proseguire";
//               }
//               this.message = "Registrazione Dati generali avvenuta con successo!";
//               setTimeout(() => {
//                 this.message = "";
//               }, 2000);
//               this.store.steps = 2
//           }else if(c == 1){

// }
        //validation
        if(store.steps == 1){
          this.consumersDataError[0] = {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
              };
          let check = this.validationA()
          if(check){
            try {
              this.loader = true;
              const newconsumer = await axios.post(
                store.baseUrl + "api/consumers",
                this.consumersData[0]
              );
              // if (newconsumer.data.old){
              //   this.loader = false
              //   this.choice = true
              //   this.message = 'Questa mail è stata gia usata, ma la registrazione è rimasta in sospeso, vuole continuare la precedente registrazione o vuole sovrascriverla? con questi nuovi dati?'
                
              //   return
              // }
              
              if (newconsumer.data.error) {
                this.message = "Impossibile proseguire";
                throw new Error("Impossibile proseguire");
              }
                          
              this.store.stepRegistration.a.passed == true
              this.store.stepRegistration.a.firstName == this.consumersData[0].firstName 
              this.store.stepRegistration.a.lastName == this.consumersData[0].lastName 
              this.store.stepRegistration.a.email == this.consumersData[0].email 
              this.store.stepRegistration.a.phone == this.consumersData[0].phone 

           
              this.loader = false;
              this.message = "Registrazione Dati generali avvenuta con successo!";
              setTimeout(() => {
                this.message = "";
              }, 2000);
              this.store.steps = 2


            } catch (error) {
              //console.log("Errore: " + error.message + newconsumer);
              this.loader = false
              this.message = "Impossibile proseguire";
              setTimeout(() => {
                this.message = "";
              }, 2500);
            }
          }
        }
        
      },
      validationA(){
        let check = false;
        if(!this.consumersData[0].firstName){
          this.consumersDataError[0].firstName = 'Il campo "nome" è necessario';
          check = true;
        }
        if(!this.consumersData[0].lastName){
          this.consumersDataError[0].lastName = 'Il campo "cognome" è necessario';
          check = true;
        }
        // Email
        if (!this.consumersData[0].email) {
          this.consumersDataError[0].email='Il campo "email" è richiesto!';
          check = true;
          } else if (!this.consumersData[0].email.includes('@')) {
            this.consumersDataError[0].email='Il campo "email" deve includere "@"';
            check = true;
          } else if (!(this.consumersData[0].email.endsWith('.com') || this.consumersData[0].email.endsWith('.it'))) {
            this.consumersDataError[0].email='Il campo "email" deve terminare con ".com" o ".it"';
            check = true;
          } else if (this.consumersData[0].email.length < 5) {
            this.consumersDataError[0].email='Il campo "email" deve contenere almeno 5 caratteri';
            check = true;
          }
        this.consumersData[0].phone = this.consumersData[0].phone.toString()
        console.log(this.consumersData[0].phone)
        if(!this.consumersData[0].phone){
          this.consumersDataError[0].phone = 'Il campo "telefono" è richiesto';
          check = true;
          phone
          } else if(this.consumersData[0].phone.length < 10){
            this.consumersDataError[0].phone = 'Il campo "email" deve contenere almeno 10 caratteri';
            check = true;
          }
          if(!check){
            return true;
          }else {
            return false;
          }
      },
      validationB(){
        let check = false;
        if(!this.consumersData[1].r_s && this.consumersData[1].type_agency !== 1){
          this.consumersDataError[1].r_s = 'Il campo "Ragione Sociale" è necessario';
          check = true;
        }
        if(!this.consumersData[1].district){
          this.consumersDataError[1].district = 'Il campo "provincia" è necessario';
          check = true;
        }
        if(!this.consumersData[1].address || this.consumersData[1].address.length < 2){
          this.consumersDataError[1].address = 'Il campo "indirizzo" è necessario';
          check = true;
        }
        
        if (!this.consumersData[1].pec && this.consumersData[1].type_agency !== 1) {
          this.consumersDataError[1].pec='Il campo "pec" è richiesto!';
          check = true;
          } else if (!this.consumersData[1].pec.includes('@') && this.consumersData[1].type_agency !== 1) {
            this.consumersDataError[1].pec='Il campo "pec" deve includere "@"';
            check = true;
          } else if (this.consumersData[1].pec.length < 5 && this.consumersData[1].type_agency !== 1) {
            this.consumersDataError[1].pec='Il campo "pec" deve contenere almeno 5 caratteri';
            check = true;
          }

          
        if(!this.consumersData[1].city){
          this.consumersDataError[1].city = 'Il campo "città" è richiesto';
          check = true;
          } else if(this.consumersData[1].city.length < 2){
            this.consumersDataError[1].city = 'Il campo "città" non è valido';
            check = true;
          }
        if(!this.consumersData[1].cv){
          this.consumersDataError[1].cv = 'Il campo "codice fiscale" è richiesto';
          check = true;
          } else if(this.consumersData[1].cv.length !== 16){
            this.consumersDataError[1].cv = 'Il campo "codice fiscale" non è valido';
            check = true;
          }
        if(!this.consumersData[1].p_iva && this.consumersData[1].type_agency !== 1){
          this.consumersDataError[1].p_iva = 'Il campo "p. iva" è richiesto';
          check = true;
          } else if(this.consumersData[1].p_iva.length !== 11 && this.consumersData[1].type_agency !== 1){
            this.consumersDataError[1].p_iva = 'Il campo "p. iva" non è valido';
            check = true;
          }
          if(!check){
            return true;
          }else {
            return false;
          }
      },
      validationC(){
        let check = false;
        
        if(!this.consumersData[2].service_time.mod && this.store.package >= 3){
          this.consumersDataError[2].service_time.mod = 'Selezionare una modalità';
          check = true;
        }
        if(this.consumersData[2].service_time.max_asporto < 1 && this.store.package >= 3 && this.consumersData[2].service_time.mod == 2){
          this.consumersDataError[2].service_time.max_asporto = 'Il limite deve essere maggiore di 0';
          check = true;
        }
        if(this.consumersData[2].service_time.max_pz_q < 1 && this.store.package >= 3 && this.consumersData[2].service_time.mod == 1){
          this.consumersDataError[2].service_time.max_pz_q = 'Il limite deve essere maggiore di 0';
          check = true;
        }
        if(this.consumersData[2].service_time.max_pz_t < 1 && this.store.package >= 3 && this.consumersData[2].service_time.mod == 1){
          this.consumersDataError[2].service_time.max_pz_t = 'Il limite deve essere maggiore di 0';
          check = true;
        }
        if(this.consumersData[2].service_time.max_domicilio < 1 && this.store.package >= 3){
          this.consumersDataError[2].service_time.max_domicilio = 'Il limite deve essere maggiore di 0';
          check = true;
        }
        if(this.consumersData[2].service_time.max_reservation < 1){
          this.consumersDataError[2].service_time.max_reservation = 'Il limite deve essere maggiore di 0';
          check = true;
        }
        
          if(!check){
            return true;
          }else {
            return false;
          }
      },
      storecustumers(){
        //step 2
        if(this.store.steps==2){
          this.consumersDataError[1].pec = ''
          this.consumersDataError[1].cf = ''
          this.consumersDataError[1].r_s = ''
          this.consumersDataError[1].p_iva = ''
          this.consumersDataError[1].type_agency = ''
          this.consumersDataError[1].city = ''
          this.consumersDataError[1].address = ''
          this.consumersDataError[1].district = ''
          let check = this.validationB()
          if(!check){
            return
          }
          if(check){
            this.loader= true
            this.store.stepRegistration.b.pec =this.consumersData[1].pec
            this.store.stepRegistration.b.cf = this.consumersData[1].cf
            this.store.stepRegistration.b.r_s = this.consumersData[1].r_s
            this.store.stepRegistration.b.p_iva = this.consumersData[1].p_iva
            this.store.stepRegistration.b.type_agency = this.consumersData[1].type_agency
            this.store.stepRegistration.b.city = this.consumersData[1].city
            this.store.stepRegistration.b.address = this.consumersData[1].address
            this.store.stepRegistration.b.district = this.consumersData[1].district
            this.store.steps = 3
            //this.message = "Passaggio completato";
            this.loader= false
           
          }
        }else if(this.store.steps == 4){
          this.consumersDataError[2].service_time.mod = ''
          this.consumersDataError[2].service_time.max_asporto = ''
          this.consumersDataError[2].service_time.max_domicilio = ''
          this.consumersDataError[2].service_time.max_reservation = ''
          this.consumersDataError[2].service_time.max_pz_q = ''
          this.consumersDataError[2].service_time.max_pz_t = ''
          if(this.validationC()){
            this.loader= true
            this.message = "Passaggio completato";
            this.store.stepRegistration.c.opening_times = this.consumersData[2].opening_times
            this.store.stepRegistration.c.service_time.mod =this.consumersData[2].service_time.mod
            this.store.stepRegistration.c.service_time.max_asporto = this.consumersData[2].service_time.max_asporto
            this.store.stepRegistration.c.service_time.max_domicilio = this.consumersData[2].service_time.max_domicilio
            this.store.stepRegistration.c.service_time.max_reservation = this.consumersData[2].service_time.max_reservation
            this.store.stepRegistration.c.service_time.max_pz_q = this.consumersData[2].service_time.max_pz_q
            this.store.stepRegistration.c.service_time.max_pz_t = this.consumersData[2].service_time.max_pz_t       
            this.loader= false
             setTimeout(() => {
              this.store.steps = 5
              this.message = "";
            }, 2000);
          }

        }else if(this.store.steps == 5){
          
          this.loader= true
          this.message = "Passaggio completato";
          this.store.stepRegistration.c.service_time.timesDay = this.consumersData[2].service_time.timesDay
               
          this.loader= false
          setTimeout(() => {
            this.store.steps = 6
            this.message = "";
          }, 2000);
        }else if (this.store.steps == 6){
          this.loader = true;
          let formData = new FormData();

          // Aggiungi tutte le immagini all'oggetto FormData
          for (let i = 0; i < this.consumersData[3].images_menu.length; i++) {
            formData.append('image[]', this.consumersData[3].images_menu[i]);
          }
          let body = JSON.stringify(this.consumersData)
          // Aggiungi altri dati all'oggetto FormData
          formData.append('consumersData', body);
          // Impostiamo gli headers
          const headers = {
              'Content-Type': 'multipart/form-data',
              // Altri headers se necessario
          };

          // Invia la richiesta HTTP POST al backend
          axios.post(store.baseUrl + "api/custumers", formData, {headers})
            .then(response => {
              let data = response
              this.loader = false;
              this.message = "Registrazione Dati generali avvenuta con successo!";
              setTimeout(() => {
                this.message = "";
    // Reindirizza l'utente all'URL specificato
                window.location.href = store.pUrl[store.typepay][store.package];
              }, 3000);
            })
            .catch(error => {
              this.loader= false;
              this.message = 'c?è stato un errore nella fase3 di raccolta dati, ci dispiace riprovare piu tardi'
              console.error('Error uploading images:', error);
            });
        }
      },
      checkTime( day , time , serv){     
        let check = false
          this.consumersData[2].service_time.timesDay[day].time.forEach(element => {
            if(element.time == time){
              if(element.service.includes(serv)){
                check = true;
              }
            }
          })
          if(check){
            return true
          }
      },
      inputServiceTime(day,time, serv){
        
        if(this.consumersData[2].service_time.timesDay[day].time.length == 0){
          let newtime = {
            time : time,
            service : [serv]
          }
          this.consumersData[2].service_time.timesDay[day].time.push(newtime)
          console.log('push1')
        }else{
          let check = false
          this.consumersData[2].service_time.timesDay[day].time.forEach(element => {
            if(element.time == time){
              check = true
              if(element.service.includes(serv)){
                element.service = element.service.filter(stringa => stringa !== serv);
                console.log('remove1')
              }else{
                element.service.push(serv)
                console.log('push2')
              }
            }
          });
          if(!check){
            let newtime = {
              time : time,
              service : [serv]
            }
            this.consumersData[2].service_time.timesDay[day].time.push(newtime)
            console.log('push3')
          }
        }
        console.log(this.consumersData[2].service_time)
      },
      inputphoto(event){
        // Resetta l'array delle immagini per evitare duplicati
        this.consumersData[3].images_menu = [];

        // Itera attraverso i file selezionati e li aggiunge all'array delle immagini
        for (let i = 0; i < event.target.files.length; i++) {
          this.consumersData[3].images_menu.push(event.target.files[i]);
        }
        console.log(this.consumersData[3].images_menu)
      },
      stepselection(){
        if(this.store.package >= 2){
          this.store.steps = 4
        }else{
          this.store.steps = 6
        }  
      },
    },
    created(){
      
    }
    
  }
</script>

<template>
  <div class="container">
    <div class="b-3"></div>
    <div class="b-4"></div>
    <div class="b-1"></div>
    <div class="b-6"></div>
    <div class="sub-container scroll" >
      
      <h1>{{ title[store.steps] }}</h1>
      <section v-if="store.steps == 1 " class="a-step">
        <form class="form">
          <p class="crumbles"><span>1</span> - 4</p>
          <label for="name" class="label">
            <span class="title">Nome</span>
            <input
              class="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="Inserici il tuo name"
              v-model="consumersData[0].firstName"
              />
          </label>
          <p>{{ consumersDataError[0].firstName }}</p>
          <label for="name" class="label">
            <span class="title">Cognome</span>
            <input
            class="input-field"
            type="text"
            name="input-name"
            title="Input title"
            placeholder="Inserici il tuo cognome"
            v-model="consumersData[0].lastName"
            />
          </label>
          <p>{{ consumersDataError[0].lastName }}</p>
          <label for="name" class="label">
            <span class="title">Email</span>
            <input
            class="input-field"
            type="mail"
            name="input-name"
            title="Input title"
            placeholder="Inserici la tua Email"
            v-model="consumersData[0].email"
            />
          </label>
          <p>{{ consumersDataError[0].email }}</p>
          <label for="serialCardNumber" class="label">
            <span class="title">Telefono</span>
            <input
            id="serialCardNumber"
            class="input-field"
            type="number"
            name="phone"
            title="Input title"
            placeholder="Inserisci il tuo numero (senza prefisso)"
            v-model="consumersData[0].phone"
            />
          </label>
          <p>{{ consumersDataError[0].phone }}</p>
          <input @click="storeconsumers" class="checkout-btn" type="button" value="Continua" />
        </form>
      </section>
      <section v-if="store.steps == 2" class="b-step">
        <form class="form">
          <p class="crumbles"><span>2</span> - 4</p>

          <label for="name" class="label l-s">
            <span class="title">Scegli il tipo di azienda</span>       
          </label>
          <div class="select">
            <div class="option" :class="consumersData[1].type_agency == 2 ? 'op-act' : ''"
             @click="consumersData[1].type_agency = 2">Azienda</div>
            <div class="option" :class="consumersData[1].type_agency == 3 ? 'op-act' : ''" 
            @click="consumersData[1].type_agency = 3">Imp. Individuale / Lib. Professionsta</div>
            <div class="option" :class="consumersData[1].type_agency == 1 ? 'op-act' : ''"
            @click="consumersData[1].type_agency = 1">Persona Fisica</div>
          </div>
          <label for="name" class="label" v-if="consumersData[1].type_agency !== 1" >
            <span class="title" v-if="consumersData[1].type_agency !== 1" >Pec</span>
            <input
            v-if="consumersData[1].type_agency !== 1" 
            class="input-field"
            type="mail"
            name="input-name"
            title="Input title"
            placeholder="Inserici la tua Pec"
            v-model="consumersData[1].pec"
            />
          </label>
          <p v-if="consumersData[1].type_agency !== 1" >{{ consumersDataError[1].pec }}</p>
          <label for="name" class="label" v-if="consumersData[1].type_agency !== 1" >
            <span class="title" v-if="consumersData[1].type_agency !== 1" >Partita Iva</span>
            <input
            v-if="consumersData[1].type_agency !== 1" 
            class="input-field"
            type="mail"
            name="input-name"
            title="Input title"
            placeholder="Inserici la tua Partita Iva"
            v-model="consumersData[1].p_iva"
            />
          </label>
          <p v-if="consumersData[1].type_agency !== 1" >{{ consumersDataError[1].p_iva }} </p>
          <label for="name" class="label">
            <span class="title">Codice fiscale intestatario</span>
            <input
              class="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="Inserici il Codice fiscale"
              v-model="consumersData[1].cv"
              />
          </label>
          <p>{{ consumersDataError[1].cv }}</p>
          <label for="name" class="label"  v-if="consumersData[1].type_agency !== 1" >
            <span  v-if="consumersData[1].type_agency !== 1" class="title">Ragione Sociale</span>
            <input
            v-if="consumersData[1].type_agency !== 1" 
            class="input-field"
            type="text"
            name="input-name"
            title="Input title"
            placeholder="Inserici la ragione sociale "
            v-model="consumersData[1].r_s"
            />
          </label>
          <p v-if="consumersData[1].type_agency !== 1" >{{ consumersDataError[1].r_s }}</p>
          
          <label for="name" class="label" >
            <span class="title">Indirizzo</span>
            <input
          
            class="input-field"
            type="text"
            name="input-name"
            title="Input title"
            placeholder="Inserici il tuo indirizzo o della tua azienda"
            v-model="consumersData[1].address"
            />
          </label>
          <p>{{ consumersDataError[1].address }}</p>
         
          <div class="split">
            
            <label for="name" class="label district" >
              <span class="title">Città</span>
              <input
            
              class="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="Inserici la città"
              v-model="consumersData[1].city"
              />
              <p>{{ consumersDataError[1].city }}</p>
            </label>
            
            <label for="" class="label">
              <span class="title">Provincia</span>
              <select class="input-field" v-model="consumersData[1].district">
                <option value="0">Scegli un opzione</option>
                <option v-for="op in store.pv" :key="op" :value="op">{{op}}</option>
  
              </select>
              <p>{{ consumersDataError[1].city }}</p>
            </label>
            
          </div>


          <input @click="storecustumers" class="checkout-btn" type="button" value="Continua" />
        </form>
      </section>
      <section v-if="store.steps == 3" class="c-step">
        <form class="form">
          <p class="crumbles"><span>3-A</span> - 4</p>

          <div class="label l-s">
            <span class="title">Inserisci gli orari d'apertura</span>
          </div>
          
          <div class="select">
            <div v-for="(d, i) in consumersData[2].opening_times" :key="d" class="day">
              <h3 class="title">{{ d.day }}</h3>
              <div class="input-range">
                <h4 class="">Pranzo</h4>
                <div class="label">
                  <span class="title">Da</span>
                  <select class="input-field" v-model="consumersData[2].opening_times[i].fromam">
                    <option value="0">-- : --</option>
                    <option v-for="op in store.times" :key="op" :value="op">{{op}}</option>
      
                  </select>
                  
                </div> 
                <div class="label">
                  <span class="title">a</span>
                  <select class="input-field" v-model="consumersData[2].opening_times[i].toam">
                    <option value="0">-- : --</option>
                    <option v-for="op in store.times" :key="op" :value="op">{{op}}</option>
      
                  </select>
                </div> 
                
                <h4 class="">Cena</h4>
                <div class="label">
                  <span class="title">Da</span>
                  <select class="input-field" v-model="consumersData[2].opening_times[i].frompm">
                    <option value="0">-- : --</option>
                    <option v-for="op in store.times" :key="op" :value="op">{{op}}</option>
      
                  </select>
                  
                </div> 
                <div class="label">
                  <span class="title">a</span>
                  <select class="input-field" v-model="consumersData[2].opening_times[i].topm">
                    <option value="0">-- : --</option>
                    <option v-for="op in store.times" :key="op" :value="op">{{op}}</option>
      
                  </select>
                </div> 
                
                
              
              </div>
            </div>
          </div>
         


          <input @click="stepselection" class="checkout-btn" type="button" value="Continua" />
        </form>
      </section>    
      <section v-if="store.steps == 4 && store.package >= 2" class="d-step">
        <form class="form">
          <p class="crumbles"><span>3-B</span> - 4</p>
          
          <label for="name" class="label l-s" v-if="store.package >=3 ">
            <span class="title">Scegli come ricevere i tuoi ordini </span>       
          </label>
          <div class="select" v-if="store.package >=3 ">
            <span>Scegliendo 'per pezzi' ad ogni fascia oraria riceverai ordinazioni in base alla disponibilità dei pezzi che darai successivamente, se scegli 'per ordini' potrai impostare il numero di ordini che vuoi ricevre senza tener conto della quantità di prodotti richiesti per ogni ordine</span>
            <div class="option" :class="consumersData[2].service_time.mod == 1 ? 'op-act' : ''"
             @click="consumersData[2].service_time.mod = 1">per pezzi</div>
            <div class="option" :class="consumersData[2].service_time.mod == 2 ? 'op-act' : ''" 
            @click="consumersData[2].service_time.mod = 2">per ordini</div>
          </div>

          <p v-if="store.package >=3 ">{{ consumersDataError[2].service_time.mod }}</p>
          
          <label for="serialCardNumber" class="label">
            <span class="title">Limite persone per fascie orarie</span>
            <input
            id="serialCardNumber"
            class="input-field"
            type="number"
            name="max_asporto"
            title="Input title"
            placeholder="Inserisci il limite di ordini per fascia oraria"
            v-model="consumersData[2].service_time.max_reservation"
            />
          </label>
          <p>{{ consumersDataError[2].service_time.max_reservation }}</p>
          
          <label v-if="store.package >=3 && consumersData[2].service_time.mod == 2" for="serialCardNumber" class="label">
            <span class="title">Limite ordini per fascia oraria</span>
            <input
            id="serialCardNumber"
            class="input-field"
            type="number"
            name="max_asporto"
            title="Input title"
            placeholder="Inserisci il limite di ordini per fascia oraria"
            v-model="consumersData[2].service_time.max_asporto"
            />
          </label>
          <p v-if="store.package >=3 && consumersData[2].service_time.mod == 2" >{{ consumersDataError[2].service_time.max_asporto }}</p>

          <label v-if="store.package >=3 && consumersData[2].service_time.mod == 1" for="serialCardNumber" class="label">
            <span class="title">Limite prodotti (tipo 1) per fascia oraria</span>
            <input
            id="serialCardNumber"
            class="input-field"
            type="number"
            name="max_asporto"
            title="Input title"
            placeholder="Inserisci il limite di ordini per fascia oraria"
            v-model="consumersData[2].service_time.max_pz_q"
            />
          </label>
          <p v-if="store.package >=3 && consumersData[2].service_time.mod == 1" >{{ consumersDataError[2].service_time.max_pz_q }}</p>

          <label v-if="store.package >=3 && consumersData[2].service_time.mod == 1" for="serialCardNumber" class="label">
            <span class="title">Limite prodotti (tipo 2) per fascia oraria *opzionale</span>
            <input
            id="serialCardNumber"
            class="input-field"
            type="number"
            name="max_asporto"
            title="Input title"
            placeholder="Inserisci il limite di ordini per fascia oraria"
            v-model="consumersData[2].service_time.max_pz_t"
            />
          </label>
          <p v-if="store.package >=3 && consumersData[2].service_time.mod == 1" >{{ consumersDataError[2].service_time.max_pz_t }}</p>

          <label for="serialCardNumber" class="label">
            <span class="title">Limite ordini a domicilio per fascia oraria</span>
            <input
            id="serialCardNumber"
            class="input-field"
            type="number"
            name="max_asporto"
            title="Input title"
            placeholder="Inserisci il limite di ordini per fascia oraria"
            v-model="consumersData[2].service_time.max_domicilio"
            />
          </label>
          <p>{{ consumersDataError[2].service_time.max_domicilio }}</p>

          <input @click="storecustumers" class="checkout-btn" type="button" value="Continua" />
        </form>
      </section>
      <section v-if="store.steps == 5" class="c-step">
        <form class="form">
          <p class="crumbles"><span>3-C</span> - 4</p>

          <div class="label l-s">
            <span class="title">Specifica le disponibilità dei tuoi servizi</span>
          </div>          
          <div class="select">
            <div v-for="(d, i) in consumersData[2].service_time.timesDay" :key="d" class="day">
              <!-- giorno -->
              <div class="split-time">
                <h3 @click="consumersData[2].service_time.timesDay[i].active = !consumersData[2].service_time.timesDay[i].active" class="title">{{ d.day }}</h3> 
              <div 
              class="btn"
              @click="consumersData[2].service_time.timesDay[i].active = !consumersData[2].service_time.timesDay[i].active"
              :class="consumersData[2].service_time.timesDay[i].active ? 'op-act':''"
              >{{ consumersData[2].service_time.timesDay[i].active ? 'Attivo' : 'Non Attivo' }}</div>
              </div>
              
              

              <label v-if="consumersData[2].service_time.timesDay[i].active" class="label">
                <span class="title">Indica i servizi per ogni orario </span>       
              </label>
              <div class="day-time" v-if="consumersData[2].service_time.timesDay[i].active">    
                <div class="option" v-for="t in store.settimes" :key="t">
                  <!-- orari -->
                  <h4>{{ t }}</h4>
                    <div class="cont-service"  >
                      <span v-for="s in store.services[store.package]"
                      :key="s"
                      :class="checkTime(i,t, s) ? 'time-act' : ''"
                      @click="inputServiceTime(i,t, s)">{{ s }}</span>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
         


          <input @click="storecustumers" class="checkout-btn" type="button" value="Continua" />
        </form>
      </section>
      <section v-if="store.steps == 6" class="b-step">
        <form class="form">
          <p class="crumbles"><span>4</span> - 4</p>
          <label for="name" class="label l-s" v-if="store.package >=3 ">
            <span class="title">Scegli come ricevere i tuoi ordini </span>       
          </label>
          <div class="select" v-if="store.package >=3 ">
            <span>Scegli come caricare il tuo menu</span>
            <div class="option" :class="menu== 1 ? 'op-act' : ''"
             @click="menu= 1">Link</div>
            <div class="option" :class="menu== 2 ? 'op-act' : ''" 
            @click="menu= 2">Foto</div>
          </div>

          <label for="name" v-if="menu == 1" class="label">
            <span class="title">Link menu</span>
            <input
          
            class="input-field"
            type="link"
            name="input-name"
            title="Input title"
            placeholder="Inserici il link del tuo menu"
            v-model="consumersData[1].pec"
            />
          </label>
          <p v-if="menu == 1">{{ consumersDataError[3].link_menu }}</p>

          
          <label for="file" v-if="menu == 2" class="file-upload-label">
            <div class="file-upload-design">
              <svg viewBox="0 0 640 512" height="1em">
                <path
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                ></path>
              </svg>
              <h3 class="">Foto menu cartaceo</h3>
              <span class="">Carica una cartella compressa delle foto del tuo menu</span>
                
                <span class="browse-button">Carica il file .zip</span>
              </div>
              <input id="file" type="file" multiple @change="inputphoto" />
            </label>
            
            <p v-if="menu == 2">{{ consumersDataError[3].link_menu }}</p>

         

          


          <input @click="storecustumers" class="checkout-btn" type="button" value="Continua" />
        </form>
      </section>
    </div>
        <!-- loader -->
    <div v-if="loader || message" class="loader_overlay">
      <div class="loader_container">
        <AppLoader v-if="loader" :show="loader" />
        <div v-else>{{ message }}</div>
        <div v-if="choice && message" class="btn">
          <div class="choice" @click="storeconsumers(1)" >ripristina</div>
          <div class="choice" @click="storeconsumers(2)" >sovrascrivi</div>
        </div>
      </div>
    </div>
    
  </div>
  
  <AppFooter />
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;
.container{
  @include dfc;
  height: 100vh;

  font-family: 'Roboto Condensed', sans-serif;
}
.b-1,
.b-3,
.b-4,
.b-6 {
filter: blur(130px) !important;
}
.sub-container{
  @include dfa;
  flex-direction: column;
  padding: 1rem 0 3rem 0;
  gap: 10%;
  height: 83vh;
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;
  z-index: 100;
  font-family: 'Roboto Condensed', sans-serif;
  form{
    opacity: .5;
    .crumbles{
      text-align: center;
      color: rgb(102, 99, 142);
      font-size: clamp(16px, 3vw, 22px);
      span{
        font-size: 220%;
        font-weight: bold;
        color: rgb(11, 8, 51);

      }
    }
    p{
      color: red;
    }
    .select{
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      text-align: center;
      gap: .9em;
      border: 1px $c-form-f solid;
      border-radius: 17px;
      padding: 2.9em .4em ;
      z-index: 1;
      font-size: clamp(12px, 2vw, 13px);
      
      .op-act{
        font-size: clamp(13px, 2vw, 15px);
        background-color: $c-form-1;
        width: 90%;
        border-radius: 3px;
        margin: 0 auto;
        color: $c-form;
        transition: all ease-in-out .2s;
      }
      
    }
    .l-s{
      position: relative;
      .title{
        padding: .8em;
        background-color: $c-form;
        position: absolute;
        top: -0px !important;
        z-index: 2;

      }
    }
    .day{
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 90%;
      margin: 0 auto;
      .title{
        z-index: 3;
      }
      .split-time{
        display: flex;
        align-items: center;
        h3, .btn{
          width: 50%;
          flex: 1 1 auto;
          margin-top: 15px !important;
          width: 100%;
          text-transform: uppercase;
        }
      }
      .day-time{
        display: flex;
        flex-direction: column;
        align-content: center;
        
        text-align: center;
        gap: .2em;
        border: 1px $c-form-f solid;
        border-radius: 17px;
        padding: 2em 1em ;
        z-index: 1;
        height: 120px;
        overflow-y: scroll;
        transition: all ease-in-out .2s;
      }
      .day-time:hover{
        height: 380px;
        transition: all ease-in-out .2s;
      }
.day-time::-webkit-scrollbar {
  width: 5px;
}

.day-time::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: rgba(30, 6, 125, 0.613);
    width: 4px;
}
.day-time::-webkit-scrollbar-track {
    border-radius: 20px;
    background: rgba(78, 100, 147, 0);
}

      
    }

    .cont-service{
      margin: 1rem auto;
      display: flex;
      width: 100%;
      justify-content: space-around;
      span{
        opacity: .7;
        border: .5px solid $c-form-1;
        border-radius: 100px;
        padding: .2em .7em;
        transition: all ease-in-out .2s;
      }
      span:hover{
        color: white;
        background-color: $c-form-1;
        scale: 1.2;
        transition: all ease-in-out .2s;
      }
      .time-act{
        color: white;
        opacity: 1 !important;
        background-color: $c-form-1;
        scale: 1 !important;
        transition: all ease-in-out .2s;
      }
    }

  }
  h1{
    font-family: "Kanit", sans-serif;
    color: white;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: clamp(27px, 5vw, 55px);
    text-shadow:  0 0 17px rgba(194, 215, 239, 0.308);
    letter-spacing: .2em;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1.1em;
    text-align: center;
    
  }

}

.file-upload-label input {
  display: none;
}
.file-upload-label svg {
  height: 50px;
  fill: $c-form-1;
  margin-bottom: 10px;
}
.file-upload-label {
  width: 80%;
  margin: 0 auto;
  cursor: pointer;
  background-color: #dddddd6b;
  padding: 2rem;
  border-radius: 40px;
  border: 2px dashed $c-form-1;
  box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);
  text-align: center;
}
.file-upload-design {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.browse-button {
  background-color: $c-form-1;
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  transition: all 0.3s;
}
.browse-button:hover {
  background-color: rgb(199, 221, 243);
  color: $c-form-1 !important;
  border: 1px solid $c-form-1;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  /* -webkit-background-clip: text; */
  background-color: none !important;
  -webkit-text-fill-color: none !important;
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: inset 0 0 20px 20px rgba(0, 0, 255, 0.066) !important;
}
</style>
