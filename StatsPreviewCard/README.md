# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](images/screenshot-desktop.png)
![](images/screenshot-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/nickfwilliams/frontend-mentor/tree/master/StatsPreviewCard)
- Live Site URL: [Add live site URL here](https://nickfwilliams.github.io/frontend-mentor/StatsPreviewCard/index.html)

## My process

Despite an easy start with the mobile layout, when it came to swapping out the mobile image for the desktop image, I found this quite tricky. In the end I used an empty div and the background-image css property to swap this around. One bonus this approach had was that it allowed me to add the purple overlay (via background-blend-mode) without the need for an additional div over the top. I'm not fully happy with the final image solution but feel it's in a good enough place to move onto the next challenge.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

My biggest learning from this project was around the background-image css property and how to use this to swap out an image via a media query. As mentioned above, I'm not completely satisfied with this solution (see code below) but it does what I need it to and I'll investigate other people's solutions so I know how to do it properly next time.

```html
<div id="main-image"></div>
```
```css
#main-image {
    background-image: url("images/image-header-mobile.jpg");
    background-color: hsla(277, 64%, 61%, 0.842);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 225px;
    border-radius: 8px 8px 0 0;
}

@media screen and (min-width: 800px) {
    #main-image {
        background-image: url("images/image-header-desktop.jpg");
        border-radius: 0 8px 8px 0;
        height: 310px;
        width: 1000px;
    }

```

### Continued development

I need to get back on the grid train - I've not used this enough and it'll be an important skill to be able to progress to a 'full-size' website.

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/21374534/css-background-image-not-loading) - This helped me solve an issue with my images displaying correctly.
- [Example resource 2](https://www.w3schools.com/cssref/pr_background-image.asp) - The W3 Schools website was great for a deeper dive on the background image properties.


## Author

- Website - [Add your name here](https://nickfwilliams.co.uk)
- Frontend Mentor - [@nickfwilliams](https://www.frontendmentor.io/profile/nickfwilliams)
- Github - [@nickfwilliams](https://github.com/nickfwilliams)
