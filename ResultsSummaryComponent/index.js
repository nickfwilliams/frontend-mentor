"use strict";

const userScores = document.querySelectorAll(".score-data");

fetch("./data.json")
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		data.forEach((user, index) => {
			userScores[index].insertAdjacentHTML(
				"beforeend",
				`<p>${user.score} </p><p>/ 100</p>`
			);
		});
	});
