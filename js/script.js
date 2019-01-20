var button1 = document.querySelector('.slider-btn-1');
var button2 = document.querySelector('.slider-btn-2');

var slider = document.querySelector('.slider');

var selected = "50px";

button1.addEventListener("click", function(){
    button1.style.background = "linear-gradient(to top, #02b0e6 0%, #99dff5 100%)";
    button2.style.background = "linear-gradient(to top, #6d6c6c 0%, #ffffff 80%, #c9c9c9 100%)";
    
    slider.style.background = 'no-repeat url("./img/slider1.jpg")';
}, false)

button2.addEventListener("click", function(){
    button2.style.background = "linear-gradient(to top, #02b0e6 0%, #99dff5 100%)";
    button1.style.background = "linear-gradient(to top, #6d6c6c 0%, #ffffff 80%, #c9c9c9 100%)";
    
    slider.style.background = 'no-repeat url("./img/slider2.jpg")';
}, false)