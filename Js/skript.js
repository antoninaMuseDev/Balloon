let slideIndex = 1;
showSlades(slideIndex);

function plusSlides(n) {
    showSlades(slideIndex += n);
}
function currentSlide(n) {
    showSlades(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("swiper-slider");
    let dots = document.getElementsByClassName("dot");
    if (n > slideslength) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace(" activ", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "activ"
}
