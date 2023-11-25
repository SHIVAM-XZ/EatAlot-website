let nav = document.querySelector('.navbar');
let search = document.querySelector('#search')
let menu = document.querySelector('#bar')
let input = document.querySelector('.input')
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a')
menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    nav.classList.toggle('active');

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('fix');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
            })
        }
    })
}

search.onclick = () => {
    search.classList.toggle('fa-xmark')
    input.classList.toggle('activate')
}
var swiper = new Swiper(".slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});