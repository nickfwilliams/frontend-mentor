document.addEventListener("DOMContentLoaded", () => {
	const errorMessage = document.getElementById("error-message");
	const form = document.getElementById("emailForm");
	const emailInput = document.getElementById("email");
	const errorIcon = document.getElementById("error-icon");

	form.addEventListener("submit", (e) => {
		const emailValue = emailInput.value.trim();

		// Handle invalid email
		if (!emailInput.validity.valid) {
			e.preventDefault(); // Prevent form submission
			errorMessage.style.visibility = "visible";
			errorIcon.style.display = "block";
		} else {
			e.preventDefault(); // Prevent form submission
			// Handle valid email
			errorMessage.style.visibility = "hidden";
			errorIcon.style.display = "none";
		}
	});
});
