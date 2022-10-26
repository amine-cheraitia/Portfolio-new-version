<template>
	<div class="about">
		<h1 class="text-cyan-500">This is an about page</h1>
	</div>
	<div
		id="intro"
		class="bg-black fixed top-0 left-0 w-full h-full flex items-center justify-center"
	>
		<div class="intro-text text-amber-50 text-8xl font-serif">
			<h1 class="bg-black overflow-hidden">
				<span class="textanim translate-y-full inline-block"
					>Creating inovation</span
				>
			</h1>
			<h1 class="bg-black overflow-hidden">
				<span class="textanim translate-y-full inline-block">For Everyday</span>
			</h1>
			<h1 class="bg-black overflow-hidden">
				<span class="textanim translate-y-full inline-block">people.</span>
			</h1>
		</div>
	</div>
	<div
		id="slider"
		class="bg-gray-900 fixed top-0 left-0 w-full h-full translate-y-full"
	></div>
</template>
<script>
import { gsap } from "gsap";
export default {
	mounted() {
		const timelane = gsap.timeline({ defaults: { ease: "power1.out" } });

		timelane.to(".textanim", { y: "0%", duration: 1, stagger: 0.25 });
		timelane.to("#slider", { y: "-100%", duration: 1.5, delay: 0.5 }); // delay the animation of 0.5s
		timelane.to("#intro", { y: "-100%", duration: 1 }, "-=1.1");
		timelane.fromTo(".about", { opacity: 0 }, { opacity: 1, duration: 1 });
		timelane.fromTo(
			".mass-text",
			{ opacity: 0 },
			{ opacity: 1, duration: 1 },
			"-=1"
		);
	},
};
</script>
<!-- 
<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

main {
	font-family: "Satisfy", cursive;
}

.landing {
	height: 100vh;
	background: url(https://c.pxhere.com/photos/23/ea/apple_black_and_white_camera_coder_coffee_computer_cup_desk-928093.jpg!d)
		no-repeat;
	background-size: cover;
	padding: 0rem 5rem;
}

nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 10vh;
}

.nav-links {
	display: flex;
	list-style: none;
}

.nav-links li {
	padding-left: 10rem;
	font-size: 1.2rem;
}

#logo {
	font-weight: lighter;
	font-size: 2rem;
}

.mass-text {
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -30%);
	font-size: 5rem;
	color: rgb(41, 41, 41);
}

.intro {
	background: black;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.slider {
	background: rgb(98, 105, 109);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform: translateY(100%);
	/* transition: ease 5s; */
}

.intro-text {
	color: aliceblue;
	font-size: 3rem;
	font-family: serif;
}

.hide {
	background: black;
	overflow: hidden;
}

.hide span {
	transform: translateY(100%);
	display: inline-block;
}
</style>
 -->
