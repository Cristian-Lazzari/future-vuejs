<script >
import { store } from "../store.js";
import AppNav from "../components/AppNav.vue";
import AppHero from "../components/AppHero.vue";
import AppFeature from "../components/AppFeature.vue";
import AppReview from "../components/AppReview.vue";
import AppPacks from "../components/AppPacks.vue";
import AppCall from "../components/AppCall.vue";
import AppFooter from "../components/AppFooter.vue";
export default{
  components: {

    AppNav,
    AppHero,
    AppFeature,
    AppReview,
    AppPacks,
    AppCall,
    AppFooter,


  },
  data() {
    return {
      store,
    };
  },
  methods:{
  },
  created(){
   
  }

}
</script>

<template>
    <div class="container">

      <AppNav />

      <AppHero />

      <AppFeature />

      <AppReview />

      <AppPacks />

      <AppCall />

      <AppFooter />

    </div>

</template>




<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
  




</style>
