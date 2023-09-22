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


        <div class="wave"></div>
        <div class="container">

            <h1 class="p1">Perche è necessario avere un sito web?</h1>


        </div>
        </div>
</template>

<style lang="scss" scoped >
   @use '../assets/styles/general.scss' as *;


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
    font-size: $d-title1-max;
    text-shadow: 2.5px 2.5px 5px rgba(166, 168, 168, 0.574);
    position: relative;
    color: $c-f-az-op;
}

p{
    font-size: 4rem;
}
</style>
