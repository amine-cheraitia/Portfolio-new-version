<template>
	<div
		class="absolute top-0 left-0 h-screen w-full z-50 backdrop-blur flex justify-center overflow-hidden"
		@click.self="closeModal"
		@click="hiz"
	>
		<div
			class="bg-black w-11/12 lg:w-10/12 border-amber-500 border-2 rounded-xl overflow-hidden mt-20"
			style="z-index: 55"
		>
			<div id="description" class="text-white p-6">
				<div id="header" class="flex justify-between items-center">
					<div class="text-xl font-Poppins">
						Gestion Cabinet Meddahi App
						<span class="text-amber-500 text-2xl">.</span>
					</div>

					<button @click="closeModal" class="text-right mb-3">
						<i class="fa-solid fa-x text-amber-500 text-2xl"></i>
					</button>
				</div>
				<div class="text-amber-500 text-xl">2021</div>
				<div class="my-2">
					<i
						class="fa-brands fa-github text-2xl transition duration-300 ease-in-out mr-4 hover:scale-125 hover:text-amber-100"
					></i>
					<i
						class="fa-solid fa-globe text-2xl transition duration-300 ease-in-out hover:scale-125 hover:text-amber-100"
					></i>
				</div>
				<div class="my-2">
					mini description: Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Aut, maiores harum? Totam minus eos aperiam molestias officiis
					suscipit iusto ipsum quaerat vitae, libero debitis voluptatibus omnis
					beatae! Soluta, officiis eveniet.
				</div>
				<div class="flex flex-wrap gap-2 my-4">
					<div class="bg-amber-500 text-white rounded-3xl px-2 py-0.5 text-sm">
						Php
					</div>
					<div class="bg-amber-500 text-white rounded-3xl px-2 py-0.5 text-sm">
						Css
					</div>
					<div class="bg-amber-500 text-white rounded-3xl px-2 py-0.5 text-sm">
						Delphi
					</div>
					<div class="bg-amber-500 text-white rounded-3xl px-2 py-0.5 text-sm">
						Rust
					</div>
					<div class="bg-amber-500 text-white rounded-3xl px-2 py-0.5 text-sm">
						Javascript
					</div>
				</div>
				<div id="img" class="h-64">
					<img src="../assets/gestioncac.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {},
	emits: ["closeIt"],
	methods: {
		closeModal() {
			console.log("close it");
			this.$emit("closeIt");
		},
		hiz() {
			console.log("hi");
		},
	},
};
</script>

<style scoped></style>
