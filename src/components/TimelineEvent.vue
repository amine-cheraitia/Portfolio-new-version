<template>
	<div
		v-for="(event, index) in events"
		:key="index"
		style="margin: auto"
		class="w-full"
	>
		<div
			v-if="index == 0"
			class="w-4 h-4 rounded-full bg-white absolute -top-1 left-2/3 -translate-x-1/3 lg:left-1/2 z-50"
		></div>
		<div
			data-aos="flip-left"
			class="bg-white w-1 absolute top-0 left-2/3 -translate-x-1/3 lg:left-1/2 lg:-translate-x-1/2 z-10 h-full"
		></div>
		<div data-aos="flip-left" class="h-full relative flex justify-center">
			<div class="text-4xl w-28 px-2 font-Montserrat absolute top-5 left-5">
				{{ event.eventYear }}
			</div>
			<div id="text" class="w-2/3 lg:w-1/2 text-right pr-3 mt-20 text-white">
				<p class="text-3xl">{{ event.eventName }}</p>
				<span class="text-amber-600">{{ event.eventFullDate }}</span>
				<p>{{ event.eventDescription }}}</p>
			</div>
			<div class="w-1/3 lg:w-1/2 pl-5 mt-20 flex flex-col">
				<div><i class="fa-brands fa-html5 text-5xl"></i> Html</div>
				<div><i class="fa-brands fa-css3-alt text-5xl"></i>CSS</div>
				<div><i class="fa-brands fa-vuejs text-5xl"></i> Javascript</div>
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
