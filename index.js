window.addEventListener("load", function(){
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderDots = document.querySelectorAll(".slider-dot-item");
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length; 
let positionX = 0;
let index = 0;
sliderNext.addEventListener("click", function () {
    moveSlider(1);
});
sliderPrev.addEventListener("click", function() {
    moveSlider(-1);
});
function moveSlider (direction){
    if (direction === 1){
        index++
        if (index >= sliderLength) return;
        positionX = positionX - sliderItemWidth;
        sliderMain.style = 'transform: translateX{$(positionX)px}';

    } else if (direction === -1){

    }
}
});