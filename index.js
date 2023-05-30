window.addEventListener("load", function () {
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
    sliderPrev.addEventListener("click", function () {
        moveSlider(-1);
    });
    [...sliderDots].forEach((item) =>
        item.addEventListener("click", function (e) {
            [...sliderDots].forEach((el) => el.classList.remove("active"));
            e.target.classList.add("active");
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style = 'transform: translateX(' + positionX + 'px)';
        })
    )
    function moveSlider(direction) {
        if (direction === 1) {

            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            };

            positionX = positionX - sliderItemWidth;
            sliderMain.style = 'transform: translateX(' + positionX + 'px)';
            index++;
        } else if (direction === -1) {

            if (index <= 0) {
                index = 0;
                return;
            };
            positionX = positionX + sliderItemWidth;
            sliderMain.style = 'transform: translateX(' + positionX + 'px)';
            index--;
        };
        [...sliderDots].forEach((el) => el.classList.remove("active"));
        sliderDots[index].classList.add("active");
    }
});