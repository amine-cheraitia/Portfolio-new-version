<template>
	<div
		v-for="(event, index) in events"
		:key="index"
		style="margin: auto"
		class="w-full pl-1"
	>
		<div
			v-if="index == 0"
			class="w-4 h-4 rounded-full bg-white absolute -top-1 left-2/3 -translate-x-1/3 sm:left-1/2 z-50"
		></div>
		<div
			data-aos="flip-left"
			class="bg-white w-1 absolute top-0 left-2/3 -translate-x-1/3 sm:left-1/2 sm:-translate-x-1/2 -z-10 h-5/6 transition ease-out"
		></div>
		<div data-aos="flip-left" class="h-full relative flex justify-center">
			<div
				class="text-3xl lg:text-4xl w-28 px-2 font-Montserrat absolute top-5 left-5"
			>
				{{ event.eventYear }}
			</div>
			<div
				id="text"
				class="w-2/3 sm:w-1/2 text-right pl-4 mt-20 text-white relative pr-8"
			>
				<p class="text-2xl lg:text-3xl">{{ event.eventName }}</p>
				<span class="text-amber-600">{{ event.eventFullDate }}</span>
				<p>{{ event.eventDescription }}}</p>
				<div
					class="w-3 h-3 rounded-full bg-amber-600 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-50"
				>
					<div
						class="w-1 h-1 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 bg-black rounded-full"
					></div>
				</div>
			</div>

			<div
				class="w-1/3 sm:w-1/2 pl-8 mt-20 flex flex-col justify-center text-white"
				data-aos="flip-right"
			>
				<div class="flex items-center">
					<i class="fa-brands fa-html5 text-5xl w-10 text-red-500"></i>
					<div class="hidden sm:inline-block pl-5">HTML</div>
				</div>
				<div class="flex items-center">
					<i class="fa-brands fa-css3-alt text-5xl w-10 text-orange-500"></i>
					<div class="hidden sm:inline-block pl-5">CSS</div>
				</div>
				<div class="flex items-center">
					<i class="fa-brands fa-vuejs text-5xl w-10 text-green-500"></i>
					<div class="hidden sm:inline-block pl-5">Vuejs</div>
				</div>
				<div class="flex items-center">
					<i class="fa-solid fa-graduation-cap text-5xl w-10 text-gray-500"></i>
					<div class="hidden sm:inline-block pl-5">Dely ibrahim</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ["events"],
	created() {},
};
</script>

<style scoped></style>
