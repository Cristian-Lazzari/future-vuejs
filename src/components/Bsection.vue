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

            <div class="p1">
                <div class="card-section cs1">
                
                    <span class="material-symbols-outlined conc c1 ">person 
                        <span class="material-symbols-outlined pub">public
                        </span>
                        
                    </span>
                    <span class="material-symbols-outlined conc c2">person 
                        <span class="material-symbols-outlined pub">public
                        </span>
                        
                    </span>
                    <span class="material-symbols-outlined conc c3">person 
                        <span class="material-symbols-outlined pub">public
                        </span>
                        
                    </span>
                    
                    <span class="material-symbols-outlined conc user c4">person
                        <span class="material-symbols-outlined pub pub_off ">public_off</span>
                    </span>
                </div>
                <span>per rimanere al passo con il progresso che sta affrantando la tua concorrenza</span>
                
            </div>
            <div class="p2">
                <span>per dare la possibilità a nuovi clienti o collaboratori di scoprire te ed i tuoi servizi</span>
                <div class="card-section cs2">
                    <span class="material-symbols-outlined i2 gp i2-1">group_add
                        <span class="material-symbols-outlined i2">person_add</span>
                    </span> 
                    <span class="material-symbols-outlined i2 i2-2">public</span> 
                    <span class="material-symbols-outlined i2 i2-3">rocket_launch</span> 
                    <span class="material-symbols-outlined i2 iuser">person</span> 
                </div>
            </div>
            
        </div>
        </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 

.section-a{
    background-color: $c-bg-1;
    display: flex;
    flex-direction: column;
  
    gap: 1rem;

    position: relative;
    .container{
        max-width: 1000px;
        margin: 2rem auto;
        padding: 2rem;
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .p1, .p2{
            width: 100%;

            display: flex;
            font-size: 2.5rem;
            border-radius: 10px;
            span{

                line-height: 4.7rem;
                text-transform: uppercase;
                text-shadow: 0px 0px 4px rgb(136, 136, 136);
                letter-spacing: .2em;
                color: $c-f-az-op;
            }
        } 
        .p1{
            align-items: center;
            box-shadow: 6px -4px 15px #92B6C3;
            padding: 3rem;
            gap:2rem;
            background: linear-gradient(90deg, #1a358600 , #92b6c392 30%, #92B6C3 60%);
            text-align: right;
            position:relative;
            right: -30px;
            
        }
        .p2{
            position:relative;
            left: -30px;
            text-align: left;
            flex-direction: column;
            margin-top: 4rem;
            padding: 1.6em 1em;
            box-shadow: -6px -4px 15px #92B6C3;
            background: linear-gradient(270deg, #1a358600 , #92b6c380 30%, #92B6C3 60%);
        }
        .cs1{
            
            align-self: center;
            margin-left: -9%;
        }
        .cs2{
            padding: 4rem!important;
            gap: 4rem;
            width: 80%;
            align-self: flex-end;
            padding: 4rem 2em 7rem 2rem ;
        }
        .card-section{
            @include dfc;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.25) , rgba(222, 222, 222, 0.639) 30%, rgba(216, 216, 216, 0.3) 50%, rgba(219, 219, 219, 0.736) 90%);
            box-shadow: 0 0 18px white;
            border-radius: 30px;
            padding: 2rem 2rem 4rem;
            .user{
                color: rgb(50, 179, 191)!important;
                text-shadow:0px 0px 5px rgb(25, 175, 201)!important;
                .pub{
                    color: rgba(255, 0, 0, 0);
                    text-shadow:0px 0px 0px rgba(255, 0, 0, 0)!important;
                
                    
                }
            }    
            .conc{
                font-size: 80px;
                scale: .7;
                opacity: 1;
                color: rgb(48, 28, 70, .3);
                text-shadow:0px 0px 5px rgb(56, 65, 99);
                position: relative;
                .pub{
                    
                    position: absolute;
                    text-shadow:0px 0px 7px rgb(247, 247, 247);
                    bottom: -59px;
                    left: 15.2px;
                    opacity:1;
                    font-size: 50px;
                    
                }
                
            }
            .c1{
                animation: conc 3s linear infinite ;     
                .pub{
                    animation: pub 3s linear infinite;
                    color: rgb(223, 224, 223);
                    
                }
            }
            .c2{
                animation: conc 3s linear 500ms infinite ;     
                .pub{
                    color: rgb(223, 224, 223);
                    animation: pub 3s 400ms linear infinite;
                    
                }
            }
            .c3{
                animation: conc 3s linear 1000ms infinite ;     
                .pub{
                    animation: pub 3s 800ms linear infinite;
                    color: rgb(223, 224, 223);
                    
                }
            }
            .c4{
            
                .pub{
                    animation: non_pub 3s 1200ms linear infinite;
                    
                }
            }
            
        
        
        }
        .i2{
            font-size: 6rem;
            text-shadow: 0 0 8px white;
        }
        .gp{
            position: relative;
            width: 2em;
            span{
                position: absolute;
                top: 0;
                left: .9em;
            }
        }
        .i2-1{
            animation: i2 4700ms ease-in  infinite;
        }
        .i2-2{
            animation: i2 4700ms ease-in 500ms infinite;
        }
        .i2-3{
            animation: i2 4700ms ease-in 1000ms infinite;
        }
        .iuser{
            animation: useri2 4700ms ease-in 1500ms infinite;
            text-shadow: 0 0 8px rgb(88, 210, 167);
        }

    }
@keyframes conc {
    0%{
        color: rgba(48, 28, 70, .3);
    }
    1%{
        color: rgba(48, 28, 70, 1);
        
    }
    28%{
        
        color: rgba(48, 28, 70, 1);
        
        
    }
    30%{
        color: rgba(48, 28, 70, .3);
       
    }
    
}
@keyframes pub {
    0%{
        opacity:0;
        
    }
    4%{
        opacity:.8;
        
        
    }
    28%{
        opacity:1;
        
        
    }
    30%{
        opacity:0;
        
        
    }
    100%{
        opacity: 0;
    }

}
@keyframes non_pub {
    0%{
        opacity:0;
        color: rgba(255, 0, 0, 0);
        
    }
    20%{
        opacity:1;
        color: rgba(255, 0, 0, .8);
        
        
    }
    32%{
        opacity:1;
        color: rgba(255, 0, 0, .8);
        
        
    }
    45%{
        opacity:0;
        color: rgba(255, 0, 0, 0);
        
        
    }

}
@keyframes i2 {
    0%{
        opacity:0;
        scale: 1;
        
    }
    14%{
        opacity:.8;
        
        
    }
    38%{
        opacity:1;
        scale: 1.1;
        
    }
    40%{
        opacity:0;
        
        
    }
    100%{
        opacity: 0;
        scale: 1;
    }

}
@keyframes useri2 {
    0%{
        opacity:0;
        color: white;
        scale: 1;
        
        
    }
    20%{
        opacity:1;
        color: rgb(50, 179, 191);
    }
    32%{
        opacity:1;
        scale: 1.2;
        
    }
    55%{
        opacity:0;
         color: white;
        
    }
    100%{
        opacity:0;
         color: white;
        
    }

}

}





</style>
