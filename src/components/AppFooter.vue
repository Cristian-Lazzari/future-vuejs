<script >

export default{
  components: {
  }

}
</script>

<template>
   <div class="footer">
    <div class="p-i">
        p. iva:123123123123
    </div>
    <div class="social">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-whatsapp"></i>
    </div>

   </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 
    .footer{
        z-index: 1300;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        background: linear-gradient(rgba(1, 1, 1, 0)20%,rgb(21, 4, 54));
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        align-content: center;
        justify-content: space-between;
        padding: 2rem;
        .p-i{
            text-transform: uppercase;
        }
    }


</style>
