<script >

export default{
  components: {
  }

}
</script>

<template>
    <div class="section-a">
        <div class="wave-2"></div>
        <div class="container">
            <h2>Scopri i nostri servizi</h2>
            <div class="c-cont">
                <div class="feature">
                    <div class="top">
                        <h3>Presenza Online</h3>
                        <span class="material-symbols-outlined ic ">Devices
                        </span>
                    </div>
                    <p>Con ciò intendiamo un sito web sviluppatto interamente da zero da nostri developer per adattarsi in pieno alle esigenze del cliente e caricare al meglio ed istantaneamente ogni pagina</p>
                </div>
                <div class="feature">
                    <div class="top">
                        <h3>Pannello di amministrazione</h3>
                        <span class="material-symbols-outlined ic">empty_dashboard</span>
                    </div>
                    <p>Oltre a garantirti una presenza online impeccabile creeremo per te una Dashboard con accesso privato in cui puoi monitorare e gestire i dati della tua pagina</p>
                 </div>
                <div class="feature">
                    <div class="top">
                        <h3>Prenotazione servizi online</h3>
                        <span class="material-symbols-outlined ic">confirmation_number</span>
                    </div>
                    <p>Permette ai tuoi clienti di inviare una prenotazione di un tuo servizio direttamente dal sito web alla tuo pannello di amministrazione</p>
                 </div>
                <div class="feature">
                    <div class="top">
                        <h3>Prenotazione prodotti online</h3>
                        <span class="material-symbols-outlined ic ">shopping_bag</span>
                    </div>
                    <p>Se la tua attività offre prodotti acquistabili su prenotazione ora i tuoi clienti potranno prenotare il loro carrello di prodotti direttamente dal sito web e tu potrai gestire tutte le tue prenotazioni direttamente dal pannello di amministrazione</p>
                 </div>
                <div class="feature">
                    <div class="top">
                        <h3>Qr Code</h3>
                        <span class="material-symbols-outlined ic ">qr_code_scanner</span>
                    </div>
                    <p>Creeremo per te un qr code personalizzato con logo della tua azienda così che il tuo sito o i tuoi servizi siano sempre alla portata di uno scatto</p>
                 </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 

.section-a{
    background: linear-gradient(23deg, #50387d , #004AAD  , $c-bg-2 80%);
    padding: 1rem 0 9rem 0;
    font-family: 'Roboto Condensed', sans-serif;
        .wave-2{
            background-image: url('../assets/wave-3.svg');
        }
    .container{
        padding: 2rem 0;
        max-width: 1000px;
        margin: 0 auto;
        height: 100%;
        h2{
            font-size: $d-title2-max;
            color: $c-f-az-op;
            margin: 4rem 0 2rem 0;
            text-shadow: 2px 2px 10px rgba(45, 46, 46, 0.79)
        }
        .c-cont{
            @include dfj;
            flex-wrap: wrap;
            gap: 3.6em;
            .feature{
                background-color: rgba(206, 214, 229, 0.26);
                box-shadow: 5px 5px 10px #303435, -5px -5px 10px #c8e7f7d6;
                width: 400px;
                border: 3px solid $c-white;
                border-radius: 20px;
                padding: 2em;
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                gap: 1em;
                .top{
                    display: flex;
                    justify-content: space-between;
                    h3{
                        font-size: 2.6rem;
                        text-shadow: 2px 2px 10px rgba(45, 46, 46, 0.79)
                    }
                    .ic{
                        font-size: $d-i-f-max;
                        text-shadow: 0px 0px 10px rgba(178, 247, 247, 0.79)
                    }
                }
                p{
                    font-size: 1.8rem;
                    text-shadow: 2px 2px 5px rgba(45, 46, 46, 0.79);
                    letter-spacing: 1.3px;
                }
            }
            
        }
    }

}





</style>
