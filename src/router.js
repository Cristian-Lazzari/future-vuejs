import { createRouter, createWebHistory } from "vue-router";


import Home from "./pages/Home.vue";
// import ConsumersRegistration from "./pages/ConsumersRegistration.vue";
import Terms from "./pages/Terms.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/terms",
      name: "terms",
      component: Terms,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: ConsumersRegistration,
    },

  ],
});

export { router };
