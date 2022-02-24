# Frontend Mentor - Four card feature section solution

This is a solution to the [Space Tourism feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](images/screenshot-mobile.png)
![](images/screenshot-desktop.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/nickfwilliams/frontend-mentor/tree/master/SpaceTourism)
- Live Site URL: [Add live site URL here](https://nickfwilliams.github.io/frontend-mentor/SpaceTourism/index.html)

## My process

This was a gudied project with Kevin Powell. For the most part I was able to complete all the challenges he set apart from the majority of the JS challenges. This is obviously an area where I need to spend more time. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS
- Mobile-first workflow

### What I learned

During this project my biggest learning point was how to start with a design file and code the CSS before to match that before beginning on the actual site. This was also the first time that I had seen utility classes in use and plan to utilise those in my next project. This was also a good lesson for grid and grid-area practice as I really understood what was happening with the naming and the media queries to control the layout.

I've included the below code as this was a challenge from the end of the project that we had to complete ourselves with no video assistance. 

```html
    <div class="numbers flex" style="--gap: 2rem;" role="tablist" aria-label="technology list">
      
      <button aria-selected="true" class="fs-500 ff-serif bg-dark text-white" role="tab" tabindex="0" aria-controls="launch-vec-tab" data-image="launch-image">1</button>

      <button aria-selected="false" class="fs-500 ff-serif bg-dark text-white" role="tab" tabindex="-1" aria-controls="capsule-tab" data-image="capsule-image">2</button>

      <button aria-selected="false" class="fs-500 ff-serif bg-dark text-white" role="tab" tabindex="-1" aria-controls="port-tab" data-image="spaceport-image">3</button>

    </div>
```
```css
    .numbers > * {
    cursor: pointer;
    border: 1px solid hsl( var(--clr-white) / .25);
    border-radius: 50%;
    padding: .5em;
    aspect-ratio: 1;
    position: relative;
    display: inline-grid;
    place-items: center;
    padding: 0 1em;
}

.numbers > *:hover,
.numbers > *:focus { 
    border-color: hsl( var(--clr-white) / 1);
}

.numbers > [aria-selected="true"] {
    background-color: hsl( var(--clr-white) / 1);
    color: hsl( var(--clr-dark) ); 
}
```

### Continued development

This really opened my eyes to how complicated and 'messy' CSS can get. Keeping things organised and structured will be really key in the future, especially as projects get larger.

### Useful resources

- [Example resource 1](https://css-tricks.com/snippets/css/complete-guide-grid/) - No explanation needed!
- [Example resource 2](https://www.w3schools.com/tags/att_img_alt.asp) - This was useful for a bit more reading into alt attributes and whether they are needed for decorative attributes.

## Author

- Website - [Nick Williams](https://nickfwilliams.co.uk)
- Frontend Mentor - [@ynickfwilliams](https://www.frontendmentor.io/profile/nickfwilliams)
- Github - [@nickfwilliams](https://github.com/nickfwilliams/)

## Acknowledgments

Thanks to @Annab6 and her portfolio on Github that really helped with a few of the trickier 'tidy-up' problems.
