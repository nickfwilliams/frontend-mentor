# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](/images/screenshot.png)


### Links

- Solution URL: [https://github.com/nickfwilliams/frontend-mentor/tree/master/3ColumnPreview]
- Live Site URL: [https://fem-3-column-preview.vercel.app/]

## My process

For this project I started with the mobile layout first and chunked the CSS up into consituant parts, beginning with universal styles before later moving onto the layout.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned that I couldn't use border-radius on my main-container because the container section card divs over lapped it and showed as squared corners. In the end, I specifically targeted the required corners on the first and last card sections to achieve the effect.

I also learned about mix-blend-mode and how that can be used to create transparent words that allow the bg-color to show through.

See below code example:

```css
.button-link {
    font-family: 'Lexend Deca', sans-serif;
    background-color: var(--light-gray);
    display: block;
    color: #000;
    width: 150px;
    padding: 1em;
    border-radius: 30px;
    text-decoration: none;
    mix-blend-mode: screen;
    text-align: center;
}

.button-link:hover {
    mix-blend-mode: normal;
    background: transparent;
    box-shadow: inset 0 0 0 2px rgba(255,255,255);
    color: white;
}
```

### Continued development

The next project should utilise CSS grid so I can reinforce my new knowledge of that tool. 

### Useful resources

- [FreeCodeCamp](https://www.freecodecamp.org/news/html-button-link-code-examples-how-to-make-html-hyperlinks-using-the-href-attribute-on-tags/) - This helped me to remove the button attribute and style the link to look like a button.
- [Stack Overflow](https://stackoverflow.com/questions/52319787/css-button-with-transparent-text) - This helped me wrap my head around transparent text on a button using the mix-blend-mode.

## Author

- Website - [Nick Williams](https://www.nickfwilliams.co.uk)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/nickfwilliams)
- Guthub - [@nickfwilliams](https://github.com/nickfwilliams/)
