<template>
	<div class="p0">
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
