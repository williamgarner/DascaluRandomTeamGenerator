<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col>
        <h1>THE DASCALU RANDOM TEAM GENERATOR</h1>
      </v-col>
      <v-col cols="4">
        <h2>
          <v-btn class="button" :block="true" height="60" tile color="#2337ad" dark v-if="buttonShowing" @click="progressButton">Generate Teams</v-btn>
          <v-progress-linear stream buffer-value="0" height="60" color="#2337ad" background-color="#353535"v-else/>
        </h2>
       </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6" style="padding: 0 0.4rem">
        <TeamBoi :background="'#202020'" :shadow="true">
          <StudentStuff/>
        </TeamBoi>
      </v-col>
      <v-col cols="6" style="padding: 0 0.4rem">
        <TeamBoi :background="'#202020'" :shadow="true">
          <TeamStuff/>
        </TeamBoi>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import TeamBoi from "./TeamBoi";
  import StudentStuff from "./StudentStuff";
  import TeamStuff from "./TeamStuff";

export default {
  name: 'Page', /*name of vue*/
  components: {
    TeamStuff,
    StudentStuff,
    TeamBoi
  },
  data() {
    return {
      buttonShowing: true
    }
  },
  methods: {
    progressButton() {
      this.buttonShowing = !this.buttonShowing;
      var snd = new Audio("assets/audio/notYourTeam.wav");
      snd.currentTime=0;
      snd.play();
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    /*Padding: 2rem;
      padding-top: 2rem; */
  }
  h2{
    padding-right: 2rem;
  }
  h3{
    margin: 40px 0 0;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #42b983;
  }
  .button{
    font-weight: bolder;
    flex-grow: 1;
    font-size: 2.25rem;
  }

</style>