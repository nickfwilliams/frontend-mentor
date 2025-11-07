"use strict";

const navToggle = document.querySelector(".mobile-nav-toggle");

if (navToggle) {
	navToggle.addEventListener("click", () => {
		console.log("clicked");
	});
}
