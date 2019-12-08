<template>
    <div >
        <TeamBoi :background="'#303030'" :shadow="false" style="margin: 0; padding: 0; height: 5rem">
            <v-row dense class="row" align-content="center" justify="center">
                <v-col cols="4" class="column">
                    <v-checkbox v-model="headersSelected" class="button" label="Headers Included" style="color: white"></v-checkbox>
                </v-col>
                <v-col cols="7" class="column">
                    <v-btn style="color: white;" class="button" block color="blue darken-4" x-large tile @click="$refs.fileUpload.click()">Click to Upload Names</v-btn>
                    <input hidden type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" ref="fileUpload" @click="clearInput" @change="parseFile($event.target.name, $event.target.files)" >
                </v-col>
            </v-row>
        </TeamBoi>
        <TeamBoi :background="'#303030'" :shadow="false">
            <NameInputs :key="inputs.length" :inputs="inputs"/>
        </TeamBoi>
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
                headersSelected: false
            }
        },
        methods: {
            clearInput() {
                this.$refs.fileUpload.value = '';
            },
            parseFile(fieldName, fileList) {
                if(fileList[0]) {
                    const reader = new FileReader();
                    reader.readAsText(fileList[0]);

                    reader.onload = (event) => {

                        let names = event.target.result.split('\n');
                        if(this.headersSelected)
                            names = names.splice(1);
                        if(this.inputs.length)
                            this.inputs.length = 0;


                        names.forEach((name) => {
                            if(name !== '')
                                this.inputs.push({value: name, addNext: false})
                        });
                        this.inputs.push({value: '', addNext: true});
                    };

                    reader.onerror = function(evt) {
                        if(evt.target.error.name === "NotReadableError") {
                            alert("Canno't read file !");
                        }
                    };
                } else {

                }

            }
        }
    }
</script>

<style scoped>

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

    .toggle{
        flex-direction: row;
        background-color: #353535;
        padding: 0;
        display: flex;
    }

#teams{
    margin-top: 2rem;
}

</style>