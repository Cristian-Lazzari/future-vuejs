import { createRouter, createWebHistory } from "vue-router";


import ConsumersRegistration from "./pages/ConsumersRegistration.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/ConsumersRegistration",
      name: "ConsumersRegistration",
      component: ConsumersRegistration,
    },
    {
      path: "/conferma",
      name: "conferma",
      component: Conferma,
    },
  ],
});

export { router };
