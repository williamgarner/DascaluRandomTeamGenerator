<template>
    <div id="customizationPage">
        <TeamBoi :background="'#303030'" :shadow="false" id="cust">
            <div id="teamprompt" >How Many Teams?</div>
            <v-slider
                    v-model="$store.state.numTeams"
                    class="align-center thumboi"
                    :max="$store.state.names.length < 30 ? $store.state.names.length : 30"
                    :min="1"
                    hide-details
                    thumb-label="always"
                    thumb-size="50"
                    @input="updateTeams()"
            >
            </v-slider>

            <div class="studentsLeft">
                You have <div class="num">{{numNames}}</div> left to allocate
            </div>
        </TeamBoi>
        <TeamBoi v-if="isValid()" :background="'#303030'" :shadow="false" >
            <v-row class="team-cust">
                <label v-for="team in $store.state.teams" style="alignment: left;">
                    <input
                            class="input"
                            v-model="team.teamName"
                    />
                    <input
                            v-model="team.numberOfPeople"
                            type="Number"
                            :min="1"
                            :max="$store.state.names.length"
                    />
                </label>
            </v-row>
        </TeamBoi>
    </div>
</template>

<script>

    import TeamBoi from "./TeamBoi";

    export default {
        name: "Customization",
        components: {
            TeamBoi
        },
        data() {
            return {
                range: new Array(100).fill(undefined).map((_, i) => i + 1),
                rules: {
                    valid: value => (value >= 1 && value <= 100) || 'Enter a number between 1 and 100'
                }
            }
        },
        computed: {
            numNames: {
                get: function() {
                    let sum =0;
                    this.$store.state.teams.forEach((team) => {
                        sum += parseInt(team.numberOfPeople, 10);

                    });

                    this.$store.state.genAvailable = !(this.$store.state.names.length - sum === 0);

                    // console.log(sum)
                    return this.$store.state.names.length - sum;
                },
                set: function() {

                }
            }
        },
        methods: {
            isValid(){
                return this.$store.state.numTeams >= 1 && this.$store.state.numTeams <= 100;
            },
            updateTeams() {
                if (this.isValid()) {
                    if (this.$store.state.numTeams > this.$store.state.teams.length) {
                        for (let i = this.$store.state.teams.length + 1; i <= this.$store.state.numTeams; i++) {
                            this.$store.state.teams.push({teamName: 'Team ' + i, people: [], numberOfPeople: -1})
                        }

                    } else if (this.$store.state.numTeams < this.$store.state.teams.length) {
                        this.$store.state.teams.length = this.$store.state.numTeams;
                    } else {
                        return
                    }

                    this.updateDist();

                }
            },
            updateDist(){
                let baseDist = Math.floor(this.$store.state.names.length / this.$store.state.numTeams);
                let leftOver = this.$store.state.names.length % this.$store.state.numTeams;

                this.$store.state.teams.forEach((team) => {
                        team.numberOfPeople=baseDist;
                        if(leftOver > 0) {
                            team.numberOfPeople += 1;
                            leftOver--;
                        }
                    }

                )
            },

        }


    }
</script>

<style scoped>
    /deep/ span{
        font-size: 2rem;
    }
    #customizationPage{
        height: 40rem;
    }
    #cust{
        display: flex;
        flex-direction: row;

    }
    #teamprompt{
        margin-right: 2rem;

    }
    .thumboi{
        font-size: 3rem;
    }
    .studentsLeft{
        margin-left: 3rem;
        display: flex;
        flex-direction: row;
    }
    .num{
        margin: 0 .75rem;
        font-size: 3rem;
        font-weight: bold;
    }
    .nums{
        font-size: 2rem;
        width: 4rem;
        flex-shrink: 1;
    }
    .team-cust{
        display: flex;
        height: 25rem;
        overflow: auto;
    }

    .input{
        background-color: #454545;
        color: white;
        margin: 0.25rem;
        padding-left: .25rem;
    }

    .input:focus{
        outline-color: #19428B;
        background-color: #19428B;
        color: white;
    }

    input::placeholder {
        text-align: center;
        color: white;
    }

</style>