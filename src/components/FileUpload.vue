<template>
	<div style="margin-top: 0; padding-top: 0">

		<v-row class="row">
			<NameInputs v-if="names.length" :inputs="names"/>
		</v-row>

	</div>
</template>

<script>
	import NameInputs from "./NameInputs";
	export default {
		name: "FileUpload",
		components: {NameInputs},
		data() {
			return {
				error: false,
				names: [],
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.button {
		font-weight:bold;
		color: white;
	}

</style>