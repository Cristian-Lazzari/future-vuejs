<script>
import axios from "axios";
import { store } from "../store";
import { form_validations } from "../utilities/formValidation";
export default {
  components: {},
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
      error: false,
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
          throw new Error("Impossibile inviare il messaggio");
        }
        this.loader = false;
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
    <button v-if="!loader" @click="sendMessage" class="sendMessage">
      Invia
    </button>
    <button v-else class="sendMessage">
      <div class="dot-spinner">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div>
    </button>
    <div class="container">
      <!-- <div class="contact">mail</div>
      <span>futureplus.commerciale@gmail.com</span> -->
      <div class="contact">telefono</div>
      <span><a href="tel:+393271622244">+39 3271622244</a></span>
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
}

// Loader
.dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: #183153;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: "";
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}
// Fine loader - - - -

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
