<template>
	<div
		class="fixed px-2 top-0 w-full z-50 bg-black text-white flex justify-between items-center h-16 lg:h-24 md:px-16"
	>
		<div class="text-sm sm:text-md md:text-2xl lg:text-3xl font-Montserrat">
			Amine Ch
			<span class="text-amber-500 text-sm sm:text-md md:text-2xl">.</span>
		</div>
		<div class="w-3/4 h-full flex justify-center items-center">
			<ul
				class="flex justify-around items-center h-full w-full text-center font-Poppins text-sm sm:text-md md:text-xl"
			>
				<li
					class="border-b-4 border-b-black hover:bg-gradient-to-r hover:from-black hover:via-stone-900 hover:to-black hover:text-amber-500 h-full w-1/3 flex justify-center items-center"
					:class="{
						'border-b-4 border-b-amber-600 bg-gradient-to-l from-black to-stone-900':
							activeLink('home'),
					}"
				>
					<router-link
						to="home"
						class="h-full w-full flex justify-center items-center"
						>Accueil</router-link
					>
				</li>
				<li
					class="border-b-4 border-b-black hover:bg-gradient-to-r hover:from-black hover:via-stone-900 hover:to-black hover:text-amber-500 h-full w-1/3 flex justify-center items-center"
					:class="{
						'border-b-4 border-b-amber-600 bg-gradient-to-r from-black via-gray-900 to-black':
							activeLink('about'),
					}"
				>
					<router-link
						to="about"
						class="h-full w-full flex justify-center items-center"
						>A propos</router-link
					>
				</li>
				<li
					class="border-b-4 border-b-black hover:bg-gradient-to-r hover:from-black hover:via-stone-900 hover:to-black hover:text-amber-500 h-full w-1/3 flex justify-center items-center"
					:class="{
						'border-b-4 border-b-amber-600 bg-gradient-to-r from-black via-gray-900 to-black':
							activeLink('projects'),
					}"
				>
					<router-link
						to="projects"
						class="h-full w-full flex justify-center items-center"
						>Projets</router-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {},
	methods: {
		activeLink(routeName) {
			routeName;

			if (this.$route.name === routeName) {
				return true;
			}
			return false;
		},
	},
};
</script>

<style scoped></style>
