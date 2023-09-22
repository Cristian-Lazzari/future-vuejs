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
  <div class="section-1">
            <div class="b-2"></div>
            <div class="b-3"></div>
            <div class="b-5"></div>
            <div class="b-4"></div>
            <div class="b-1"></div>
            <div class="b-6"></div>
            <div class="container">
     
                <div class="c-title">
                    <h1>Future +</h1>
                </div>
    
            </div>
            
        </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
   .section-1{
    background-color: $c-bg;
    height: 100%;
    position: relative;
    scroll-snap-align: start;
}
.section-1 .container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.section-1 .container .c-title{
    height: 90px;
    width: 380px;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid $c-white;
    box-shadow: 3px 3px 15px black;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 12;
}
.section-1 .container .c-title h1{
    font-family: 'Bukhari Script', sans-serif;
    font-size: 4rem;  
    display: inline;
    z-index: 100;
    color: $c-white;
    text-shadow: 4px 4px 6px black;
    animation: pulselogo 3.3s ease-in-out infinite;
    
}
.b-1, .b-2, .b-3, .b-4, .b-5, .b-6, .b-6{
    position: absolute;
    z-index: 10;
    transition: all ease-in-out 1s;
    filter: blur(90px);

    /* border-radius: 70px; */
}
.b-1:hover{
    height: 370px;
    width: 260px;
    transition: all linear 1s !important;
}
.b-2:hover{
    height: 370px;
    width: 260px;
    transition: all linear 1s !important;
}
.b-3:hover{
    height: 170px;
    width: 260px;
    transition: all linear 1s !important;
}
.b-4:hover{
    height: 370px;
    width: 260px;
    transition: all linear 1s !important;
}
.b-5:hover{
    height: 370px;
    width: 260px;
    transition: all linear 1s !important;
}
.b-6:hover{
    height: 370px;
    width: 260px;
    transition: all linear 1s !important;
}
.b-1{
    background-color: #5D0B53;
    top: 30%;
    left: 30%;
    height: 200px;
    width: 150px;
    animation: loopb1 linear 7s infinite;
}
.b-2{
    background-color: #7756D6;
    top: 15%;
    left: 15%;
    height: 200px;
    width: 150px;
    animation: loopb2 linear 10s infinite;
}
.b-3{
    background-color: #0656b8;
    top: 5%;
    left: 5%;
    height: 200px;
    width: 200px;
}
.b-4{
    background-color: #04bdaa;
    bottom: 30%;
    right: 30%;
    height: 300px;
    width: 200px;
}
.b-5{
    background-color: #7756D6;
    bottom: 15%;
    right: 15%;
    height: 300px;
    width: 250px;
}
.b-6{
    background-color: #0656b8;
    bottom: 5%;
    right: 5%;
    height: 200px;
    width: 200px;
}

/* 
@keyframes pulselogo {
    0%{
        scale: 1;
    }
    36%{
        scale: 1.03;
    }

    100%{
        scale: 1;
    }
}  */

@keyframes loopb1 {
    0%{
        scale: 1;
        top: 30%;
        left: 30%;
        
    }
    30%{
        scale: 1.05;
        top: 35%;
        left: 30%;
    }
    40%{
        scale: 1;
        top: 35%;
        left: 32.5%;
    }
    50%{
        scale: 1.06;
        top: 32.5%;
        left: 32.5%;
    }
    80%{
        scale: 1;
        top: 32.5%;
        left: 27.5%;
    }
    90%{
        scale: 1.05;
        top: 30%;
        left: 27.5%;
    }
    100%{
        scale: 1;
        top: 30%;
        left: 30%;
    }
} 
@keyframes loopb2 {
    0%{
        scale: 1;
        top: 15%;
        left: 15%;
        
    }
    10%{
        scale: 1.05;
        top: 13%;
        left: 15%;
    }
    50%{
        scale: 1.05;
        top: 20%;
        left: 22%;
    }


    90%{
        scale: 1.05;
        top: 13%;
        left: 20.5%;
    }
    100%{
        scale: 1;
        top: 15%;
        left: 15%;
    }
} 



</style>
