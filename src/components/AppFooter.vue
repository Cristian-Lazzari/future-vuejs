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
        INSTAGRAM WHATSAPP FACEBOOK
    </div>
   </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        background: linear-gradient(rgba(1, 1, 1, 0),rgb(14, 6, 53));

        display: flex;
        align-content: center;
        justify-content: space-between;
        padding: 2rem;
    }


</style>
