// Slider

const allSlideImages = document.querySelectorAll('.favorite-slider-container .favorite-slider-container-line .favorite-slider');
const favoriteSliderContainerLine = document.querySelector('.favorite-slider-container-line');
const controlBtns = document.querySelectorAll('.control-btn');
let margin = 200;
let count = 0;
let width = 480;
let interval = 5000;
let autoSlideTimer;

function init() {
    favoriteSliderContainerLine.style.width = (width + margin) * allSlideImages.length + 'px';
    allSlideImages.forEach(item => {
        item.style.width = width + 'px';
        item.style.marginRight = margin + 'px';
        item.style.height = 'auto';
    });
}

init();

document.querySelector('.right-btn').addEventListener('click', function () {
    count++;
    if (count >= allSlideImages.length) {
        count = 0;
    }
    rollSliderRight();
    resetAutoSlideTimer();
    activateControl(count);
});

document.querySelector('.left-btn').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = allSlideImages.length - 1;
    }
    rollSliderLeft();
    resetAutoSlideTimer();
    activateControl(count);
});

function rollSliderRight() {
    favoriteSliderContainerLine.style.transform = 'translate(-' + count * (width + margin) + 'px)';
}

function rollSliderLeft() {
    favoriteSliderContainerLine.style.transform = 'translate(-' + count * (width + margin) + 'px)';
}

function activateControl(index) {
    controlBtns.forEach((control, i) => {
        control.classList.toggle('active', i === index);
    });
}

function autoSlide() {
    count = (count + 1) % allSlideImages.length;
    rollSliderRight();
    activateControl(count);
}

function startAutoSlideTimer() {
    autoSlideTimer = setInterval(autoSlide, interval);
}

function resetAutoSlideTimer() {
    clearInterval(autoSlideTimer);
    startAutoSlideTimer();
}

controlBtns.forEach((control, index) => {
    control.addEventListener('click', function () {
        count = index;
        rollSliderRight();
        resetAutoSlideTimer();
        activateControl(count);
    });
});

startAutoSlideTimer();
activateControl(0);

const slider = document.querySelector('.favorite-slider-container-line');
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
        count--;
        if (count < 0) {
            count = allSlideImages.length - 1;
        }
    } else if (deltaX < -50) {
        count++;
        if (count >= allSlideImages.length) {
            count = 0;
        }
    }

    rollSliderRight();
    resetAutoSlideTimer();
    activateControl(count);
}

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);