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


        <div class="img"></div>
        <div class="container">

            <h1 class="p1">Perche è necessario avere un sito web?</h1>


        </div>
        </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;
 
.img{
    background-image: url('../../public/wave-2.svg');
    background-size: cover;
    background-repeat: no-repeat;
    width:100%;
    background-position: right;
    aspect-ratio: 2;
   
    
    box-shadow: -50px -300px 5px $c-bg, 60px -200px 5px $c-bg;
    
    animation: waves ease-in-out 15s infinite;
}


@keyframes waves {
    0%{
        transform: rotateX(0deg);       
        transition: all linear 3s;
        
    }
    25%{
        
        margin-top: 0px;

    }
    50%{
        transform: rotateX(-40deg);
        background-position: center;

    }
    75%{
        
        
        
        
    }
    100%{
        

        transform: rotateX(0deg);
        background-position: right;
    }
    
   }

.section-a{
    background-color: rgb(178, 222, 237);
    display: flex;
    flex-direction: column;
    
    gap: 1rem;

    position: relative;
}


.section-a .container{
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem;
    font-family: 'Roboto Condensed', sans-serif;

    
}
.p1{
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 7rem;
    text-shadow: 2.5px 2.5px 5px rgba(166, 168, 168, 0.574);
    position: relative;
    color: $c-f-az-op;
}

p{
    font-size: 4rem;
}
</style>
