<template>
    <div>
        <TeamBoi :background="'#303030'" :shadow="false" style="margin: 0; padding: 0; height: 5rem">
            <v-row dense class="row" align-content="center" justify="center">
                <v-col cols="4" class="column">
                    <v-checkbox v-model="headersSelected" class="button" label="Number of Teams" dark/>
                </v-col>
                <v-col cols="7" class="column">
                    <v-btn dark class="button" color="blue darken-4 white--text" large tile>Click to Upload Names</v-btn>
                    <input hidden type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" ref="fileUpload" @click="clearInput" @change="parseFile($event.target.name, $event.target.files)" >
                </v-col>
            </v-row>
        </TeamBoi>
        <TeamBoi id="teams" :background="'#353535'" :shadow="false" style="overflow: auto; height: 30rem">
           <TeamDetails/>
        </TeamBoi>

    </div>
</template>

<script>



    import TeamBoi from "./TeamBoi";
    import TeamDetails from "./TeamDetails";

    export default {
        name: "TeamStuff",
        components: {
            TeamBoi,
            TeamDetails
        },
        data: () => ({
            buttons: [
                'GENERIC',
                'YES'
            ],
            nums:[1,2,3,4,5],
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
    .row{
        padding: 0;
        justify-content: center;
        flex-direction: row;
    }
    .column{
        padding: 0;
        justify-content: center;
        max-height: 3rem;
    }
    .button{
        font-weight:bold;
        flex-grow: 1;
        font-style: normal;
        color: white;
    }

</style>