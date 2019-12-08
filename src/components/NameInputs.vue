<template>
	<label style="width: 100%;">
		<input
		v-for="(thisInput, index) in savedInputs"
		v-model="thisInput.value"
		:key="index"
		type="text"
		@input="addInput(thisInput)"
		@keyup.enter="pressEnter($event, thisInput)"
		@focusout="checkForBlank(thisInput, index)"
		class="input"
		style="width: 100%"
		placeholder="Type Name"
		>
	</label>
</template>

<script>
	export default {
		name: "NameInputs",
		props: {
			inputs: {
				type: Array,
				default() {
					return [{value: '', addNext: true}]
				}
			},
		},
		data() {
			return {
				savedInputs: []
			}
		},
		created() {
			this.savedInputs = this.inputs;
		},
		methods: {
			addInput(input) {
				if(input.addNext) {
					input.addNext = false;
					this.savedInputs.push({
						value: '',
						addNext: true
					});
				}
			},
			pressEnter(event, input) {
				event.target.nextElementSibling.focus();
				this.addInput(input);
			},
			checkForBlank(input, inputIndex) {
				if(input.value === '' && !input.addNext)
					this.savedInputs = this.savedInputs.filter((input, index) => {
						return index !== inputIndex
					});
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

	input::placeholder {
		text-align: center;
	}

</style>