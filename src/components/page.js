function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

viewPortWidth =  window.innerWidth;
viewPortHeight = document.documentElement.clientHeight;

window.addEventListener('resize', debounce(function () {
    viewPortWidth =  window.innerWidth;
    viewPortHeight = document.documentElement.clientHeight;
}, 400))


// Sticky header
var new_scroll_position = 0;
var last_scroll_position;
var header = document.querySelector('.navbar');

window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        header.classList.remove('slideDown');
        header.classList.add('slideUp');

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        header.classList.remove('slideUp');
        header.classList.add('slideDown');
        header.classList.add('slideUp__shadow');
    }

    new_scroll_position = last_scroll_position;

    if (new_scroll_position === 0) {
        header.classList.remove('slideUp__shadow');
    }
});

// Animate on scroll
AOS.init();




var offCanvasToggle = document.querySelector('[data-bs-target="#navbarNav"]');
var offCanvasCollapse = document.querySelector('.off-canvas');
var offCanvasLinks = document.querySelectorAll('.off-canvas a');

function mobileButtonClick() {
    offCanvasToggle.click()
}

function toggleMobile() {
    offCanvasCollapse.classList.toggle('open');
    document.querySelector('body').classList.toggle('blur');
}

for (var i = 0; i < offCanvasLinks.length; i++) {
    offCanvasLinks[i].addEventListener('click', function() {
        if (viewPortWidth < 576) {
            mobileButtonClick();
        }
    });
}

offCanvasToggle.addEventListener('click', function () {
    if (viewPortWidth < 576) {
        toggleMobile();
    }
});
