<template>
	<div>
		<v-checkbox v-model="headersSelected" block color="blue darken-4" class="button" x-large tile label="Headers Included"/>
		<v-btn block color="blue darken-4" class="button" x-large tile @click="$refs.fileUpload.click()">Click to Upload</v-btn>
		<input hidden type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" ref="fileUpload" @change="parseFile($event.target.name, $event.target.files)">
		<NameInputs :inputs="names"/>
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
				headersSelected: false
			}
		},
		methods: {
			parseFile(fieldName, fileList) {
				if(fileList[0]) {
					const reader = new FileReader();
					reader.readAsText(fileList[0]);

					reader.onload = (event) => {
						let names = event.target.result.split('\n');
						if(this.headersSelected)
							names = names.splice(1);
						names.forEach((name) => {
							if(name !== '')
								this.names.push({value: name, addNext: false})
						});
						this.names.push({value: '', addNext: true});
					};

					reader.onerror = function(evt) {
						if(evt.target.error.name === "NotReadableError") {
							alert("Canno't read file !");
							return [];
						}
					};


				} else {
					console.log('Nah')
					return [];

				}

			}
		}
	}
</script>

<style scoped>
	.button {
		font-weight:bold;
		color: white;
	}

</style>