<template>
    <div>
        <v-row class="row">
            <v-text-field dark
                      class="select"
                    label="NUMBER OF TEAMS"
                          max="50"
                          min="1"
                          step="1"
            ></v-text-field>
        </v-row>
        <v-row
                class="row"
        >
            <v-col cols="4" class="column">
                <div class="label">TEAM NAMES</div>
            </v-col>
            <v-col cols="8" class="column">
                <v-btn-toggle tile mandatory dark class="toggle" background-color="#353535">
                    <v-btn color="purple darken-4" class="button" x-large tile>GENERIC</v-btn>
                    <v-btn color="purple darken-4" class="button" x-large tile>CUSTOM</v-btn>
                </v-btn-toggle>
            </v-col>

        </v-row>
        <v-row
                class="row"
        >
            <v-col cols="4" class="column">
                <div class="label">DISTRIBUTION</div>
            </v-col>
            <v-col cols="8" class="column">
                <v-btn-toggle tile mandatory dark class="toggle" background-color="#353535">
                    <v-btn color="purple darken-4" class="button" x-large tile>EVEN</v-btn>
                    <v-btn color="purple darken-4" class="button" x-large tile>CUSTOM</v-btn>
                </v-btn-toggle>
            </v-col>

        </v-row>
    </div>
</template>

<script>


    export default {
        name: "TeamStuff",
        data: () => ({
            buttons: [
                'GENERIC',
                'YES'
            ],
            nums:[1,2,3,4,5]

        })
    }
</script>

<style scoped>
    div{
        padding: 2rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: left;
        font-size: 1.5rem;
    }

    .button{
        font-weight:bold;
        flex-grow: 1;
    }
    .toggle{
        flex-direction: row;
        background-color: #353535;
        padding: 0;
        display:flex;
    }
    .row{
        padding: 0;
        justify-content: center;
        flex-direction: row;
        margin-bottom:1rem;
    }
    .column{
        padding: 0;
        justify-content: center;
    }
    .label{
        padding:0;
    }
    .select{
        padding: 0;
        font-weight: bold;
    }
</style>