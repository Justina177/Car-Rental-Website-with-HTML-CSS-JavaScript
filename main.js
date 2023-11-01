let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => { 
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = scrollreveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reaveal('.text',{delay: 200, origin: 'top'})
sr.reaveal('.form-container form',{delay: 800, origin: 'left'})
sr.reaveal('.heading',{delay: 800, origin: 'top'})
sr.reaveal('.ride-container .box',{delay: 600, origin: 'top'})
sr.reaveal('.services-container .box',{delay: 600, origin: 'top'})
sr.reaveal('.about-container .box',{delay: 600, origin: 'top'})
sr.reaveal('.reviews-container .box',{delay: 600, origin: 'top'})
sr.reaveal('.newsletter-container',{delay: 400, origin: 'bottom'})
