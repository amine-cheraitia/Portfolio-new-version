<template>
	<div class="p0 bg-red h-full relative">
		<!-- 		<div
			id="sl"
			class="absolute -top-full left-0 h-screen w-full bg-red-500 z-50"
		></div> -->
		<div
			id="sl"
			class="fixed -top-[calc(130vh_+_96px)] left-0 h-[calc(130vh_+_96px)] w-full bg-black"
		></div>
		<div
			id="sl2"
			class="fixed -top-[calc(130vh_+_96px)] left-0 h-[calc(130vh_+_96px)] w-full bg-orange-bg"
		></div>
		<router-view />
	</div>
</template>
<script>
import AOS from "aos";
export default {
	mounted() {
		AOS.init();
	},
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
