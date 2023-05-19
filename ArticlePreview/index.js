"use strict";

// Set global variables
const shareBtnInactive = document.getElementById("inactive-share");
const shareBtnActive = document.getElementById("active-share");
const inactive = document.querySelector(".card__post-info--inactive");
const active = document.querySelector(".card__post-info--active");
const toolTipText = document.querySelector(".tooltiptext");

// Mobile solution

// Hide author info panel and display share panel
if (window.innerWidth < 700) {
	shareBtnInactive.onclick = function () {
		console.log("clicked");
		if ((inactive.style.display = "flex")) {
			inactive.style.display = "none";
			active.style.display = "flex";
		} else {
			active.style.display = "flex";
			inactive.style.display = "none";
		}
	};

	shareBtnActive.onclick = function () {
		console.log("clicked");
		if ((active.style.display = "flex")) {
			active.style.display = "none";
			inactive.style.display = "flex";
		} else {
			inactive.style.display = "flex";
			active.style.display = "none";
		}
	};
}

// Desktop solution

if (window.innerWidth > 700) {
	shareBtnInactive.onclick = function () {
		toolTipText.style.visibility = "visible";
	};

	document.querySelector("html").addEventListener("click", function (event) {
		if (event.target !== shareBtnInactive)
			toolTipText.style.visibility = "hidden";
	});
}
