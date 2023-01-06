// Get rating element
function getButtonText() {
  let button = document.getElementsByClassName("ratingBtn");
  let text = button.textContent;
  return text;
}

// Insert rating element into empty space
document.getElementById("ratingSelected").textContent = getButtonText();

// Toggle windows
const toggleDisplay = (target) =>
  (target.style.display = target.style.display == "none" ? "block" : "none");
