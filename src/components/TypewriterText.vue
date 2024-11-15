<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 100, // Millisecondi tra un carattere e l'altro
    },
  },
  data() {
    return {
      displayedText: "", // Testo mostrato durante l'animazione
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const textArray = this.text.split(""); // Divide il testo in caratteri
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < textArray.length) {
          this.displayedText += textArray[index]; // Aggiungi un carattere alla volta
          index++;
        } else {
          clearInterval(typeInterval); // Ferma l'animazione una volta completata
        }
      }, this.speed);
    },
  },
};
</script>

<template>
  <div>
    <p>{{ displayedText }}</p>
  </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
  p{
    white-space: pre-wrap; /*   Per rispettare gli spazi del testo originale */
    font-family: 'Courier New', Courier, monospace;
    font-weight: 800;
    width: 100%;
    line-height: $fs_md;
    text-align: right;
    font-size: $fs_sml;
    margin: 0 auto; 
    font-weight: lighter;

  }
  @media (max-width: $bp_xlg) {

    p{
      text-align: center !important;
    }
        
  }
  

</style>

