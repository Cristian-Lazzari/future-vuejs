<script>
export default {
  components: {},
};
</script>

<template>
  <div class="contatti">
    <div class="wave-2"></div>
    <div class="color"></div>
    <h3>contatti</h3>
    <p>Se sei interessato ai nostri servizi contattaci via mail, telefono o whatsapp </p>
    <div class="container">
      <div class="contact">mail</div>
      <span>futureplus.commerciale@gmail.com</span>
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
.contatti{
  font-family: "Roboto Condensed", sans-serif;
  background-color: black;
  @include dfc;
  flex-direction: column;
  gap: 2rem;
  //height: 100vh;
  padding: 0 0 10% 0;
  h3{
    text-transform: uppercase;
    font-size: $d-title2-min;
    margin-top: -30%;
  }
  .container{
    font-size: 16px;
    @include dfc;
    gap: 1rem;
    padding: 2rem;
    flex-direction: column;
    .contact{
      border: 2px solid white;
      //width: 100px;
      text-align: center;
      text-transform: uppercase;
      padding: 5px 40px;
    }
    span{
      margin-bottom: 10px;
      a{
        color: white;
      }

    }
  }
}

</style>
