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
  background-color: $c-bg;
}


.autofilled{
  border: 4px solid red;
  background-color: red;
}

</style>
