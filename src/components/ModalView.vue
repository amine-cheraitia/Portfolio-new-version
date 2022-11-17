<template>
	<div
		class="absolute top-0 left-0 h-screen w-full z-50 backdrop-blur flex justify-center overflow-hidden"
	>
		<div
			class="bg-black w-11/12 lg:w-10/12 border-amber-500 border-2 rounded-xl overflow-hidden mt-20"
		>
			<div id="description" class="text-white p-6">
				<div>
					Gestion Cabinet Meddahi App <span class="text-amber-500">.</span>
				</div>
				<div class="text-amber-500">2021</div>
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
};
</script>

<style scoped></style>
