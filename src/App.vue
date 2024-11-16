<script >
  
  


  export default {
    
  }
</script>

<template>

  <div class="container">
    <router-view></router-view>
  </div>
 

  
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
body{
  background-color: var(--c3);
}


.autofilled{
  border: 4px solid red;
  background-color: red;
}

</style>
