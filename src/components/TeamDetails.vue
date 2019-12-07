<template>
    <v-row class="row button-control" fluid>
        <v-col cols="12">
            <v-btn block class="button fullscreen" color="blue darken-4 white--text" @click="dialog=true" dark tile>FULL SCREEN</v-btn>
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
                                <v-card flat tile min-height="20rem" min-width="15rem" color="grey darken-4 white--text">
                                    <div class="card-title">Team {{team.number}}</div>
                                    <ul>
                                        <li v-for="members in team.members">
                                            {{members.name}}
                                        </li>
                                    </ul>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <div class="card page-card">
                <v-card flat tile height="32rem" min-width="15rem" color="grey darken-4 white--text">
                    <div class="card-title">Team {{teams[page-1].number}}</div>
                    <ul>
                        <li v-for="members in teams[page-1].members">
                            {{members.name}}
                        </li>
                    </ul>
                </v-card>
            </div>
            <v-pagination
                    class="paginations"
                    v-model="page"
                    :length="teams.length"
                    :total-visible="7"
            >
            </v-pagination>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "TeamDetails",
        data: () => ({
            page: 1,
            dialog: false,
            fullScreen: true,
            search: '',
            pagination: {},
            selected: [],
            teams: [
                {
                    number: '1',
                    members: [{name:'Will'}, {name:'Leah'}, {name:'Natalie'},{name:'Will'}, {name:'Leah'}, {name:'Natalie'},{name:'Will'}, {name:'Leah'}, {name:'Natalie'},{name:'Will'}, {name:'Leah'}, {name:'Natalie'}]
                },
                {
                    number:'2',
                    members: [{name:'Terra'}, {name:'Derek'}]
                },
                {
                    number:'3',
                    members: []
                },
                {
                    number:'4',
                    members: []
                },
                {number:'5',
                    members: []
                },
                {number: '6',
                    members: []
                },
                {number:'7',
                    members: []
                },
                {number:'8',
                    members: []
                },
                {number:'9',
                    members: []
                },
                {number:'10',
                    members: []
                },
                {number: '11',
                    members: []
                },
                {number:'12',
                    members: []
                },
                {number:'13',
                    members: []
                },
                {number:'14',
                    members: []
                },
                {number:'15',
                    members: []
                },
                {number: '16',
                    members: []
                },
                {number:'17',
                    members: []
                },
                {number:'18',
                    members: []
                },
                {number:'19',
                    members: []
                },
                {number:'20',
                    members: []
                },
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
    li{
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }
    ul{
        margin-left: 1rem;
    }
    .button-control{
        height:1rem;
    }
    .noPaddingPlz{
        padding: 0;
    }
    .card{
        margin: 1rem;
        background-color: #202020;
    }
    .card-title{
        position: sticky;
        top: 0;
        padding: 1rem;
        font-size: 2rem;
        background-color: #212121;
        flex-grow: 1;
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
    .paginations{
        border-radius: 0;
    }
    .page-card{
        margin-left: 0;
        margin-right: 0;
        overflow: auto;
    }

</style>