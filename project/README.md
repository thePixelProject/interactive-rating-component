# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

https://imgur.com/a/SHQBFgw

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- JS

### What I learned

During this small project I learned some fundamentals about javascript, I was already pretty confident being able to recreate the design but was excited to tackle the javascript.

```js
function onSubmit(){
    if (rating_score >= 1 && rating_score <= 5) {
      feedback.classList.add('hidden');
      rating.textContent = rating_score;
      confirmation.classList.remove('hidden');
    }else{
      submitCheck.classList.remove('hidden');
    }
}
```
This piece of code checks to see if the user has submitted a score, if they have not submitted any score and prompt appears telling them to submit a score before allowing them to continue. This is not in the original challenge but I liked it as an addition and was happy to have figured it out.

### Continued development

Learning how to create something like this will prove to be useful in future projects I'm sure. Not sure when I'd need to create one again but having a fundamental understanding will surely help.

## Author

- Website - [Curtis Jordan](https://www.your-site.com)
- Frontend Mentor - [@thePixelProject](https://www.frontendmentor.io/profile/yourusername)
- Instagram - [@yourusername](https://www.twitter.com/yourusername)
