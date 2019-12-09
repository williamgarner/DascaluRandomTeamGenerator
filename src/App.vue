<template>
  <v-app id="app">
    <!--    <img alt="Vue logo" src="./src/assets/logo.png">-->
    <Page/>
  </v-app>
</template>

<script>
  import Page from './components/Page.vue'
  export default {
    name: 'app',
    components: {
      Page
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');

  body{
    height: 100%;
    width: 100%;

    ms-overflow-style: none;
    overflow: hidden;
    position: fixed;

  }
  body::-webkit-scrollbar {
    display: none;
  }
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: 'Open Sans Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #FFFFFF;
    font-size: 2vw;
    max-height: 100%;

    background-image: url("./assets/betterBlue.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    padding: 0rem 0.5rem;

  }

  #blockColorblindContent{
    height: 0;
  }
  #colorBlindSVG{
    height: 0;
  }
</style>
