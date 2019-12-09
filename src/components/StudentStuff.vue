<template>
    <div id="wholeThing">
        <TeamBoi :background="'#303030'" :shadow="false" id="top">
            <v-row dense class="row" align-content="center" justify="center">
                <v-col cols="4" class="column">





                    <label class="toggle">
                        <input class="toggle__input" type="checkbox" v-model="headersSelected" checked>
                        <span class="toggle__label">
                            <span class="toggle__text">Headers Included</span>
                        </span>
                    </label>





                </v-col>
                <v-col cols="7" class="column">
                    <v-btn dark class="button" color="blue darken-4" x-large tile @click="$refs.fileUpload.click()">Click to Upload A CSV</v-btn>
                    <input hidden type="file" accept=".csv" ref="fileUpload" @click="clearInput" @change="parseFile($event.target.name, $event.target.files)" >
                </v-col>
            </v-row>
        </TeamBoi>
        <TeamBoi id="names" :background="'#303030'" :shadow="false">
            <NameInputs/>
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
                headersSelected: false
            }
        },
        methods: {
            clearInput() {
                alert("This will overwrite any names that are already there")
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
                        if(this.$store.state.names.length)
                            this.$store.state.names.length = 0;


                        names.forEach((name) => {
                            if(name !== '')
                                this.$store.state.names.push({value: name, addNext: false})
                        });
                        this.$store.state.names.push({value: '', addNext: true});
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

    #wholeThing {
        height: 42rem;
        padding: 0;
    }

    #names {
        overflow: auto;
        max-height: 30rem;
       alignment: left;
        align-items: flex-start;
        text-align: justify;
        display: flex;
    }

    #top {
        margin: 0;
        padding: 0;
        max-height: 5rem
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
    }


div{
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: left;
}

/deep/ .content{
    font-size: 2rem;
}




    /*
    =====
    LEVEL 1. CORE STYLES
    =====
    */

    .toggle{
        --uiToggleSize: var(--toggleSize, 10px);
        --uiToggleIndent: var(--toggleIndent, .4em);
        --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);
        --uiToggleColor: var(--toggleColor, #000);
        --uiToggleDisabledColor: var(--toggleDisabledColor, #868e96);
        --uiToggleBgColor: var(--toggleBgColor, #fff);
        --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);
        --uiToggleArrowColor: var(--toggleArrowColor, #fff);

        position: relative;
        align-content: flex-start;
        display: flex;

    }

    .toggle__input{
        position: absolute;
        left: -99999px;
    }

    .toggle__label{
        display: inline-flex;
        cursor: pointer;
        min-height: 1rem;
        padding-left: 0
    }

    .toggle__label:before, .toggle__label:after{
        content: "";
        box-sizing: border-box;
        width: 1em;
        height: 1em;
        font-size: var(--uiToggleSize);

        position: absolute;
        left: 0;
        top: 0;
    }

    .toggle__label:before{
        border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);
        z-index: 2;
    }

    .toggle__input:disabled ~ .toggle__label:before{
        border-color: var(--uiToggleDisabledColor);
    }

    .toggle__input:focus ~ .toggle__label:before{
        box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
    }

    .toggle__input:not(:disabled):checked:focus ~ .toggle__label:after{
        box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
    }

    .toggle__input:not(:disabled) ~ .toggle__label:after{
        background-color: var(--uiToggleColor);
        opacity: 0;
    }

    .toggle__input:not(:disabled):checked ~ .toggle__label:after{
        opacity: 1;
    }

    .toggle__text{
        margin-top: auto;
        margin-bottom: auto;
        font-size: 1.5rem;
        margin-left: 2.25rem;
    }

    /*
    The arrow size and position depends from sizes of square because I needed an arrow correct positioning from the top left corner of the element toggle
    */

    .toggle__text:before{
        content: "";
        box-sizing: border-box;
        width: 0;
        height: 0;
        font-size: var(--uiToggleSize);

        border-left-width: 0;
        border-bottom-width: 0;
        border-left-style: solid;
        border-bottom-style: solid;
        border-color: var(--uiToggleArrowColor);

        position: absolute;
        top: .5428em;
        left: .2em;
        z-index: 3;

        transform-origin: left top;
        transform: rotate(-40deg) skew(10deg);
    }

    .toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
        width: .5em;
        height: .25em;
        border-left-width: var(--uiToggleArrowWidth);
        border-bottom-width: var(--uiToggleArrowWidth);
        will-change: width, height;
        transition: width .1s ease-out .2s, height .2s ease-out;
    }

    /*
    =====
    LEVEL 2. PRESENTATION STYLES
    =====
    */

    /*
    The demo skin
    */

    .toggle__label:before, .toggle__label:after{
        border-radius: 2px;
    }

    /*
    The animation of switching states
    */

    .toggle__input:not(:disabled) ~ .toggle__label:before,
    .toggle__input:not(:disabled) ~ .toggle__label:after{
        opacity: 1;
        transform-origin: center center;
        will-change: transform;
        transition: transform .2s ease-out;
    }

    .toggle__input:not(:disabled) ~ .toggle__label:before{
        transform: rotateY(0deg);
        transition-delay: .2s;
    }

    .toggle__input:not(:disabled) ~ .toggle__label:after{
        transform: rotateY(90deg);
    }

    .toggle__input:not(:disabled):checked ~ .toggle__label:before{
        transform: rotateY(-90deg);
        transition-delay: 0s;
    }

    .toggle__input:not(:disabled):checked ~ .toggle__label:after{
        transform: rotateY(0deg);
        transition-delay: .2s;
    }

    .toggle__text:before{
        opacity: 0;
    }

    .toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
        opacity: 1;
        transition: opacity .1s ease-out .3s, width .1s ease-out .5s, height .2s ease-out .3s;
    }

    .toggle{
        --toggleColor: blue;
        --toggleBgColor: darkblue;
        --toggleSize: 25px;
    }

</style>