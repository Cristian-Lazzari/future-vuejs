import { createRouter, createWebHistory } from "vue-router";


import Home from "./pages/Home.vue";
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
      path: "/",
      name: "ConsumersRegistration",
      component: ConsumersRegistration,
    },

  ],
});

export { router };
