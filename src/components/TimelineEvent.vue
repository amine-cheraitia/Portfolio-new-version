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
		<div data-aos="flip-left" class="h-full bg-gray-700 relative">
			<div class="text-4xl w-28 px-2 font-Montserrat relative top-5 left-5">
				{{ event.eventYear }}
			</div>
			<div id="text" class="w-2/3 lg:w-1/2 text-right pr-3 mt-5 text-white">
				<p class="text-3xl">{{ event.eventName }}</p>
				<span class="text-amber-600">{{ event.eventFullDate }}</span>
				<p>{{ event.eventDescription }}}</p>
			</div>
			<div></div>
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
