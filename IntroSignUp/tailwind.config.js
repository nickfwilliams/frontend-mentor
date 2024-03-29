/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html,js}"],

	theme: {
		// variant: {
		// 	extend: {
		// 		border: ["responsive", "hover", "focus"],
		// 	},
		// },

		extend: {
			boxShadow: {
				md: "0px 8px 0px 0px rgba(0,0,0,0.2)",
				outline: "0px 0px 0px 3px orange",
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
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active"],
	},
	plugins: [],
};
