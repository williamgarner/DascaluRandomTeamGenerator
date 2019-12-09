<template>
    <v-row class="row button-control" fluid>
        <v-col cols="12">
            <v-card-text>
                <div class="card-control">
                    <div class="card" v-for="team in $store.state.teams">
                        <v-card flat tile min-height="15rem" min-width="15rem" color="grey darken-3 white--text">
                            <div class="card-title">{{team.teamName}}</div>
                            <ul>
                                <li v-for="person in team.people">
                                    {{person}}
                                </li>
                            </ul>
                        </v-card>
                    </div>
                </div>
            </v-card-text>
        </v-col>
    </v-row>
</template>

<script>

    export default {
        name: "TeamDetails"
    }
</script>

<style scoped>
    li{
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }
    ul{
        margin-left: 1rem;
    }
    .button-control{
        display: flex;
        height:43rem;
        overflow: auto;
    }

    .card{
        margin: 1rem;
        box-shadow: .5rem .5rem .75rem #000000;
        background: #424242;

    }
    .card-title{
        padding: 1rem;
        font-size: 2rem;
        flex-grow: 1;
    }
    .card-control{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
</style>