/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html,js}"],
	theme: {
		extend: {
			boxShadow: {
				md: "0px 10px 0px 0px rgba(0,0,0,0.3)",
			},
			fontFamily: {
				body: ["Poppins", "sans-serif"],
			},

			colors: {
				femRed: "hsl(0, 100%, 74%)",
				femGreen: "hsl(154, 59%, 51%)",
				femBlue: "hsl(248, 32%, 49%)",
				femDarkBlue: "hsl(249, 10%, 26%)",
				femGreyBlue: "hsl(246, 25%, 77%)",
			},
		},
	},
	plugins: [],
};
