/*!
 * spare-landing-page v0.0.1
 * Spare Landing Page
 * (c) 2021 Brian Matthew B. Mamaril
 * MIT License
 * 
 */

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
// var hamburger = document.querySelector('.hamburger-wrap')
// hamburger.addEventListener('click', function(e) {
// 	if (document.querySelector('.hamburger').classList.contains('is-active')) {
// 			document.querySelector('.hamburger').classList.remove('is-active')
// 			document.querySelector('.nav-mobile').classList.remove('is-shown')
// 			document.body.classList.remove('overflow-hidden')
// 	} else {
// 		document.querySelector('.hamburger').classList.add('is-active')
// 		document.querySelector('.nav-mobile').classList.add('is-shown')
// 		document.body.classList.add('overflow-hidden')
// 	}
// })

var body = document.body;
var triggerMenu = document.querySelector(".rolling-menu");
var scrollUp = "scroll-up";
var scrollDown = "scroll-down";
var lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp)
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp)
    body.classList.add(scrollDown)
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown)
    body.classList.add(scrollUp)
  }
  lastScroll = currentScroll
})