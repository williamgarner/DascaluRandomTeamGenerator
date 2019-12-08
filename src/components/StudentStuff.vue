<template>
    <div>
        <v-row class="row">
            <v-col class="column" cols="6">
                <v-btn-toggle ripple tile mandatory dark class="toggle">
                    <v-btn block color="blue darken-4" class="button" x-large tile @click="changeToggle(true)">MANUAL</v-btn>
                    <v-btn block color="blue darken-4" class="button" x-large tile @click="changeToggle(false)">FILE UPLOAD</v-btn>
                </v-btn-toggle>

            </v-col>
        </v-row>
        <v-row class="row">
            <v-col class="column" cols="12">
                <TeamBoi v-if="manualSelected" id="names" :background="'#303030'" :shadow="false">
                    <NameInputs/>
                </TeamBoi>
                <TeamBoi v-else id="file" :background="'#303030'" :shadow="false">
                    <FileUpload/>
                </TeamBoi>
            </v-col>
        </v-row>
    </div>
</template>

<script>


    import TeamBoi from "./TeamBoi";
    import FileUpload from "./FileUpload";
    import NameInputs from "./NameInputs";
    export default {
        name: "StudentStuff",
        components: {
            NameInputs,
            FileUpload,
            TeamBoi

        },
        data() {
            return {
                buttons: ['Upload File'],
                inputs: [{value: '', addNext: true}],
                manualSelected: true,
            }
        },
        methods: {
            changeToggle(isManualSelected) {
                this.manualSelected = isManualSelected;
            }
        }
    }
</script>

<style scoped>

div{
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: left;
}
    #names, #file{
        margin-top: 2rem;
    }
    div{
        padding: 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    .button{
        font-weight:bold
    }
    .toggle{
        flex-direction: row;
        background-color: #353535;
        padding: 0;
    }
    .row{
        padding: 0;
        justify-content: center;
        flex-direction: column;
    }
    .column{
        justify-content: center;
        padding: 0;
    }

#teams{
    margin-top: 2rem;
}

</style>