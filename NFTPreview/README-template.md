# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](/images/project-screenshot.jpg)

### Links

- Solution URL: [https://github.com/nickfwilliams/frontend-mentor/tree/master/NFTPreview]
- Live Site URL: [https://fem-nft-preview.vercel.app/#]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This project really helped me to start thinking about organising my HTML & CSS and commenting it appropriately. I was also able to use my recent Flexbox learnings to build out the component card layout. The trickiest part of the project was working out how to do the main image colour change on hover as the white 'eye' icon had to be 100% opacity at the same time as a semi transparent layer.

I've included the CSS hover solution below:

```css
.overlay {
        position: relative;
        display: block;
        border-radius: 7px;
        cursor: pointer;
    }
    
    .overlay > img {
        vertical-align: middle;
    }
    
    .overlay::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 7px;
        background-color: hsl(178, 100%, 50%, 0.5);
        background-image: url(/images/icon-view.svg);
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: .5s linear;
    }
    
    .overlay:hover::before {
        opacity: 1;
        border-radius: 7px;
      }
```

### Continued development

I think my next focus needs to be two fold:

1) Now I'm getting used to Flexbox, I need to start working on my frid skills.
2) I need to make sure I'm _really_ understanding what's happening with psudo CSS elements such as before and after.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/45227666/adding-an-semi-transparent-overlay-to-a-column-on-hover-while-also-removing-the) - This helped me get started with the semi-transparent hover effect.
- [w3 Schools](https://www.w3schools.com/cssref/pr_background-image.asp) - This was useful in helping me investigate the background-image properties. 

## Author

- Website - [Nick Williams](https://www.your-site.com)
- Frontend Mentor - [@nickfwilliams](https://www.frontendmentor.io/profile/nickfwilliams)
- Git Hub - [@nickfwilliams](https://www.github.com/nickfwilliams)
