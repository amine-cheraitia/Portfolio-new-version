const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"back-rgba": "rgba(0,0,0,0.5)",
				"orange-bg": "#55482a",
			},
			fontFamily: {
				Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
				Poppins: ['"Poppins"'],
			},
			colors: {
				golden: "#55482a",
			},
			backgroundImage: {
				"gestion-cac": "url('/src/assets/gestioncac.png')",
			},
		},
	},
	plugins: [],
};
