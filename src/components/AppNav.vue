<script>
export default {
  data() {
    return {
      scroll: false,
    };
  },
  methods: {
    actionScroll(event) {
      const scroll = window.scrollY;
      //   console.log(scroll);
      if (scroll > 800) {
        this.scroll = true;
      } else if (scroll == 0) {
        this.scroll = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.actionScroll);
  },

};
</script>

<template>
  <nav :class="{ nav_scroll: scroll }">
    <ul class="flex">
      <li><a :class="{ black: scroll }" href="#home"> Home </a></li>
      
      <li><a :class="{ black: scroll }" href="#servizi"> Servizi </a></li>
      <li><a :class="{ black: scroll }" href="#pacchetti"> Pricing </a></li>
      <li><a :class="{ black: scroll }" href="#contatti"> Contatti </a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  z-index: 7 !important;
  
  font-family: "Inter", sans-serif;
  font-weight: bolder;
  //background-color: rgba(255, 255, 255, 0.283);

  @include dfc;
  gap: 1rem;
  a {
    position: relative;
    z-index: 100;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: bolder;
  }
}
.nav-mobile {
  display: none;
}

.nav_scroll {
  background-color: rgba(255, 255, 255, 0.812);
  box-shadow: -2px 21px 25px -21px rgb(0, 0, 0);
}
.black {
  color: black;
}

.flex {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}
</style>
