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
      <li>Home</li>
      <li>Contacts</li>
      <li>About</li>
    </ul>
  </nav>
</template>

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  box-shadow: -2px 21px 25px -21px rgb(248, 248, 248);
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
