<template>
	<div>
		<!-- <div class=""> -->
		<!-- 		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav> -->
		<div>
			<div
				id="main"
				class="w-screen h-screen bg-black flex items-center justify-center relative overflow-hidden"
			>
				<div
					id="video-contener"
					class="absolute top-0 left-0 min-w-full min-h-full bg-landing bg-cover bg-center"
				>
					<video
						class="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full max-w-max"
						src="../assets/Black_GoldBackground.mp4"
						disablePictureInPicture
						loop=""
						muted
						autoplay=""
					></video>
				</div>
				<div
					id="overlay"
					class="absolute w-full h-full top-0 left-0 bg-back-rgba"
				></div>
			</div>
			<!-- <h1 class="text-cyan-500">This is  san about page</h1> -->
		</div>

		<div class="absolute top-0 left-0 w-full h-full">
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col"
			>
				<h1 class="text-7xl font-Montserrat drop-shadow-xl" style="color: #fff">
					Welcome
				</h1>
				<router-link
					to="about"
					class="bg-white/5 hover:font-bold backdrop-blur-sm text-white border-4 px-4 py-1 m-4 lg:m-6 inline-block text-center shadow-lg rounded-full cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
					>Let's Go !</router-link
				>
			</div>
			<!-- 			<h1 class="text-7xl top-1/2 left-" style="color: #55482a">Welcome</h1> -->
		</div>
		<div class="fixed bottom-5 text-white w-full flex justify-between px-7">
			<span class="text-sm">© AMINE CHERAITIA 2021-2023</span>
			<a href="https://github.com/amine-cheraitia"
				><i class="fa-brands fa-github"></i> Github</a
			>
		</div>
		<div
			id="intro"
			class="bg-black fixed top-0 left-0 w-full h-full flex items-center justify-center"
		>
			<div
				class="intro-text sm:text-6xl md:text-7xl lg:text-8xl text-5xl text-amber-50 font-serif"
			>
				<h1 class="bg-black overflow-hidden mb-5 pb-1.5">
					<span class="textanim translate-y-full inline-block"
						>Creating inovation</span
					>
				</h1>
				<h1 class="bg-black overflow-hidden pb-1.5">
					<span class="textanim translate-y-full inline-block"
						>For Everyday</span
					>
				</h1>
				<h1 class="bg-black overflow-hidden pb-1.5">
					<span class="textanim translate-y-full inline-block">people.</span>
				</h1>
			</div>
		</div>
		<div
			id="slider"
			class="bg-gray-900 fixed top-0 left-0 w-full h-full translate-y-full"
			style="background: #55482a"
		></div>

		<!-- </div> -->
	</div>
</template>
<script>
import { gsap } from "gsap";
export default {
	mounted() {
		const timelane = gsap.timeline({ defaults: { ease: "power1.out" } });
		timelane.to(".textanim", { y: "0%", duration: 1, stagger: 0.25 });
		timelane.to("#slider", { y: "-100%", duration: 1.5, delay: 0.5 }); // delay the animation of 0.5s
		timelane.to("#intro", { y: "-100%", duration: 1 }, "-=1.1");
		timelane.fromTo(".home", { opacity: 0 }, { opacity: 1, duration: 1 });
		timelane.fromTo(
			".mass-text",
			{ opacity: 0 },
			{ opacity: 1, duration: 1 },
			"-=1"
		);
	},
};
</script>
<style>
/* #video-contener {
	background: darkgray url("../assets/bg-black.png") center center/cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
body {
	min-width: 300px;
} */
</style>
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
