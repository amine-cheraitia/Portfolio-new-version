<template>
	<swiper-slide class="flex justify-center items-center bg-black h-full w-full">
		<div
			id="container "
			class="h-full w-full lg:w-10/12 bg-gray-800 flex border-2 border-amber-600"
		>
			<div
				id="imgProject"
				class="w-10/12 lg:w-11/12 bg-violet-700 min-h-full overflow-hidden"
			>
				<img
					src="../assets/gestioncac.png"
					class="min-w-full object-contain lg:object-fill"
					alt=""
				/>
			</div>
			<div
				id="title"
				class="w-2/12 lg:w-1/12 bg-black flex flex-col items-center justify-between p-9 font-Poppins"
			>
				<div class="flex flex-col justify-center items-center text-xl">
					<div class="mb-1">1</div>
					<div class="h-0.5 w-5 bg-amber-500"></div>
				</div>
				<div class="w-96 -rotate-90">
					<div class="text-right">
						Gestion Cabinet Meddahi
						<span class="text-amber-500 text-xl">.</span>
					</div>
					<div class="text-amber-500 text-xl">2021</div>
				</div>
			</div>
		</div>
	</swiper-slide>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
export default {
	components: { MenuBar, Swiper, SwiperSlide },
	methods: {},
	data() {
		return {
			modules: [Navigation],
			projects: [
				{
					Title: "Gestion Cabinet Meddahi",
					year: 2021,
					imageUrl: "../assets/gestioncac.png",
				},
				{
					Title: "Expense Tracker",
					year: 2022,
					imageUrl: "../assets/expensetracker.png",
				},
				{
					Title: "WeatherApp",
					year: 2022,
					imageUrl: "../assets/weatherapp.png",
				},
				{
					Title: "To Do List",
					year: 2021,
					imageUrl: "../assets/todolist.png",
				},
			],
		};
	},
};
</script>
