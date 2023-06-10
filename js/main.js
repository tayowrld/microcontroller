
var sliderItems = document.querySelectorAll('.slider-item');
var sliderControls = document.querySelectorAll('.slider-controls button');
var prevArrow = document.querySelector('.slider-arrow-prev');
var nextArrow = document.querySelector('.slider-arrow-next');

function setActiveSlide(index) {
    for (var i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove('active');
        sliderControls[i].classList.remove('active');
    }

    sliderItems[index].classList.add('active');
    sliderControls[index].classList.add('active');
}

function nextSlide() {
    var currentSlideIndex = Array.from(sliderItems).findIndex(function(item) {
        return item.classList.contains('active');
    });

    var nextSlideIndex = (currentSlideIndex + 1) % sliderItems.length;

    setActiveSlide(nextSlideIndex);
}

function prevSlide() {
    var currentSlideIndex = Array.from(sliderItems).findIndex(function(item) {
        return item.classList.contains('active');
    });

    var prevSlideIndex = (currentSlideIndex - 1 + sliderItems.length) % sliderItems.length;

    setActiveSlide(prevSlideIndex);
}

function startSlider() {
    setInterval(nextSlide, 10000);
}

prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

startSlider();



var spoilers = document.querySelectorAll('.spoiler');

spoilers.forEach(function(spoiler) {
    var header = spoiler.querySelector('.spoiler-header');

    header.addEventListener('click', function() {
        spoiler.classList.toggle('opened');
    });
});