<script >
import axios from "axios";
import { store } from "../store";
import AppFooter from '../components/AppFooter.vue';
import AppLoader from '../components/AppLoader.vue';
  export default {
    components:{
      AppFooter,
      AppLoader,
    },
    data(){
        return{     
          store,
          consumersData: [
            {
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
            },
            {
              pec : '',
              r_s : '',
              p_iva : '',
              type_agency : '',
            },
            {
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
            {
              content_plot : {},
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
              r_s : '',
              p_iva : '',
              type_agency : '',
            },
            {
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
            {
              content_plot : {},
            },
          ],
          
          check :false,     
          loader :false,     
          message :'',  
        }   
        
    },
    methods:{
      async storeconsumers(){
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
              console.log(newconsumer);
              if (newconsumer.data.error) {
                this.message = "Impossibile proseguire";
                throw new Error("Impossibile proseguire");
              }
                          
              this.store.stepRegistration.a.passed == true
              this.store.stepRegistration.a.firstName == this.consumersData[0].firstName 
              this.store.stepRegistration.a.lastName == this.consumersData[0].lastName 
              this.store.stepRegistration.a.email == this.consumersData[0].email 
              this.store.stepRegistration.a.phone == this.consumersData[0].phone 

              this.consumersData[0] = {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
              };
              this.loader = false;
              this.message = "Registrazione Dati generali avvenuta con successo!";
              setTimeout(() => {
                this.message = "";
              }, 2500);
              this.store.steps == 2


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
      }

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
      
      <h1>Registrazione dati generali</h1>
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
            <span class="title">Pec</span>
            <input
            class="input-field"
            type="mail"
            name="input-name"
            title="Input title"
            placeholder="Inserici la tua Pec"
            v-model="consumersData[1].pec"
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
    </div>
        <!-- loader -->
    <div v-if="loader || message" class="loader_overlay">
      <div class="loader_container">
        <AppLoader v-if="loader" :show="loader" />
        <div v-else>{{ message }}</div>
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
    opacity: .5;
    p{
      color: red;
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

</style>
