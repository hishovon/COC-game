
const sr = ScrollReveal({

    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin: 'top'});
sr.reveal('.hero-img',{delay:450, origin: 'top'});
sr.reveal('.icon',{delay:500, origin: 'left'});
sr.reveal('.scroll-down',{delay:500, origin: 'right'});
sr.reveal('.cards',{delay:700, origin: 'bottom'});
sr.reveal('.scroll',{delay:500, origin: 'right'});
sr.reveal('.town',{delay:500, origin: 'left'});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {

menu.classList.toggle('bx-x');
navlist.classList.toggle('open');

}