<template>
  <v-container fluid>
    <v-row align="start" justify="center">
      <v-col cols="9">
        <h1> THE DASCALU RANDOM TEAM GENERATOR</h1>
      </v-col>
      <v-col cols="3">
        <v-progress-linear value="40" height="40" color="black" background-color="#353535"/>
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
    padding: 0 7.5rem;
    padding-top: 2rem;
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
