window.addEventListener("load", () => {
	// Initially hide the thankyou-section
	document.querySelector(".thankyou-section").classList.add("hide-window");

	document.querySelector("#rating-form").addEventListener("submit", (e) => {
		e.preventDefault(); // Prevent the form from being submitted

		// Hide the rating-section
		document.querySelector(".rating-section").classList.add("hide-window");

		// Show the thankyou-section
		document.querySelector(".thankyou-section").classList.remove("hide-window");

		// Get the selected rating value
		const selectedRating = document.querySelector(
			'input[name="rating"]:checked'
		).value;

		// Set the result text
		document.querySelector("#result").textContent = `${selectedRating} `;
	});
});
