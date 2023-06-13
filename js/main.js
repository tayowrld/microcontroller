
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

var accept = true;

function buy(){
    if (accept == true){
        window.location.href = 'http://mastercpu.e-autopay.com/buy/279286';
    }
    else{
        alert("Необходимо согласие");
    }
}

document.getElementById('agreeCheckbox').addEventListener('change', function() {
    if(this.checked) {
        accept = true;
    } else {
        accept = false;
    }
    console.log('Accept:', accept);
});


$(document).ready(function(){
    // Событие отправки формы
    $("#whatsapp-form").submit(function(e){
        e.preventDefault();
        let message = $("#message").val();
        let whatsappNumber = "+7 917 791-06-54"; // Ваш номер телефона
        let whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
        window.open(whatsappURL);
        hidePopup(); // Закрывает окно после отправки
    });
});
function showPopupOnOff() {
    if (document.getElementById("whatsapp-popup").getAttribute("class") == "popup"){
        document.getElementById("whatsapp-popup").setAttribute("class","popup active-popup");
    }
    else{
        document.getElementById("whatsapp-popup").setAttribute("class","popup");
    }
}