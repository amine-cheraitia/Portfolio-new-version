<template>
	<MenuBar></MenuBar>
	<div class="font-Montserrat overflow-hidden z-0 mt-16 lg:mt-14">
		<div id="main" class="text-black text-5xl bg-white w-full h-screen">
			<div
				class="relative flex flex-col items-center lg:flex-row-reverse pr-14 pl-12 bg-black-700 h-full pt-20 lg:pt-0"
			>
				<div
					class="-z-5 rotate-12 -translate-x-1/2 -translate-y-full absolute top-48 left-1/2 bg-black"
					style="width: 300%; height: 300%"
				></div>
				<div
					class="-z-5 rotate-12 -translate-x-1/2 translate-y-full absolute -bottom-72 md:-bottom-52 lg:-bottom-7 left-1/2 bg-black"
					style="width: 300%; height: 100%"
				></div>
				<img
					class="float-right rounded-full w-96 lg:w-72 z-30 shadow-2xl"
					src="../assets/mypic.jpg"
					alt=""
				/>
				<div id="text" class="text-center lg:text-left">
					<p class="text-4xl mt-8">Amine CHERAITIA</p>
					<p class="text-lg text-amber-600 font-Poppins">Algiers , ALGERIA</p>
					<p class="text-base text-left mt-8 lg:pr-8">
						Passionné par l'informatique et le programmation depuis tout jeune,
						j'ai décidé d'en faire mon métier. De nature curieuse, le monde de
						l'informatique me permet de m'épanouir et d'être continuellement
						dans une phase d'apprentissage. Passionné et investi sont les deux
						adjectifs qui me représentent le mieux. Je serait faire preuve de
						dynamisme et d'intérêt pour les projets que je devrais réaliser et
						mener à terme.<br />
						Je vous invite à me contacté via mon
						<a
							href="https://www.linkedin.com/in/mohamed-amine-c-97448bba/"
							target="_blank"
							class="font-bold"
							>Linkedin
							<i
								class="fa-brands fa-linkedin text-xl"
								style="color: #0e76a8"
							></i
						></a>
						pour tout projet que vous voulez réaliser.
					</p>
				</div>
			</div>
		</div>
		<div
			class="text-amber-600 bg-black z-30 relative mt-96 pb-96 lg:mt-60 h-full"
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
import MenuBar from "@/components/MenuBar";
// @ is an alias to /src

