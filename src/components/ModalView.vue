<template>
	<transition
		enter-from-class="opacity-0"
		leave-to-class="opacity-0"
		enter-active-class="transition duration-300"
		leave-active-class="transition duration-300"
	>
		<div
			class="fixed top-0 left-0 h-screen w-full z-50 backdrop-blur"
			@click.self="closeModal"
			@click="hiz"
			v-if="openModal"
		></div>
	</transition>
	<!-- 	<transition appear="" enter-active-class="duration-300 ease-out transition-all"
		enter-from-class="transform opacity-0 top-full translate-y-full"
		enter-to-class="opacity-100"
		leave-active-class="duration-300 ease-in transition-all"
		leave-from-class="opacity-100"
		leave-to-class="transform opacity-0 top-full translate-y-full">
	
	</transition> -->
	<transition name="dialog" appear="">
		<div
			class="bg-black w-11/12 lg:w-10/12 border-amber-500 border-2 rounded-xl overflow-hidden fixed top-3/4 left-2/4 -translate-x-2/4 -translate-y-3/4 h-[calc(100%_-_10%)]"
			style="z-index: 55"
			v-if="openModal"
		>
			<div id="description" class="text-white p-6">
				<div id="header" class="flex justify-between items-center">
					<div class="text-xl font-Poppins">
						{{ title }}
						<span class="text-amber-500 text-2xl">.</span>
					</div>

					<button @click="closeModal" class="text-right mb-3">
						<i class="fa-solid fa-x text-amber-500 text-2xl"></i>
					</button>
				</div>
				<div class="text-amber-500 text-xl">{{ year }}</div>
				<div class="my-2">
					<i
						class="fa-brands fa-github text-2xl transition duration-300 ease-in-out mr-4 hover:scale-125 hover:text-amber-100"
					></i>
					<i
						class="fa-solid fa-globe text-2xl transition duration-300 ease-in-out hover:scale-125 hover:text-amber-100"
					></i>
				</div>
				<div class="my-2">
					{{ description }}
				</div>
				<div class="flex flex-wrap gap-2 my-4">
					<div
						v-for="(t, index) in tag"
						:key="index"
						class="bg-amber-500 text-white rounded-3xl px-2 py-0.5 text-sm"
					>
						{{ t }}
					</div>

					<!-- 					<div class="bg-amber-500 text-white rounded-3xl px-2 py-0.5 text-sm">
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
					</div> -->
				</div>
				<div id="img" class="h-64">
					<img :src="img" alt="" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: [
		"openModal",
		"title",
		"img",
		"tag",
		"year",
		"description",
		"github",
		"link",
	],
	data() {
		return {};
	},
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

<style>
.dialog-enter-from,
.dialog-leave-to {
	transform: translate(-50%, -50%);
	top: 100%;
	opacity: 0;
	left: 50%;
}
.dialog-enter-active {
	transition: all 300ms ease-out;
}
.dialog-leave-active {
	transition: all 300ms ease-out;
}
.dialog-enter-to,
.dialog-leave-from {
	opacity: 1;
	top: 75%;
}
</style>
