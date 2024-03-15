
// Code carrousels

(function () {
    "use strict";
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const $slides = document.querySelectorAll('.slide');
    let $dots;
    let intervalId;
    let currentSlide = 1;

    function slideTo(index) {
        currentSlide = index >= $slides.length || index < 1 ? 0 : index;
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
        $dots.forEach(($elt, key) => $elt.classList = `dot ${key === currentSlide ? 'active' : 'inactive'}`);
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

    $slides.forEach($elt => {
        let startX;
        let endX;

        $elt.addEventListener('mouseover', () => {
            clearInterval(intervalId);
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


// code article

const articleInfo = [

    {

        id: 0,
        name: "Freddy Fazbear Craft",
        cf_link: "https://static.planetminecraft.com/files/resource_media/schematic/fnafcraft-e400.zip",
        mg_link: "https://mega.nz/folder/I2F2XLSL#gv7YEuRHIFWzJTveVZFldw"

    }

]

function articleGen() {
    const article_container = document.getElementById("project");

    for (let i = 0; i < articleInfo.length; i++) {
        const article = articleInfo[i];

        const articleElement = document.createElement('article');
        articleElement.classList.add('project-article');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('project-img', 'fnaf1');
        articleElement.appendChild(imgDiv);

        const title = document.createElement('h3');
        title.textContent = article.name;
        articleElement.appendChild(title);

        const cfLink = document.createElement('a');
        cfLink.classList.add('article-button');
        cfLink.href = article.cf_link;
        cfLink.textContent = 'Download - CurseForge Config';
        articleElement.appendChild(cfLink);

        const mgLink = document.createElement('a');
        mgLink.classList.add('article-button');
        mgLink.href = article.mg_link;
        mgLink.textContent = 'Download - Mega';
        articleElement.appendChild(mgLink);

        article_container.appendChild(articleElement);
    }
}

articleGen();