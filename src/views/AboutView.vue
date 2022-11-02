<template>
	<div class="font-Montserrat overflow-hidden">
		<div id="main" class="text-black text-5xl bg-white w-full h-screen">
			<div
				class="relative flex flex-col items-center lg:flex-row-reverse pr-14 pl-12 bg-black-700 h-full pt-20 lg:pt-0"
			>
				<div
					class="-z-5 rotate-12 -translate-x-1/2 -translate-y-full absolute top-48 left-1/2 bg-black"
					style="width: 300%; height: 300%"
				></div>
				<div
					class="-z-5 rotate-12 -translate-x-1/2 translate-y-full absolute -bottom-40 lg:-bottom-7 left-1/2 bg-black"
					style="width: 300%; height: 100%"
				></div>
				<img
					class="float-right rounded-full w-96 lg:w-72 z-50 shadow-2xl"
					src="../assets/mypic.jpg"
					alt=""
				/>
				<div id="text" class="text-center lg:text-left">
					<p class="text-3xl mt-8">Amine CHERAITIA</p>
					<p class="text-lg text-amber-600 font-Poppins">Algiers , ALGERIA</p>
					<p class="text-base text-left mt-8 lg:pr-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non
						blanditiis quaerat? Officia, quod est quas quaerat sequi a nobis
						quia temporibus tempore libero numquam atque, odio minus officiis
						iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
						quae odit debitis, ab consequatur placeat ad aliquid quidem id,
						sequi quos officiis hic vero corrupti harum natus nisi quibusdam qui
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
						molestiae! Autem libero consequatur, vero quidem blanditiis non quos
						assumenda eum dolorum ex ipsam! Debitis id nisi doloribus dolorum
						iure sed?.
					</p>
				</div>
			</div>
		</div>
		<div
			class="text-amber-600 bg-black z-50 relative mt-96 pb-96 lg:mt-60 h-full"
			data-aos="fade-up"
		>
			<!-- 			<div
				class="bg-white w-1 h-3/4 absolute top-10 left-1/2 rounded-full z-10"
			></div> -->
			<TimelineEvent :events="events"></TimelineEvent
			><!-- 
			<div class="card" style="width: 18rem; margin: 200px auto"></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card bg-gray-600"
				style="width: 18rem; margin: 200px auto"
			>
				azeaz
			</div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			></div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			>
				lorem shiot
			</div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			>
				lorem shiot
			</div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			>
				lorem shiot
			</div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			>
				lorem shiot
			</div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			>
				lorem shiot
			</div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			>
				lorem shiot
			</div>
			<div
				data-aos="flip-left"
				class="card"
				style="width: 18rem; margin: 200px auto"
			>
				lorem shiot
			</div>
			<div data-aos="flip-left" class="card" style="width: 18rem">
				lorem shiot
			</div> -->
		</div>
	</div>
</template>

<script>
import TimelineEvent from "@/components/TimelineEvent.vue";
// @ is an alias to /src

export default {
	data() {
		return {
			events: [
				{
					eventYear: 2013,
					eventName: "Licence en Finance et Comptabilité",
					eventFullDate: "2009 - 2013",
					eventDescription: [
						{ desc: "Université de dely ibrahim" },

						{
							desc: "Formation universitaire de niveau BAC +3 qui permet d'acquirir un socle de connaissance en finance et comptabilité",
						},
					],
					tools: [
						{
							name: "HTML",
							class: "fa-brands fa-html5 text-4xl w-10 text-red-500",
						},
						{
							name: "CSSSX",
							class: "fa-brands fa-css3-alt text-4xl w-10 text-orange-500 ",
						},
						{
							name: "HTML",
							class: "fa-brands fa-vuejs text-4xl w-10 text-green-500",
						},
						{
							name: "Dely ibrahim",
							class: "fa-solid fa-graduation-cap text-4xl w-10 text-gray-500",
						},
						{
							name: "Laravel",
							class: "fa-brands fa-laravel text-4xl w-10 text-red-500",
						},
					],
				},
				{
					eventYear: 2016,
					eventName: "Master Européen en management et stratégie d'entreprise",
					eventFullDate: "2014-2016",
					eventDescription: [
						{ desc: "Universal School / EduPro ex ISAG" },
						{ desc: "Université de dely ibrahim" },
						{
							desc: "Formation de niveau BAC +5 qui a pour objectif de  les connaissances et les savoir-faire nécessaires leur permettant de mettre en parallèle la stratégie proposée avec les priorités de l’entreprise afin de combler les écarts éventuels entre la situation actuelle et la situation désirée",
						},
					],
					tools: [
						{
							name: "HTML",
							class: "fa-brands fa-html5",
						},
						{ name: "CSSSX", class: "fa-brands fa-css3-alt " },
						{ name: "HTML", class: "fa-brands fa-html5" },
					],
				},
				{
					eventYear: 2018,
					eventName: "Responsable des Finance et de la Comptabilité",
					eventFullDate: "2017-2018",
					eventDescription: [
						{ desc: "Sarl TLA Import" },
						{
							desc: "Produire et superviser les états financiers ainsi que participer au développement des décisions managériales à travers les outils mis en place",
						},
					],
					tools: [
						{
							name: "HTML",
							class: "fa-brands fa-html5",
						},
						{ name: "CSSSX", class: "fa-brands fa-css3-alt " },
						{ name: "HTML", class: "fa-brands fa-html5" },
					],
				},
				{
					eventYear: 2019,
					eventName: "BTS en informatique option base de donnée",
					eventFullDate: "2017-2019",
					eventDescription: [
						{ desc: "Formation de niveau BAC +3" },
						{
							desc: "Mettre en oeuvre des solutions logiciels ainsi que des bases de données ainsi que son administration",
						},
					],
					tools: [
						{
							name: "Delphi 7, 10.3",
							class: "fa-brands fa-html5",
						},
						{
							name: "SQL Server 2008 R2 / 2016",
							class: "fa-brands fa-css3-alt ",
						},
						{ name: "HTML", class: "fa-brands fa-html5" },
					],
				},
			],
		};
	},
	components: { TimelineEvent },
};
</script>
