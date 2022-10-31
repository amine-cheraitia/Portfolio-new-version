import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* import AOS from "aos"; */
import "aos/dist/aos.css";
import { gsap } from "gsap";
/* fontawesome */
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

createApp(App).use(store).use(gsap).use(router).mount("#app");
