// footer menu accordion BEGIN
var footerMenu = function() {
    var w = window.innerWidth;
    console.log('window innerWidth - ' + w);

    if (w < 769) {
        var panelItem = document.querySelectorAll('.footer__menu>.menu__cont>.menu__title');

        Array.from(panelItem).forEach(function(item, i, panelItem) {
            item.addEventListener('click', function() {
                this.classList.toggle('menu__list--active');
            });
        });
    } else {
        return false;
    }
};
// footer menu accordion END


window.onload = function() {
    this.setTimeout(function () {
        document.body.removeChild(document.getElementById('loading'));
        document.getElementById('wrapper').style.display = 'block';
    }, 1000);
    
    return footerMenu();
}

window.onresize = function() {return footerMenu();}


// accordion BEGIN
var panelItem = document.querySelectorAll('.accordion'),
    active = document.getElementsByClassName('panel-active');

Array.from(panelItem).forEach(function(item, i, panelItem) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        if (active.length > 0 && active[0] !== this) {
            active[0].parentNode.style.background = '';
            active[0].nextElementSibling.style.background = '';
            active[0].parentNode.style.paddingBottom = '';
            active[0].classList.remove('panel-active');
        }

        // this.classList.toggle('panel-active');
        if (this.classList.contains('panel-active')) {
            this.parentNode.style.background = '';
            this.nextElementSibling.style.background = '';
            this.parentNode.style.paddingBottom = '';
            this.classList.remove('panel-active');
        } else {
            this.classList.add('panel-active');
            this.parentNode.style.background = '#fcfcfc';
            this.nextElementSibling.style.background = '#fcfcfc';
            this.parentNode.style.paddingBottom = '24px';
        }

    });
});
// accordion END


// slider BEGIN
var slider = tns({
    "container": ".news__list",
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "controls": false,
    "autoplay": true,
    "autoplayHoverPause": true,
    "autoplayButtonOutput": false,
    "loop": true,
    responsive: {
        640: {
            "gutter": 0,
            "nav": true,
            "speed": 100,
            "items": 1
        },
        768: {
            "nav": false,
            "fixedWidth": 220,
            "gutter": 90,
            "items": 3,
            "speed": 1000,
            "autoplayTimeout": 2000
        },
        1280: {
            "nav": false,
            "gutter": 50,
            "fixedWidth": 220,
            "items": 4,
            "speed": 3000,
            "autoplayTimeout": 5000,
        }
    }
});
// slider END



// dropMenu BEGIN
document.getElementById("dropMenu").addEventListener('click', function(e) {
    e.preventDefault();
    let parentContainer = this
        .parentNode
        .parentNode
        .parentNode
        .querySelector('.navigation');

    let bodyNodeElem = this
        .parentNode
        .parentNode
        .parentNode
        .parentNode
        .parentNode;

    parentContainer.classList.add('navigation--active');
});

document.getElementById("close__btn").addEventListener('click', function(e) {
    e.preventDefault();
    let parentContainer = this
        .parentNode
        .parentNode
        .parentNode
        .querySelector('.navigation');

    let bodyNodeElem = this
        .parentNode
        .parentNode
        .parentNode
        .parentNode
        .parentNode;

    parentContainer.classList.remove('navigation--active');
});

// style from body when open dropMenu
document.querySelector('body').addEventListener('click', function(e) {
    let parentContainer = document.querySelector('.navigation');

    if (parentContainer.classList.contains('navigation--active')) {
        this.style.overflowY = "hidden";
    } else {
        this.style.overflowY = "auto";
    }
});
// dropMenu END