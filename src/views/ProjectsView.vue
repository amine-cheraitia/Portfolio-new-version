<template>
	<MenuBar></MenuBar>

	<div
		class="bg-black h-[calc(100vh_-_64px)] lg:h-[calc(100vh_-_96px)] w-full mt-16 lg:mt-24 overflow-hidden"
	>
		<swiper
			:navigation="true"
			:modules="modules"
			class="mySwiper text-center h-full text-white"
		>
			<swiper-slide
				class="flex justify-center items-center bg-black h-full w-full"
				@click="hi"
			>
				<div
					id="container "
					class="h-full w-full lg:w-10/12 bg-gray-800 flex border-2 border-amber-600 overflow-hidden cursor-pointer group"
				>
					<div
						id="imgProject"
						class="w-10/12 lg:w-11/12 bg-black-700 min-h-full overflow-hidden"
					>
						<img
							src="../assets/gestioncac.png"
							class="min-w-full object-contain lg:object-fill"
							alt=""
						/>
					</div>
					<div
						id="title"
						class="w-2/12 lg:w-1/12 h-full bg-black flex flex-col items-center justify-between p-9 font-Poppins relative"
					>
						<div class="flex flex-col justify-center items-center text-xl">
							<div class="mb-1 group-hover:animate-pulse">1</div>
							<div
								class="h-0.5 w-5 bg-amber-500 transition-all duration-700 group-hover:w-9 group-hover:translate-x-2"
							></div>
						</div>
						<div class="w-56 -rotate-90 absolute bottom-1/4">
							<div class="text-left">
								Gestion Cabinet Meddahi
								<span class="text-amber-500 text-xl">.</span>
							</div>
							<div class="text-amber-500 text-xl text-left">2021</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide
				class="flex justify-center items-center bg-black h-full w-full"
			>
				<div
					id="container "
					class="h-full w-full lg:w-10/12 bg-gray-800 flex border-2 border-amber-600 overflow-hidden cursor-pointer group"
				>
					<div
						id="imgProject"
						class="w-10/12 lg:w-11/12 bg-black-700 min-h-full overflow-hidden"
					>
						<img
							src="../assets/weatherapp.png"
							class="min-w-full object-contain lg:object-fill"
							alt=""
						/>
					</div>
					<div
						id="title"
						class="w-2/12 lg:w-1/12 h-full bg-black flex flex-col items-center justify-between p-9 font-Poppins relative"
					>
						<div class="flex flex-col justify-center items-center text-xl">
							<div class="mb-1">2</div>
							<div
								class="h-0.5 w-5 bg-amber-500 transition-all duration-700 group-hover:w-9 group-hover:translate-x-2"
							></div>
						</div>
						<div class="w-56 -rotate-90 absolute bottom-1/4">
							<div class="text-left">
								WeatherApp
								<span class="text-amber-500 text-xl">.</span>
							</div>
							<div class="text-amber-500 text-xl text-left">2021</div>
						</div>
					</div>
				</div>
			</swiper-slide>

			<swiper-slide
				class="flex justify-center items-center bg-black h-full w-full"
			>
				<div
					id="container "
					class="h-full w-full lg:w-10/12 bg-gray-800 flex border-2 border-amber-600"
				>
					<div
						id="imgProject"
						class="w-10/12 lg:w-11/12 bg-violet-700 min-h-full overflow-hidden"
					>
						<img
							src="../assets/weatherapp.png"
							class="min-w-full object-contain lg:object-fill"
							alt=""
						/>
					</div>
					<div
						id="title"
						class="w-2/12 lg:w-1/12 bg-black flex flex-col items-center justify-between p-9 font-Poppins relative"
					>
						<div class="flex flex-col justify-center items-center text-xl">
							<div class="mb-1">3</div>
							<div class="h-0.5 w-5 bg-amber-500"></div>
						</div>
						<div class="w-56 -rotate-90 absolute bottom-1/4">
							<div class="text-left">
								Expense Tracker
								<span class="text-amber-500 text-xl">.</span>
							</div>
							<div class="text-amber-500 text-xl text-left">2022</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide
				class="flex justify-center items-center bg-black h-full w-full"
			>
				<div
					id="container "
					class="h-full w-full lg:w-10/12 bg-gray-800 flex border-2 border-amber-600"
				>
					<div
						id="imgProject"
						class="w-10/12 lg:w-11/12 bg-violet-700 min-h-full overflow-hidden"
					>
						<img
							src="../assets/weatherapp.png"
							class="min-w-full object-contain lg:object-fill"
							alt=""
						/>
					</div>
					<div
						id="title"
						class="w-2/12 lg:w-1/12 bg-black flex flex-col items-center justify-between p-9 font-Poppins relative"
					>
						<div class="flex flex-col justify-center items-center text-xl">
							<div class="mb-1">4</div>
							<div class="h-0.5 w-5 bg-amber-500"></div>
						</div>
						<div class="w-56 -rotate-90 absolute bottom-1/4">
							<div class="text-left">
								To Do List
								<span class="text-amber-500 text-xl">.</span>
							</div>
							<div class="text-amber-500 text-xl text-left">2022</div>
						</div>
					</div>
				</div> </swiper-slide
			><!-- 
			<swiper-slide class="flex justify-center items-center">
				<div id="container">WeatherApp</div>
			</swiper-slide>
			<swiper-slide class="flex justify-center items-center"
				>ToDoListe</swiper-slide
			> -->
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
	methods: {
		hi() {},
	},
	data() {
		return {
			modules: [Navigation],
		};
	},
};
</script>

<style scoped></style>
