
// NAV TOGGLER

const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', toggleNav);


function toggleNav() {
    navToggler.classList.toggle('active')
    document.querySelector('.nav').classList.toggle('open');
}

document.addEventListener('click', function(e){
    if(e.target.closest('.nav-item')){
        toggleNav();
    }
})