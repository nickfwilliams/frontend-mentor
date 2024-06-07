# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](https://github.com/nickfwilliams/frontend-mentor/blob/master/AdviceGenerator/images/solution_screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/advice-generator-using-scss-and-css-variables--J4He9inmd)
- Live Site URL: [Add live site URL here](https://nickfwilliams.github.io/frontend-mentor/AdviceGenerator/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox

### What I learned

- How to use box-shadow to make a luminescent blur to elements.
- Using a promise to fetch API data

```css
&:hover {
	cursor: pointer;
	box-shadow: 0 0 100px var(--neon-green);
}
```

```js
		<script>
			const apiUrl = "https://api.adviceslip.com/advice";
			const adviceNumber = document.getElementById("advice-number");
			const adviceText = document.getElementById("advice-text");
			const diceBtn = document.getElementById("diceBtn");

			diceBtn.addEventListener("click", () => {
				fetch(apiUrl)
					.then((response) => {
						if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						return response.json();
					})
					.then((data) => {
						console.log(data);
						adviceNumber.textContent = `advice #${data.slip.id}`;
						adviceText.textContent = `"${data.slip.advice}"`;
					})
					.catch((error) => {
						console.error("Error:", error);
					});
			});
		</script>
```

### Continued development

I need more practice with Promises as I understand the concept but need to spend more time getting my hands dirty with them. Complete Jonas Schmedtmann's chapter on Promises.

### Useful resources

- [MDN JavaScript Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) - This better helped me understand chaining methods like .then and .catch. It also made it clearer about using data.json to get data you can work with in the browser.
- [Creating Glow Effects](https://codersblock.com/blog/creating-glow-effects-with-css/) - This was a really helpful site that walked me through several elements of CSS glow effects. It also includes some really excellent examples!

## Author

- Frontend Mentor - [@ennfer](https://www.frontendmentor.io/profile/ennfer)
- Code Wars - [@nickfwilliams](https://www.codewars.com/users/nickfwilliams)
