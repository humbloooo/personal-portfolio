const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-nav');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-nav');
    });
}

const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
    navMenu.classList.remove('show-nav');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

function scrollHeader() {
    const header = document.querySelector('.nav-header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        let sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-section');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-section');
        }
    });
}
window.addEventListener('scroll', scrollActive);
