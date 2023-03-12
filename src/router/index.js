import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from "@/views/ProjectsView.vue";
import TryViewVue from "@/views/TryView.vue";
import { gsap } from "gsap";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
		meta: {
			transitionName: "slide",
		},
	},
	{
		path: "/projects",
		name: "projects",
		component: Projects,
		meta: {
			transitionName: "slide",
		},
	},
	{
		path: "/try",
		name: "try",
		component: TryViewVue,
		meta: {
			transitionName: "slide",
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: HomeView,
		meta: {
			transitionName: "slide",
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.name === "notFound") {
		router.push("/");
	} else {
		next();
	}
});

router.beforeEach((to, from, next) => {
	if (to.meta.transitionName === "slide") {
		gsap.to("#sl2", {
			duration: 0.6,
			y: "110vh",
		});
		gsap.to("#sl", {
			duration: 0.8,
			y: "110vh",
			onComplete: () => {
				next();
				gsap.to("#sl2", {
					duration: 1.2,
					y: "-110vh",
				});
				gsap.to("#sl", {
					duration: 1,
					y: "-110vh",
				});
			},
		});
	} else {
		next();
	}
});

export default router;
