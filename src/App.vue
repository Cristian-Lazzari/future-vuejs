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


body::-webkit-scrollbar{
  width: 10px;
}
body::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: $c-header;
}
body::-webkit-scrollbar-thumb:hover {
  border-radius: 20px;
  background-color: $c-nav-link;
  border: 2px solid $c-header;
    
}

</style>
