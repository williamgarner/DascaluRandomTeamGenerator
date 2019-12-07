<template>
  <v-container fluid>
    <h1>{{ msg }}</h1>
    <v-row justify="center">
      <v-col
        cols="6"
      >
        <TeamBoi :background="'#353535'" :shadow="true">
          <StudentStuff></StudentStuff>
        </TeamBoi>
      </v-col>
      <v-col
        cols="6">
        <TeamBoi :background="'#353535'" :shadow="true">
          <TeamStuff></TeamStuff>
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
  },
  props: {
    msg: String
  },
  data: () =>( {
    pageLayout: [
      '<StudentStuff></StudentStuff>',
      '<TeamStuff></TeamStuff>'
    ]
  })
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
