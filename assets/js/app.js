
// Code carrousels

(function () {
    "use strict";
    const slideTimeout = 5000;
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const $slides = document.querySelectorAll('.slide');
    let $dots;
    let intervalId;
    let currentSlide = 1;

    function slideTo(index) {
        currentSlide = index >= $slides.length || index < 1 ? 0 : index;
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
        $dots.forEach(($elt, key) => $elt.classList = `dot ${key === currentSlide? 'active': 'inactive'}`);
    }

    function showSlide() {
        slideTo(currentSlide);
        currentSlide++;
    }

    for (let i = 1; i <= $slides.length; i++) {
        let dotClass = i == currentSlide ? 'active' : 'inactive';
        let $dot = `<span data-slidId="${i}" class="dot ${dotClass}"></span>`;
        document.querySelector('.carousel-dots').innerHTML += $dot;
    }

    $dots = document.querySelectorAll('.dot');

    $dots.forEach(($elt, key) => $elt.addEventListener('click', () => slideTo(key)));

    prev.addEventListener('click', () => slideTo(--currentSlide));
    next.addEventListener('click', () => slideTo(++currentSlide));

    intervalId = setInterval(showSlide, slideTimeout);

    $slides.forEach($elt => {
        let startX;
        let endX;

        $elt.addEventListener('mouseover', () => {
            clearInterval(intervalId);
        }, false);

        $elt.addEventListener('mouseout', () => {
            intervalId = setInterval(showSlide, slideTimeout);
        }, false);

        $elt.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
        });

        $elt.addEventListener('touchend', (event) => {
            endX = event.changedTouches[0].clientX;

            if (startX > endX) {
                slideTo(currentSlide + 1);
            } else if (startX < endX) {
                slideTo(currentSlide - 1);
            }
        });
    });
})();

$(document).ready(function() {
    $('#email').attr('href', 'mailto:abc@mail.com');
  });