<template>
	<label style="alignment: left;
        align-items: flex-start;">
		<input
		v-for="(thisInput, index) in this.$store.state.names"
		v-model="thisInput.value"
		:key="index"
		type="text"
		@input="addInput(thisInput)"
		@keyup.enter="pressEnter($event, thisInput)"
		@focusout="checkForBlank(thisInput, index)"
		class="input"
		placeholder="Type Name"
		onfocus="this.placeholder = ''"
		>
	</label>
</template>

<script>
	export default {
		name: "NameInputs",
		methods: {
			addInput(input) {
				if(input.addNext) {
					input.addNext = false;
					this.$store.state.names.push({
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
					this.$store.state.names = this.$store.state.names.filter((input, index) => {
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
		align-self: flex-start;
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