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
                <div class="feature card-sef">
                    <div class="bg-sef">
                        <div class="top">
                            <h3>Presenza Online</h3>
                            <span class="material-symbols-outlined ic ">Devices
                            </span>
                        </div>
                        <p>Con ciò intendiamo un sito web sviluppatto interamente da zero da nostri developer per adattarsi in pieno alle esigenze del cliente e caricare al meglio ed istantaneamente ogni pagina</p>
                    </div>
                    <div class="blob-sef"></div>
                    
                </div>
                <div class="feature card-sef">
                    <div class="blob-sef"></div>
                    <div class="bg-sef">
                        <div class="top">
                            <h3>Pannello di amministrazione</h3>
                            <span class="material-symbols-outlined ic">empty_dashboard</span>
                        </div>
                        <p>Oltre a garantirti una presenza online impeccabile creeremo per te una Dashboard con accesso privato in cui puoi monitorare e gestire i dati della tua pagina</p>
                    </div>
                 </div>
                <div class="feature card-sef">
                    <div class="blob-sef"></div>
                    <div class="bg-sef">
                        <div class="top">
                            <h3>Prenotazione servizi online</h3>
                            <span class="material-symbols-outlined ic">confirmation_number</span>
                        </div>
                        <p>Permette ai tuoi clienti di inviare una prenotazione di un tuo servizio direttamente dal sito web alla tuo pannello di amministrazione</p>
                    </div>
                 </div>
                <div class="feature card-sef">
                    <div class="blob-sef"></div>
                    <div class="bg-sef">
                        <div class="top">
                            <h3>Prenotazione prodotti online</h3>
                            <span class="material-symbols-outlined ic ">shopping_bag</span>
                        </div>
                        <p>Se la tua attività offre prodotti acquistabili su prenotazione ora i tuoi clienti potranno prenotare il loro carrello di prodotti direttamente dal sito web e tu potrai gestire tutte le tue prenotazioni direttamente dal pannello di amministrazione</p>
                    </div>
                 </div>
                <div class="feature card-sef">
                    <div class="blob-sef"></div>
                    <div class="bg-sef">
                        <div class="top">
                            <h3>Qr Code</h3>
                            <span class="material-symbols-outlined ic ">qr_code_scanner</span>
                        </div>
                        <p>Creeremo per te un qr code personalizzato con logo della tua azienda così che il tuo sito o i tuoi servizi siano sempre alla portata di uno scatto</p>
                    </div>
                 </div>
            </div>
            
        </div>


        <div class="wave-3"></div>
        <div class="p-container">
            <h2>Scopri i nostri Pacchetti</h2>
            <div class="p-cont">
            
                <div class="parent">
                    <div class="card">
                        <div class="logo">
                            
                            <span class="circle circle2"></span>
                            <span class="circle circle3"></span>
                            <span class="circle circle4">FUTURE +</span>
                            

                        </div>
                        <div class="glass"></div>
                        <div class="content">
                            <div class="name">START</div>

                            <div class="line">PRESENZA ONLINE</div>
                            <div class="line">PANNELLO AMMINISTARZIONE</div>
                            <div class="line">QR CODE</div>
                        </div>
                        <div class="bottom">
                            
                            
                        </div>
                    </div>
                    </div>
     
            </div>
            
        </div>
    </div>

  
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 

