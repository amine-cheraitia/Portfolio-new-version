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
				v-for="(project, index) in projects"
				:key="index"
			>
				<div
					id="container "
					class="h-full w-full lg:w-10/12 bg-gray-800 flex border-2 border-amber-600 overflow-hidden cursor-pointer group"
					@click="showDetail(project.id)"
				>
					<div
						id="imgProject"
						class="w-10/12 lg:w-11/12 bg-black-700 min-h-full overflow-hidden"
					>
						<img
							:src="project.img"
							class="min-w-full object-contain lg:object-fill"
							alt=""
						/>
					</div>
					<div
						id="title"
						class="w-2/12 lg:w-1/12 h-full bg-black flex flex-col items-center justify-between p-9 font-Poppins relative"
					>
						<div class="flex flex-col justify-center items-center text-xl">
							<div class="mb-1 group-hover:animate-pulse">{{ project.id }}</div>
							<div
								class="h-0.5 w-5 bg-amber-500 transition-all duration-700 group-hover:w-9 group-hover:translate-x-2"
							></div>
						</div>
						<div class="w-56 -rotate-90 absolute bottom-1/4">
							<div class="text-left">
								{{ project.title }}
								<span class="text-amber-500 text-xl">.</span>
							</div>
							<div class="text-amber-500 text-xl text-left">
								{{ project.year }}
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
	<ModalView
		v-on:closeIt="closeModal"
		:openModal="openModal"
		:title="dataProps.title"
		:img="dataProps.img"
		:year="dataProps.year"
		:description="dataProps.description"
		:tag="dataProps.tag"
		:github="dataProps.github"
		:link="dataProps.link"
	/>
</template>

<script>
import ModalView from "@/components/ModalView";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import MenuBar from "@/components/MenuBar.vue";
export default {
	components: { MenuBar, Swiper, SwiperSlide, ModalView },
	methods: {
		hi() {},
		showDetail(id) {
			id;
			const projects = [...this.projects];
			const projectSelected = projects.find((p) => p.id === id);
			this.dataProps.title = projectSelected.title;
			this.dataProps.img = projectSelected.img;
			this.dataProps.year = projectSelected.year;
			this.dataProps.description = projectSelected.description;
			this.dataProps.tag = projectSelected.tag;
			this.dataProps.github = projectSelected.github;
			this.dataProps.link = projectSelected.link;
			console.log(this.dataProps.tag);

			this.showModal = true;
			this.openModal = true;
		},
		closeModal() {
			this.openModal = false;
			this.showModal = false;
		},
	},
	data() {
		return {
			modules: [Navigation],
			showModal: false,
			openModal: false,
			dataProps: {
				id: null,
				img: null,
				title: null,
				year: null,
				description: null,
				tag: null,
				github: null,
				link: null,
			},
			projects: [
				{
					id: 1,

					img: require("../assets/gestioncac.png"),
					title: "Gestion Cabinet Meddahi",
					year: 2021,
					description:
						"mini description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, maiores harum? Totam minus eos aperiam molestias officiis suscipit iusto ipsum quaerat vitae, libero debitis voluptatibus omnis beatae! Soluta, officiis eveniet.",
					tag: ["Laravel", "MariaDB", "JQuery", "ChartJs", "Bootstrap"],
					github:
						"https://github.com/amine-cheraitia/gestion-cabinet-cac-et-cmptaV2",
					link: "https://website.fahdfettahi.com/",
				},
				{
					id: 2,
					img: require("../assets/weatherapp.png"),

					title: "WeatherApp",
					year: 2022,
					description:
						" weathermini description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, maiores harum? Totam minus eos aperiam molestias officiis suscipit iusto ipsum quaerat vitae, libero debitis voluptatibus omnis beatae! Soluta, officiis eveniet.",
					tag: ["HTML", "CSS", "VueJS", "OpenWeatherApi"],
					github: "https://github.com/amine-cheraitia/weather-app-vuejs-v2",
					link: "https://amine-cheraitia.github.io/weather-app-vuejs-v2/",
				},
				{
					id: 3,
					img: require("../assets/Expensetracker.png"),

					title: "Expense Tracker",
					year: 2022,
					description:
						" weathermini description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, maiores harum? Totam minus eos aperiam molestias officiis suscipit iusto ipsum quaerat vitae, libero debitis voluptatibus omnis beatae! Soluta, officiis eveniet.",
					tag: ["HTML", "CSS", "Laravel", "MySQL", "VueJS", "ChartJS"],
					github: null,
					link: null,
				},
				{
					id: 4,
					img: require("../assets/weatherapp.png"),

					title: "To Do List",
					year: 2020,
					description:
						" weathermini description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, maiores harum? Totam minus eos aperiam molestias officiis suscipit iusto ipsum quaerat vitae, libero debitis voluptatibus omnis beatae! Soluta, officiis eveniet.",
					tag: ["VueJS", "Boostrap"],
					github: null,
					link: null,
				},
			],
		};
	},
};
</script>

<style scoped></style>