export default {
	data() {
		return {
			events: [
				/* {
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
				},*/
				{
					eventYear: 2016,
					eventName: "Master en Management et Stratégie d'Entreprise",
					eventFullDate: "2014 - 2016",
					eventDescription: [
						{ desc: "Universal School / EduPro ex ISAG" },

						{
							desc: "Formation de niveau BAC +5",
						},
						/* 						{
							desc: "Formation de niveau BAC +5 qui a pour objectif d'acquirir et maitriser les connaissances et les savoir-faire nécessaires pour la mise en place de stratégies de groupe ou de DAS",
						}, */
					],
					tools: [],
				},
				{
					eventYear: 2018,
					eventName: "Responsable des Finance et de la Comptabilité",
					eventFullDate: "2017 - 2018",
					eventDescription: [
						{ desc: "Sarl TLA Import" },
						{
							desc: "Produire et superviser les états financiers ainsi que participer au développement des décisions managériales à travers les outils mis en place",
						},
					],
					tools: [],
				},
				{
					eventYear: 2019,
					eventName: "BTS en informatique option base de donnée",
					eventFullDate: "2017 - 2019",
					eventDescription: [
						{ desc: "INSFP Mohamed Tayeb Boucenna" },

						{
							desc: "Formation de niveau BAC +2",
						} /* 
						{
							desc: "Formation de niveau BAC +2 qui a pour but de mettre en oeuvre des solutions logiciels et des bases de données ainsi que leurs administration",
						}, */,
					],
					tools: [
						{
							name: "Delphi 7, 10.2",
							class: "fa-solid fa-code  text-5xl w-10 text-white",
						},
						{
							name: "SQL Server 2008 R2 / 2016",
							class: "fa-solid fa-database   text-5xl w-10 text-gray-500",
						},
					],
				},
				{
					eventYear: 2022,
					eventName: "Développeur d'Applications",
					eventFullDate: "2019-2022",
					eventDescription: [
						{ desc: "EURL EASY NETWORK" },
						{
							desc: "Développement et amélioration de divers applications pour le compte de l'entreprise",
						},
					],
					tools: [
						{
							name: "Delphi 10.3",
							class: "fa-solid fa-code  text-5xl w-10 text-white",
						},
						{
							name: "SQL Server  2016",
							class: "fa-solid fa-database   text-5xl w-10 text-gray-500",
						},
					],
				},
				{
					eventYear: 2022,
					eventName:
						"Diplôme H2IT : Ingénieur Professionnel en informatique (SI)",
					eventFullDate: "2020-2022",
					eventDescription: [
						{
							desc: "ETM Ibn Rochd / L'institut d'ingénierie en informatique de Limoges (3il)",
						},
						{
							desc: "Double Diplôme Bachelor Concepteur de systèmes d'information",
						},
						{ desc: "Certifié par France Compétences - RNCP Niveau 6" },
						/* 						{
							desc: "Mettre en oeuvre des solutions logiciels ainsi que des bases de données ainsi que son administration",
						}, */
					],
					tools: [
						{
							name: "HTML",
							class: "fa-brands fa-html5 text-5xl w-10 text-red-500",
						},
						{
							name: "CSS",
							class: "fa-brands fa-css3-alt text-5xl w-10 text-orange-500 ",
						},

						{
							name: "Javascript",
							class: "fa-brands fa-js text-5xl w-10 text-yellow-500",
						},

						{
							name: "Laravel",
							class: "fa-brands fa-laravel text-5xl w-10 text-red-500",
						},
						{
							name: "Linux",
							class: "fa-brands fa-linux text-5xl w-10 text-white",
						},
						{
							name: "Oracle",
							class: "fa-solid fa-database text-5xl w-10  text-gray-500",
						},
						{
							name: "Wordpress",
							class: "fa-brands fa-wordpress text-5xl w-10  text-sky-500",
						},
					],
				},
				{
					eventYear: 2022,
					eventName: "Développeur Web Stagiaire",
					eventFullDate: "juin.2021 - Jan.2022",
					eventDescription: [
						{ desc: "Cabinet Meddahi de Commisariat Aux Comptes" },
						{
							desc: "Mise en œuvre d'une solution pour facilité et améliorer la gestion du cabinet",
						},
					],
					tools: [
						{
							name: "HTML",
							class: "fa-brands fa-html5 text-5xl w-10 text-red-500",
						},
						{
							name: "CSS",
							class: "fa-brands fa-css3-alt text-5xl w-10 text-orange-500 ",
						},

						{
							name: "Javascript",
							class: "fa-brands fa-js text-5xl w-10 text-yellow-500",
						},

						{
							name: "Laravel",
							class: "fa-brands fa-laravel text-5xl w-10 text-red-500",
						},
						{
							name: "MariaDB",
							class: "fa-solid fa-database text-5xl w-10  text-gray-500",
						},
					],
				},

				{
					eventYear: 2022,
					eventName: "Développeur Web Freelance",
					eventFullDate: "2022 - 2023",
					eventDescription: [
						{
							desc: "Conception et développement de divers applications web",
						},
					],
					tools: [
						{
							name: "HTML",
							class: "fa-brands fa-html5 text-5xl w-10 text-red-500",
						},
						{
							name: "CSS",
							class: "fa-brands fa-css3-alt text-5xl w-10 text-orange-500 ",
						},

						{
							name: "Javascript",
							class: "fa-brands fa-js text-5xl w-10 text-yellow-500",
						},

						{
							name: "Laravel ",
							class: "fa-brands fa-laravel text-5xl w-10 text-red-500",
						},
						{
							name: "VueJS",
							class: "fa-brands fa-vuejs text-5xl w-10 text-green-500",
						},
						{
							name: "Linux",
							class: "fa-brands fa-linux text-5xl w-10 text-white",
						},
						{
							name: "MySql / Oracle / Sql Server",
							class: "fa-solid fa-database text-5xl w-10  text-gray-500",
						},
						{
							name: "Wordpress",
							class: "fa-brands fa-wordpress text-5xl w-10  text-sky-500",
						},
					],
				},
				{
					eventYear: 2024,
					eventName:
						"Mastère Spécialisé Manager de Solutions Digitales et Data",
					eventFullDate: "2023 - à ce jour",
					eventDescription: [
						{
							desc: "3IL Ingénieurs - Limoges",
						},
					],
					tools: [
						{
							name: "Manager la maîtrise d'ouvrage d'un projet SI (MOA)",
							class: "fa-solid fa-share-nodes text-5xl w-10 text-red-500",
						},
						{
							name: "Ingénierie de la maîtrise d'oeuvre d'un projet informatique",
							class: "fa-solid fa-swatchbook text-5xl w-10 text-cyan-500 ",
						},

						{
							name: "Gestion du système d'information (GSI)",
							class: "fa-solid fa-layer-group text-5xl w-10 text-yellow-500",
						},

						{
							name: "Développement d’applications (desktop, web, mobile, service web ou objet connecté) ",
							class: "fa-solid fa-code text-5xl w-10 text-fuchsia-500",
						},
						{
							name: "Manager un projet de big data",
							class: "fa-solid fa-warehouse text-5xl w-10 text-white-500",
						},
					],
				},
			],
		};
	},
	components: { TimelineEvent, MenuBar },
};
</script>