.section-a{
    background: linear-gradient(23deg,#4a82fa 5%, #6c32ad 30%, #3d62c5  63%);
    padding: 1rem 0 9rem 0;
    font-family: 'Roboto Condensed', sans-serif;
        .wave-2{
            background-image: url('../assets/img/wave-3.svg');
        }
    .container{
        padding: 2rem 0;
        max-width: $m-w;
        margin: 0 auto;
        height: 100%;
        h2{
            font-size: $d-title1-max;
            color: $c-f-az-op-med;
            margin: 4rem 0 4rem 0;
            text-align: center;
            text-shadow: 5px 5px 13px rgb(29, 103, 103);
            text-transform: uppercase;
        }
        .c-cont .feature:nth-child(even){
            //border: 3px solid $c-white;

        }
        .c-cont{
            @include dfj;
            justify-content: center;
            flex-wrap: wrap;
            gap: 3.6em;
            .feature{
                //background-color: rgba(206, 214, 229, 0.26);
                box-shadow: 5px 5px 10px #303435, -5px -5px 10px #c8e7f7d6;
                width: 400px;
                height: 350px;
                border-radius: 32px;
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


    .wave-3{
        background-image: url('../assets/img/wave-4.svg');
    }


    
    .p-container{
        padding:0;
        max-width: $m-w;
        margin: 0 auto;
        height: 100%;
        h2{
            font-size: $d-title1-max;
            color: $c-f-az-op;
            margin: 4rem 0 4rem 0;
            text-align: center;
            text-shadow: 2px 2px 15px rgba(45, 46, 46, 0.79);
            text-transform: uppercase;
        }
        
       
            
        
    }


    .name{
        font-size: 2rem;
        font-weight: bolder;
    }
    .line{
        
    }




        .parent {
        width: 290px;
        height: 400px;
        perspective: 1000px;
        }

        .card {
        height: 100%;
        border-radius: 50px;
        background: linear-gradient(135deg, rgb(29, 217, 237) 0%, rgb(13, 59, 102) 100%);
        transition: all 0.5s ease-in-out;
        transform-style: preserve-3d;
        box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
        }

        .glass {
        transform-style: preserve-3d;
        position: absolute;
        inset: 8px;
        border-radius: 55px;
        border-top-right-radius: 100%;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
        transform: translate3d(0px, 0px, 25px);
        border-left: 1px solid white;
        border-bottom: 1px solid white;
        transition: all 0.3s ease-in-out;
        }

        .content {
        padding: 100px 60px 0px 30px;
        transform: translate3d(0, 0, 26px);
        }

    
        .bottom {
        padding: 10px 12px;
        transform-style: preserve-3d;
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transform: translate3d(0, 0, 26px);
        }




        .logo {
        position: absolute;
        right: 0;
        top: 0;
        transform-style: preserve-3d;
        }

        .logo .circle {
        display: block;
        position: absolute;
        aspect-ratio: 1;
        border-radius: 50%;
        top: 0;
        right: 0;
        box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        background: rgba(0, 249, 203, 0.2);
        transition: all 0.2s ease-in-out;
        }

        .logo .circle1 {
        width: 170px;
        transform: translate3d(0, 0, 20px);
        top: 8px;
        right: 8px;
        }

        .logo .circle2 {
        width: 140px;
        transform: translate3d(0, 0, 40px);
        top: 10px;
        right: 10px;
        -webkit-backdrop-filter: blur(1px);
        backdrop-filter: blur(1px);
        transition-delay: 0.3s;
        }

        .logo .circle3 {
        width: 110px;
        transform: translate3d(0, 0, 60px);
        top: 17px;
        right: 17px;
        transition-delay: 0.4s;
        }

        .logo .circle4 {
        width: 80px;
        transform: translate3d(0, 0, 80px);
        top: 23px;
        right: 23px;
        transition-delay: .5s;
        font-family: 'Bukhari Script', sans-serif;
        @include dfc;
        }

        .logo .circle5 {
        width: 50px;
        transform: translate3d(0, 0, 100px);
        top: 30px;
        right: 30px;
        display: grid;
        place-content: center;
        transition-delay: 1.6s;

        }

        .logo .circle5 .svg {
        width: 20px;
        fill: white;
        }

        .parent:hover .card {
        transform: rotate3d(1, 1, 0, 30deg);
        box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
        }

        .parent:hover .card .bottom .social-buttons-container .social-button {
        transform: translate3d(0, 0, 50px);
        box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
        }

        .parent:hover .card .logo .circle2 {
        transform: translate3d(0, 0, 60px);
        }

        .parent:hover .card .logo .circle3 {
        transform: translate3d(0, 0, 80px);
        }

        .parent:hover .card .logo .circle4 {
        transform: translate3d(0, 0, 100px);
        }

        .parent:hover .card .logo .circle5 {
        transform: translate3d(0, 0, 120px);
        }



</style>
