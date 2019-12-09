<template>
	<v-container fluid id="page">
		<v-row justify="center" align="center">
			<v-col>
				<h1>THE DASCALU RANDOM TEAM GENERATOR</h1>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col v-if="currentPage === 1" cols="12" style="padding: 0 0.4rem">
				<TeamBoi :background="'#202020'" :shadow="true" style="margin-bottom: 1rem;">
					<StudentStuff/>
				</TeamBoi>
			</v-col>
			<v-col v-else-if="currentPage === 2" cols="12" style="padding: 0 0.4rem">
				<TeamBoi :background="'#202020'" :shadow="true" style="margin-bottom: 1rem;height:">
					<Customization/>
				</TeamBoi>
			</v-col>
			<v-col v-else-if="currentPage === 3" cols="12" style="padding: 0 0.4rem">
				<TeamBoi :background="'#202020'" :shadow="true" style="margin-bottom: 1rem;">
					<TeamDetails/>
				</TeamBoi>
			</v-col>
		</v-row>
        <v-row >
            <v-col cols="6">
                <v-btn class="button" :block="true" height="60" tile color="#2337ad" dark v-if="currentPage === 2 || currentPage === 3" @click="backButton">Back</v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn class="button" :block="true" height="60" tile color="#2337ad" dark v-if="currentPage === 1" @click="nextButton">Next</v-btn>
                <v-btn :disabled="$store.state.genAvailable" class="button" :block="true" height="60" tile color="#2337ad" dark v-if="currentPage === 2" @click="generateButton">Generate Teams</v-btn>
                <v-progress-linear stream buffer-value="0" height="60" color="#2337ad" background-color="#353535" v-if="currentPage === 3"/>
            </v-col>
        </v-row>
	</v-container>
</template>

<script>

	import TeamBoi from "./TeamBoi";
	import StudentStuff from "./StudentStuff";
	import TeamDetails from "./TeamDetails";
	import Customization from "./Customization";

	export default {
		name: 'Page', /*name of vue*/
		components: {
		    StudentStuff,
			TeamBoi,
            TeamDetails,
			Customization
		},
		data() {
			return {
				buttonShowing: true,
				currentPage:1
			}
		},
		methods: {
			generateButton() {
				this.currentPage = 3;
                var snd = new Audio("assets/audio/notYourTeam.wav");
				snd.currentTime=0;
				snd.play();

				const randomNames = this.shuffle(this.$store.state.names);
				console.log(randomNames);

				let currentName = 0;
				this.$store.state.teams.forEach((team) => {
					team.people = randomNames.slice(currentName,  currentName + parseInt(team.numberOfPeople, 10)).map(name => name.value);
					currentName += parseInt(team.numberOfPeople, 10);
				});
			},
            backButton(){
			    this.currentPage--;
			    if(this.currentPage === 1) {
					this.$store.state.names.push({
						value: '',
						addNext: true
					});
				}
            },
			nextButton(){
				this.$store.state.names = this.$store.state.names.filter((name) => {return name.value !== ''});
				this.currentPage++;
			},
			shuffle(arra1) {
				var ctr = arra1.length, temp, index;

				// While there are elements in the array
				while (ctr > 0) {
					// Pick a random index
					index = Math.floor(Math.random() * ctr);
					// Decrease ctr by 1
					ctr--;
					// And swap the last element with it
					temp = arra1[ctr];
					arra1[ctr] = arra1[index];
					arra1[index] = temp;
				}
				return arra1;
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#page {
		width: 100%;
		height: 100%;
		clip: auto;
		position: absolute;
		overflow: hidden;
		padding: 0 3rem;
	}

	h1{
		/*Padding: 2rem;
		  padding-top: 2rem; */
	}
	h2{
		padding-right: 2rem;
	}
	h3{
		margin: 40px 0 0;
	}
	ul{
		list-style-type: none;
		padding: 0;
	}
	li{
		display: inline-block;
		margin: 0 10px;
	}
	a{
		color: #42b983;
	}
	.button{
		font-weight: bolder;
		flex-grow: 1;
		font-size: 2.25rem;
	}

</style>