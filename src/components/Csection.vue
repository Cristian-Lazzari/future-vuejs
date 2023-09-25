<script >

// import Bsection from './components/Bsection.vue'
// import Csection from './components/Csection.vue'
// import Dsection from './components/Dsection.vue'
export default{
  components: {
  }

}
</script>

<template>
    <div class="section-a">

        <div class="container">
            <h2>ma sopratutto perchè...</h2>
            <div class="p1">&lt;&lt; Oggi il 99% delle persone quando sente parlare di un posto o di un azienda la prima cosa che fa è cercare su internet quel nome ed è per questo che è fondamentale avere una solida e curata prensenza online, le persone non devono solo trovarti devono innamorarsi della tua azienda e dei tuoi servizi >> </div>
        </div>
    </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 

.section-a{
    background-color: $c-bg-1;

    .container{
        
        max-width: $m-w;
        padding: 20rem 1rem;
        margin: 0 auto;
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        gap: 4rem;
        h2{
            font-size: $d-title2-max;
            text-transform: uppercase;
            color: $c-f-az-op;
            text-shadow: 2.5px 2.5px 8px rgba(166, 168, 168, 0.574);
            z-index:100;
        }
        .p1{
            margin: 3rem;
            font-size: 3rem;
            border-radius: 30px;
            padding: 2rem;
            background: #494e537c;
            text-shadow: 2.5px 2.5px 8px rgba(56, 57, 57, 0.574);
     
            box-shadow: 30px 30px 60px #778586, -30px -30px 60px #c8e7f7d6;
            z-index:100;
        }
    }

}
@media (max-width: 670px) {

    .container{
        h2{
            font-size: $d-title2-min!important;
            letter-spacing: 2px;
        }
        .p1{
            font-size: 2rem!important;
            margin: 1rem!important;
        }
    }

}
@media (max-width: 470px) {

    .container{
        h2{
            font-size: $d-title3-min!important;
            letter-spacing: 2px;
        }
        .p1{
            font-size: 2rem!important;
            margin: 1rem!important;
        }
    }

}




</style>
