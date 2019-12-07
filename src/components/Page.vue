<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8">
        <h1>THE DASCALU RANDOM TEAM GENERATOR</h1>
      </v-col>
      <v-col cols="3">
        <h2><v-progress-linear value="40" height="60" color="black" background-color="#353535" bottom="true"/></h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <TeamBoi :background="'#202020'" :shadow="true">
          <StudentStuff/>
        </TeamBoi>
      </v-col>
      <v-col cols="6">
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
  name: 'Page',
  components: {
    TeamStuff,
    StudentStuff,
    TeamBoi
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
    padding-top: 1rem;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }



</style>
