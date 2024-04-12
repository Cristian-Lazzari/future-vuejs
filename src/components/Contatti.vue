<script>
import axios from "axios";
import { store } from "../store";
import { form_validations } from "../utilities/formValidation";
import AppLoader from "./AppLoader.vue";
export default {
  components: { AppLoader },
  data() {
    return {
      store,
      formValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        reply: "1",
      },
      isValid: [],
      loader: false,
      message: "",
    };
  },
  methods: {
    async sendMessage() {
      this.isValid = form_validations(this.formValues);

      if (this.isValid.length !== 0) {
        return;
      }

      try {
        this.loader = true;
        const message = await axios.post(
          store.baseUrl + "api/email",
          this.formValues
        );
        if (!message) {
          this.message = "Impossibile inviare il messaggio";
          throw new Error("Impossibile inviare il messaggio");
        }

        this.loader = false;
        this.message = "Messaggio inviato";
        setTimeout(() => {
          this.message = "";
        }, 2500);

        this.formValues = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          reply: "1",
        };
      } catch (error) {
        console.log("Errore: " + error.message);
      }
    },
  },
};
</script>

<template>
  <div id="contatti" class="contatti">
    <div class="wave-2"></div>
    <div class="color"></div>
    <h3>contatti</h3>
    <p>
      Se sei interessato ai nostri servizi contattaci tramite il nostro form,
      telefono o whatsapp
    </p>

    <div class="formErrors">
      <div v-for="(valid, i) in isValid" :key="i">{{ valid }}</div>
    </div>

    <form>
      <input
        type="text"
        class="standard"
        name="firstName"
        placeholder="Nome"
        v-model="formValues.firstName"
      />
      <input
        type="text"
        class="standard"
        name="lastName"
        placeholder="Cognome"
        v-model="formValues.lastName"
      />
      <input
        type="email"
        class="standard"
        name="mail"
        placeholder="Email"
        v-model="formValues.email"
      />
      <input
        type="text"
        class="standard"
        name="phone"
        placeholder="Telefono"
        v-model="formValues.phone"
      />
      <textarea
        class="standard"
        name="message"
        cols="50"
        rows="10"
        placeholder="Il tuo messaggio"
        v-model="formValues.message"
      ></textarea>

      <h4>Come preferisci essere ricontattato?</h4>

      <div class="wrapper">
        <div class="option">
          <input
            class="inputRadio"
            type="radio"
            name="reply"
            value="1"
            checked=""
            v-model="formValues.reply"
          />
          <div class="btn">
            <span class="span">Email</span>
          </div>
        </div>
        <div class="option">
          <input
            class="inputRadio"
            type="radio"
            name="reply"
            value="2"
            v-model="formValues.reply"
          />
          <div class="btn">
            <span class="span">Chiamata</span>
          </div>
        </div>
        <div class="option">
          <input
            class="inputRadio"
            type="radio"
            name="reply"
            value="3"
            v-model="formValues.reply"
          />
          <div class="btn">
            <span class="span">WhatsApp</span>
          </div>
        </div>
      </div>
    </form>
    <button @click="sendMessage" class="sendMessage">Invia</button>
    <div class="container">
      <!-- <div class="contact">mail</div>
      <span>futureplus.commerciale@gmail.com</span> -->

      <a class="contact" href="tel:+393271622244">telefono</a>
      <span><a href="tel:+393271622244">+39 3271622244</a></span>
    </div>

    <!-- loader -->
    <div v-if="loader || message" class="loader_overlay">
      <div class="loader_container">
        <AppLoader v-if="loader" :show="loader" />
        <div v-else>{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
.wave-2 {
  background-image: url("../assets/img/wave-3.svg");
}
.contatti {
  font-family: "Roboto Condensed", sans-serif;
  background-color: black;
  @include dfc;
  flex-direction: column;
  gap: 2rem;
  //height: 100vh;
  padding: 0 0 50% 0;
  h3 {
    text-transform: uppercase;
    font-size: $d-title2-min;
    margin-top: -30%;
  }

  .formErrors {
    color: red;
    font-weight: 600;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-width: 600px;
    width: 90%;
    
    .standard {
      color: white;
      border: 2px solid #e8e8e8;
      padding: 15px;
      border-radius: 10px;
      background-color: #212121;
      font-size: small;
      font-weight: bold;
      text-align: center;
    }

    .standard:focus {
      outline-color: white;
      background-color: #212121;
      color: #e8e8e8;
      box-shadow: 5px 5px #888888;
    }

    h4 {
      align-self: center;
    }

    // Radio per preferenza risposta
    .wrapper {
      align-self: center;
      --font-color-dark: #323232;
      --font-color-light: #fff;
      --bg-color: #fff;
      --main-color: #323232;
      position: relative;
      width: 250px;
      height: 36px;
      background-color: var(--bg-color);
      border: 2px solid var(--main-color);
      border-radius: 34px;
      display: flex;
      flex-direction: row;
      box-shadow: 4px 4px var(--main-color);
    }

    .option {
      width: 80.5px;
      height: 28px;
      position: relative;
      top: 2px;
      left: 2px;
    }

    .inputRadio {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
    }

    .btn {
      width: 100%;
      height: 100%;
      background-color: var(--bg-color);
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .span {
      color: var(--font-color-dark);
    }

    .inputRadio:checked + .btn {
      background-color: var(--main-color);
    }

    .inputRadio:checked + .btn .span {
      color: var(--font-color-light);
    }
  }
  .sendMessage {
    background-color: black;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    font-weight: bold;
    align-self: center;
    padding: 8px 30px;
    cursor: pointer;
  }

  .container {
    font-size: 16px;
    @include dfc;
    gap: 1rem;
    padding: 2rem;
    flex-direction: column;
    .contact {
      color: white;
      border: 2px solid white;
      width: 170px;
      text-align: center;
      text-transform: uppercase;
      padding: 5px 40px;
    }
    span {
      margin-bottom: 10px;
      a {
        color: white;
      }
    }
  }

  .loader_overlay {
    background: rgba(0, 0, 0, 0.726);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    z-index: 1000;

    .loader_container {
      color: white;
      background-color: black;
      padding: 2rem 4rem;
      border: 1px solid white;
      border-radius: 10px;
    }
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: #ffffff;
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: inset 0 0 20px 20px #23232329;
}
</style>
