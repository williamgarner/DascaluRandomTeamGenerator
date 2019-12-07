<template>
    <div>
        <v-row class="row">
            <v-col class="column" cols="6">
                <v-btn-toggle ripple tile mandatory dark class="toggle">
                    <v-btn block color="purple darken-4" class="button" x-large tile>MANUAL</v-btn>
                    <v-btn block color="purple darken-4" class="button" x-large tile>FILE UPLOAD</v-btn>
                </v-btn-toggle>

            </v-col>
        </v-row>
        <v-row class="row">
            <v-col class="column" cols="12">
                <TeamBoi id="names" :background="'#454545'" :shadow="false">
                    <input
                            v-for="(thisInput, index) in inputs"
                            v-model="thisInput.value"
                            :key="index"
                            type="text"
                            @input="addInput(thisInput)"
                            @keyup.enter="pressEnter($event, thisInput)">
                </TeamBoi>
            </v-col>
        </v-row>
    </div>
</template>

<script>


    import TeamBoi from "./TeamBoi";
    export default {
        name: "StudentStuff",
        components: {
            TeamBoi

        },
        data() {
            return {
                buttons: ['Upload File'],
                inputs: [{value: '', addNext: true}]
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
            }
        }
    }
</script>

<style scoped>

input{
    background: #454545;
    color: white;
    margin: 0.25rem;
}
input:focus{
    outline-color: #6B42A0;
    background-color: #6B42A0;
}

div{
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: left;
}
    #names{
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