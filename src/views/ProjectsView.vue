<template>
	<MenuBar></MenuBar>

	<div
		class="bg-black h-[calc(100vh_-_56px)] lg:h-[calc(100vh_-_56px)] w-full mt-16 lg:mt-14"
	>
		<swiper
			:navigation="true"
			:modules="modules"
			class="mySwiper text-center h-full text-white"
		>
			<swiper-slide
				class="flex justify-center items-center bg-black h-full w-full"
			>
				<div id="container " class="h-full w-11/12 bg-gray-800 flex">
					<div
						id="imgProject"
						class="w-10/12 h-full flex justify-center items-center bg-violet-700 relative"
					>
						<img
							src="../assets/gestioncac.png"
							class="absolute min-h-full object-cover top-0 left-1/2 transform -translate-x-1/2"
							alt=""
						/>
					</div>
					<div id="title" class="w-2/12 h-full bg-red-900">ssssaa</div>
				</div>
			</swiper-slide>
			<swiper-slide class="flex justify-center items-center bg-red-100">
				<div id="container">Expense Tracker</div>
			</swiper-slide>
			<swiper-slide class="flex justify-center items-center">
				<div id="container">WeatherApp</div>
			</swiper-slide>
			<swiper-slide class="flex justify-center items-center"
				>ToDoListe</swiper-slide
			>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import MenuBar from "@/components/MenuBar.vue";
export default {
	components: { MenuBar, Swiper, SwiperSlide },
	methods: {},
	data() {
		return {
			modules: [Navigation],
		};
	},
};
</script>

<style scoped></style>
