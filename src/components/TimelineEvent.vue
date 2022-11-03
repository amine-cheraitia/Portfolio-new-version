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
			class="bg-white w-1 absolute top-0 left-2/3 -translate-x-1/3 sm:left-1/2 sm:-translate-x-1/2 -z-10 h-[calc(90%_-_40px)] transition ease-out"
		>
			<div
				v-if="index == events.length - 1"
				id="end"
				class="w-4 h-4 rounded-full bg-white absolute bottom-0 -translate-x-1/3 z-50"
			></div>
		</div>
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
				<p class="text-lg md:text-xl lg:text-2xl pl-2 md:pl-8">
					{{ event.eventName }}
				</p>
				<span class="text-amber-600">{{ event.eventFullDate }}</span>
				<div class="w-full">
					<p
						v-for="(description, index) in event.eventDescription"
						:key="index"
						class="pl-8"
					>
						{{ description.desc }}
					</p>
				</div>
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
				<div
					data-aos="flip-left"
					class="flex items-center"
					:class="{ 'mt-2': index !== 0 }"
					v-for="(itm, index) in event.tools"
					:key="index"
				>
					<i :class="itm.class"> </i>
					<div class="hidden sm:inline-block pl-5">{{ itm.name }}</div>
				</div>
			</div>
			<!-- 			<div
				class="w-1/3 sm:w-1/2 pl-8 mt-20 flex flex-col justify-center text-white"
				data-aos="flip-right"
			>
				<div class="flex items-center">
					<i class="fa-brands fa-html5 text-4xl w-10 text-red-500"></i>
					<div class="hidden sm:inline-block pl-5">HTML</div>
				</div>
				<div class="flex items-center mt-2">
					<i class="fa-brands fa-css3-alt text-4xl w-10 text-orange-500"></i>
					<div class="hidden sm:inline-block pl-5">CSS</div>
				</div>
				<div class="flex items-center mt-2">
					<i class="fa-brands fa-vuejs text-4xl w-10 text-green-500"></i>
					<div class="hidden sm:inline-block pl-5">Vuejs</div>
				</div>
				<div class="flex items-center mt-2">
					<i class="fa-solid fa-graduation-cap text-4xl w-10 text-gray-500"></i>
					<div class="hidden sm:inline-block pl-5">Dely ibrahim</div>
				</div>
				<div class="flex items-center mt-2">
					<i class="fa-brands fa-laravel text-4xl w-10 text-red-500"></i>
					<div class="hidden sm:inline-block pl-5">Dely ibrahim</div>
				</div>
			</div> -->
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
