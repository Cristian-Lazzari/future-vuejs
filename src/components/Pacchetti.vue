<script >

export default{
  components: {
  }

}
</script>

<template>
    <div class="section-a">
        <!-- <div class="wave-2"></div> -->
        <div class="container">
            <h2>Scopri i nostri Pacchetti</h2>
            <div class="p-cont">
                <div class="pack">
                    
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 

.section-a{
    background: linear-gradient(150deg, #50387d , #3d62c5  , $c-bg-2 75%);
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
            color: $c-f-az-op;
            margin: 4rem 0 4rem 0;
            text-align: center;
            text-shadow: 2px 2px 15px rgba(45, 46, 46, 0.79)
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





</style>
