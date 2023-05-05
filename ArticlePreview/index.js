"use strict";

// Set global variables
const shareBtnInactive = document.getElementById("inactive-share");
const shareBtnActive = document.getElementById("active-share");
const inactive = document.querySelector(".card__post-info--inactive");
const active = document.querySelector(".card__post-info--active");
const toolTipText = document.querySelector(".tooltiptext");

// Mobile solution - //! Needs fixing

// Hide author info panel and display share panel
if (window.innerWidth < 700) {
	shareBtnInactive.onclick = function () {
		if ((inactive.style.display = "flex")) {
			inactive.style.display = "none";
			active.style.display = "flex";
		}
	};

	// Hide share panel and display author info panel
	shareBtnActive.onclick = function () {
		if ((active.style.display = "flex")) {
			active.style.display = "none";
			inactive.style.display = "flex";
		}
	};
}

// Desktop solution - //* Needs implementing

shareBtnInactive.onclick = function () {
	toolTipText.style.visibility = "visible";
};

document.querySelector("html").addEventListener("click", function (event) {
	if (event.target !== shareBtnInactive)
		toolTipText.style.visibility = "hidden";
});
