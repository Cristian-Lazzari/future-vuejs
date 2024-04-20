<script >

export default{
  components: {
  }

}
</script>

<template>
   <div class="footer">
    <div class="p-i"><h5>FUTURE +</h5>
       
        <p>
            p. iva: 02974730422
        </p>
        <a href="https://www.iubenda.com/privacy-policy/16412600/legal"> Privacy policy</a>

    </div>
    <div class="social">
        <a href="https://www.instagram.com/future.plus_/?hl=it">
            <i class="bi bi-instagram"></i>
        </a>
       
        <i class="bi bi-facebook"></i>

        <a href="https://wa.me/393271622244">
            <i class="bi bi-whatsapp"></i>
        </a> 
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
        background-color: rgba(0, 0, 0, 0.65);
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        align-content: center;
        justify-content: space-between;
        padding: 15px;
        .p-i{
            font-size: 1.2rem;
            text-transform: uppercase;
            a{
                color: white

            }
        }
        .social{
            @include dfc;
            gap: 1em;
            font-size: 1.7rem;
            margin-right: 50px;
            a{
                color: white;
            }
           
        }
    }


</style>
