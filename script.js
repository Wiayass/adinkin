document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarLogoText = document.querySelector(".navbar-logo h1");

    burger.addEventListener('click', function (event) {
        event.preventDefault();
        mobileMenu.classList.toggle('active');
        burger.classList.toggle('active');
        navbarLogoText.style.color = mobileMenu.classList.contains("active") ? "black" : "white";

        // Меняем иконку бургер-меню
        if (burger.classList.contains('active')) {
            burger.classList.remove('fa-bars');
            burger.classList.add('fa-times'); // крестик
        } else {
            burger.classList.remove('fa-times');
            burger.classList.add('fa-bars'); // обратно бургер
        }
    });
});


const title = document.querySelector('.title')
const palm1 = document.querySelector('.palm1')
const ocean1 = document.querySelector('.ocean1')
const plantpalm1 = document.querySelector('.plantpalm1')
const plantpalm2 = document.querySelector('.plantpalm2')
const imgbox = document.querySelector('.imgbox')

document.addEventListener('scroll', function(){
    let value = window.scrollY
    //console.log(value)
    title.style.marginTop = value * .4 + 'px'
    palm1.style.transform = `translate(${-value * 0.5}px, ${value * 0.5}px)`;
    plantpalm1.style.marginLeft = -value * .3 + 'px';
    plantpalm2.style.marginRight = -value * .3 + 'px';
    imgbox.style.marginTop = -value * .5 + 'px';
})






const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 1; // Начинаем со второго элемента (реальный первый слайд)

function updateSlide(instant = false) {
    track.style.transition = instant ? "none" : "transform 1s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    updateSlide();

    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            currentIndex = 1;
            updateSlide(true);
        }, 500);
    }
}

function prevSlide() {
    currentIndex--;
    updateSlide();

    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = totalSlides - 2;
            updateSlide(true);
        }, 500);
    }
}

// Начальная позиция (сдвиг на 1 слайд вправо)
updateSlide(true);


document.querySelector(".hotelki button").addEventListener("click", function() {
    document.getElementById("slider").scrollIntoView({ behavior: "smooth" });
});




