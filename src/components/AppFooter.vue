<script >

export default{
  components: {
  }

}
</script>

<template>
   <div class="footer">
    <div class="p-i"><h5>FUTURE +</h5>
        p. iva:in apertura a gennaio 2024
    </div>
    <div class="social">
        <a href="https://www.instagram.com/cristian_lazzari_/?hl=it">
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
        }
        .social{
            @include dfc;
            gap: 1em;
            font-size: 1.7rem;
            a{
                color: white;
            }
           
        }
    }
@media (max-width:500px) {
    .footer{
        justify-content: center;
        .p-i{
            display: none;
        }
    }
}

</style>
