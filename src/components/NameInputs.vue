<template>
	<label style="width: 100%;">
		<input
		v-for="(thisInput, index) in inputs"
		v-model="thisInput.value"
		:key="index"
		type="text"
		@input="addInput(thisInput)"
		@keyup.enter="pressEnter($event, thisInput)"
		@focusout="checkForBlank(thisInput, index)"
		class="input"
		style="width: 100%"
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
			checkForBlank(input, inputIndex) {
				if(input.value === '' && !input.addNext)
					this.inputs = this.inputs.filter((input, index) => {
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

</style>