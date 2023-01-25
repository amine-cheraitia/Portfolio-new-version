<template>
	<div class="p0 bg-black h-full w-full">
		<transition name="menuBarSlide" appear>
			<MenuBar v-if="$route.name != 'home'"></MenuBar>
		</transition>
		<router-view v-slot="slotProps">
			<transition name="slide" appear>
				<component :is="slotProps.Component" mode="out-in"></component>
			</transition>
		</router-view>
	</div>
</template>
<script>
import MenuBar from "@/components/MenuBar.vue";
import AOS from "aos";
export default {
	mounted() {
		AOS.init();
	},
	components: { MenuBar },
};
</script>

<style src="./style.css"></style>
<!-- <style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
 -->
