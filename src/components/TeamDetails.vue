<template>
    <v-row class="row button-control" align="start" justify="end">
        <v-btn class="button fullscreen" color="blue darken-4 white--text" @click="dialog=true" dark tile>FULL SCREEN</v-btn>
        <v-dialog v-model="dialog" :fullscreen="fullScreen" transition="dialog-bottom-transition" :overlay=false
                  scrollable class="noPaddingPlz">
            <v-card class="classDisplay">
                <v-toolbar style="flex: 0 0 auto;" class="tool-bar" >
                    <div class="toTheLeft">Generated Teams</div>
                    <v-btn color="blue darken-4 white--text" class="button close" @click.native="dialog = false" dark fab>
                        x
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <div class="card-control">
                        <div class="card" v-for="team in teams">
                            <v-card tile min-height="20rem" min-width="15rem">
                                {{team.number}}
                            </v-card>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: "TeamDetails",
        data: () => ({
            dialog: false,
            fullScreen: true,
            search: '',
            pagination: {},
            selected: [],
            teams: [
                {number: 'one'},
                {number:'two'},
                {number:'three'},
                {number:'four'},
                {number:'five'},
                {number: 'one'},
                {number:'two'},
                {number:'three'},
                {number:'four'},
                {number:'five'},
                {number: 'one'},
                {number:'two'},
                {number:'three'},
                {number:'four'},
                {number:'five'},
                {number: 'one'},
                {number:'two'},
                {number:'three'},
                {number:'four'},
                {number:'five'},
            ]

        }),
        computed: {
            pages () {
                return this.pagination.rowsPerPage ? Math.ceil(this.items.length / this.pagination.rowsPerPage) : 0
            }
        },
    }
</script>

<style scoped>
    .button-control{
        height:1rem;
    }
    .noPaddingPlz{
        padding: 0;
    }
    .card{
        margin: 1rem;
    }
    .classDisplay{
        background-image: url("../../assets/images/betterBlue.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        color: white;

    }
    .tool-bar{
        background-color: #202020;
        display: flex;
        padding: 0 1rem;
        color: white;
        justify-content: flex-start;
        width: 100%;

    }
    #toolTitle{
        flex-grow: 10;
        color: white;
    }
    .card-control{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
    .close{
        font-size: 1.5rem;
        max-width: 2rem;
        max-height: 2rem;
        justify-self: flex-end;
        margin-left: 94rem;
    }
    .fullscreen{
        font-size: 1.25rem;
    }
    .button{
        font-weight:bold;
        flex-grow: 1;
        font-style: normal;
    }
    .toTheLeft{
        justify-self: flex-start;
    }


</style>