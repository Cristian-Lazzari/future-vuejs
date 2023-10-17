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
      if (scroll > 300) {
        this.scroll = true;
      } else if (scroll == 0) {
        this.scroll = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.actionScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.actionScroll);
  },
};
</script>

<template>
  <nav :class="{ white: scroll }">
    <ul class="flex">
      <li> <a href="#home"> Home </a> </li>
      <li> <a href="#why"> Perchè avere un sito? </a> </li>
      <li> <a href="#servizi"> Servizi </a> </li>
      <li> <a href="#pacchetti"> Pacchetti </a> </li>
      <li> <a href="#contatti"> Contatti </a> </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  box-shadow: -2px 21px 25px -21px rgb(248, 248, 248);
  a{
    text-decoration:none;
    color:white;
    font-weight: bolder;
  }
}

.white {
  background-color: white;
}

.flex {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}
</style>
