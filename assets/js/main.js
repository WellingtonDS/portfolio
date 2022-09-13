// === SCROOL SUAVE ===

const menuItem = document.querySelectorAll('.nav-list a')

menuItem.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})


function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;


    scrollToPosition(to)

};

function scrollToPosition(to) {

    window.scroll({
        top: to,
        behavior: "smooth",
    })
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop
}




/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*===== ACTIVAR E REMOVER MENU =====*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remover menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMAÇÃO =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*===== ano copyright dinâmico =====*/
const ano = document.getElementById("ano");
  const anoAtual = new Date();

  ano.innerHTML = anoAtual.getFullYear();

/*SCROLL HOME*/
sr.reveal('.home-title-color',{interval: 300}); 
sr.reveal('.home-data',{}); 
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 100}); 


/*SCROLL SOBRE*/
sr.reveal('.sobre-img',{}); 
sr.reveal('.sobre-title',{delay: 400}); 
sr.reveal('.sobre-text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills-title',{}); 
sr.reveal('.skills-text',{interval: 400}); 
sr.reveal('.skills-data',{interval: 200}); 
sr.reveal('.skills-img',{delay: 600});

/*SCROLL PROJETOS*/
sr.reveal('.projeto-img',{interval: 200}); 
sr.reveal('.projeto-title',{interval: 400}); 
sr.reveal('.projeto-text',{interval: 600}); 
sr.reveal('.bg-img',{interval: 800});

// SCROOL PRPJETOS CARDS
sr.reveal('.projetos-img',{interval: 400}); 
sr.reveal('.projetos-img',{interval: 500}); 
sr.reveal('.projetos-img',{interval: 600}); 

/*SCROLL FEEDBACK */
sr.reveal('.section-title-feedback', {interval:200}); 
sr.reveal('.feed-title',{}); 
sr.reveal('.feed-img',{delay: 400});

/*SCROLL CONTATO*/
sr.reveal('.contato-input',{interval: 800});
sr.reveal('.contato-button',{interval: 300});

sr.reveal('.section-title', {interval:200})
sr.reveal('.home-data', {});
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.home-social-icon', { interval: 100 });

/*SCROLL SOBRE*/
sr.reveal('.sobre-img', {});
sr.reveal('.sobre-title', { delay: 400 });
sr.reveal('.sobre-text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills-title', {});
sr.reveal('.skills-text', { interval: 400 });
sr.reveal('.skills-data', { interval: 200 });
sr.reveal('.skills-img', { delay: 600 });

/*SCROLL PROJETOS*/
sr.reveal('.projeto-img', { interval: 200 });
sr.reveal('.projeto-title', { interval: 400 });
sr.reveal('.projeto-text', { interval: 600 });
sr.reveal('.bg-img', { interval: 800 });

/*SCROLL CONTATO*/
sr.reveal('.contato-form', { interval: 200 });
sr.reveal('.contato-button', { interval: 300 });

sr.reveal('.section-title', { interval: 200 })


sr.reveal('.footer-icon', { interval: 100 })

