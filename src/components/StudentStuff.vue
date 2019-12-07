<template>
    <div>
        <v-row class="row">
            <v-col class="column" cols="6">
                <v-btn-toggle tile mandatory dark class="toggle">
                    <v-btn block color="blue darken-4" class="button" large tile @click="changeToggle(true)">MANUAL</v-btn>
                    <v-btn block color="blue darken-4" class="button" large tile @click="changeToggle(false)">FILE UPLOAD</v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>
        <v-row class="row">
            <v-col class="column" cols="12">
                <TeamBoi v-if="manualSelected" id="names" :background="'#303030'" :shadow="false">
                    <input
                            v-for="(thisInput, index) in inputs"
                            v-model="thisInput.value"
                            :key="index"
                            type="text"
                            @input="addInput(thisInput)"
                            @keyup.enter="pressEnter($event, thisInput)"
                            class="input">
                </TeamBoi>
                <TeamBoi v-else id="file" :background="'#303030'" :shadow="false">
                    <FileUpload></FileUpload>
                </TeamBoi>
            </v-col>
        </v-row>
    </div>
</template>

<script>


    import TeamBoi from "./TeamBoi";
    import FileUpload from "./FileUpload";
    export default {
        name: "StudentStuff",
        components: {
            FileUpload,
            TeamBoi

        },
        data() {
            return {
                buttons: ['Upload File'],
                inputs: [{value: '', addNext: true}],
                manualSelected: true,
                test: {
                    background: white
                }
            }
        },
        methods: {
            addInput(input) {
                if(input.addNext) {
                    input.addNext = false;
                    this.inputs.push({
                        value: '',
                        addNext: true
                    });
                }
            },
            pressEnter(event, input) {
                event.target.nextElementSibling.focus();
                this.addInput(input);
            },
            changeToggle(isManualSelected) {
                this.manualSelected = isManualSelected;
            }
        }
    }
</script>

<style scoped>

.input{
    background-color: #454545;
    color: white;
    margin: 0.25rem;
}
.input:focus{
    outline-color: #19428B;
    background-color: #19428B;
    color: white;
}
.selected{
    background-color: white;
}


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

    input{
        background: white;
        color: black;
        margin: 0.25rem;
    }
    div{
        padding: 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    .button{
        font-weight:bold;
        flex-grow: 1;
        font-size: 1.5rem;
    }
    .toggle{
        flex-direction: row;
        background-color: #353535;
        padding: 0;
        display: flex;
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