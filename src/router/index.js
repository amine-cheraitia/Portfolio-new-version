import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from "@/views/ProjectsView.vue";
import TryViewVue from "@/views/TryView.vue";

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
	},
	{
		path: "/projects",
		name: "projects",
		component: Projects,
	},
	{
		path: "/try",
		name: "try",
		component: TryViewVue,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: HomeView,
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

export default router;
