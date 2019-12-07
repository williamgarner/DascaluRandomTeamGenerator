<template>
    <v-row class="row button-control" align="start" justify="end">
        <v-btn class="button fullscreen" color="blue darken-4 white--text" @click="dialog=true" dark tile>FULL SCREEN</v-btn>
        <v-dialog v-model="dialog" :fullscreen="fullScreen" transition="dialog-bottom-transition" :overlay=false
                  scrollable class="noPaddingPlz">
            <v-card>
                <v-toolbar style="flex: 0 0 auto;" class="tool-bar" >
                    <v-btn color="blue darken-4 white--text" class="button close" @click.native="dialog = false" dark fab>
                        x
                    </v-btn>

                </v-toolbar>
                <v-card-text class="classDisplay">
                    <v-card-title>
                        Nutrition
                        <v-spacer></v-spacer>
                    </v-card-title>
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
    .classDisplay{
        background-image: url("../../assets/images/betterBlue.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .tool-bar{
        background-color: #202020;
        justify-content: flex-end;
        display: flex;
        padding: 0 1rem;
    }
    #toolTitle{
        flex-grow: 10;
        color: white;
    }
    .close{
        font-size: 1.5rem;
        max-width: 2rem;
        max-height: 2rem;
    }
    .fullscreen{
        font-size: 1.25rem;
    }
    .button{
        font-weight:bold;
        flex-grow: 1;
        font-style: normal;
    }
</style>