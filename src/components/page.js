// function debounce(func, wait, immediate) {
//     var timeout;
//     return function() {
//         var context = this, args = arguments;
//         var later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }
//
// viewPortWidth =  window.innerWidth;
// viewPortHeight = document.documentElement.clientHeight;
//
// window.addEventListener('resize', debounce(function () {
//     viewPortWidth =  window.innerWidth;
//     viewPortHeight = document.documentElement.clientHeight;
// }, 400))


// Sticky header
// var new_scroll_position = 0;
// var last_scroll_position;
// var header = document.querySelector('.navbar');
//
// window.addEventListener('scroll', function(e) {
//     last_scroll_position = window.scrollY;
//
//     // Scrolling down
//     if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
//         header.classList.remove('slideDown');
//         header.classList.add('slideUp');
//
//         // Scrolling up
//     } else if (new_scroll_position > last_scroll_position) {
//         header.classList.remove('slideUp');
//         header.classList.add('slideDown');
//         header.classList.add('slideUp__shadow');
//     }
//
//     new_scroll_position = last_scroll_position;
//
//     if (new_scroll_position === 0) {
//         header.classList.remove('slideUp__shadow');
//     }
// });



const offCanvasToggle = document.querySelector('[data-bs-target="#navbarNav"]');
const offCanvasCollapse = document.querySelector('.off-canvas');
const offCanvasLinks = document.querySelectorAll('.off-canvas a');

const mobileButtonClick = () => {
    offCanvasToggle.click()
    console.log('mobilebutton');
};

const toggleMobile = () => {
    offCanvasCollapse.classList.toggle('open');
    document.querySelector('body').classList.toggle('blur');
    console.log('togglebutton');
};

for (const x of offCanvasLinks) {
    x.addEventListener('click', () => {
        // if (viewPortWidth < 576) {
            mobileButtonClick();
        console.log('click');
        // }
    });
}

offCanvasToggle.addEventListener('click', () => {
    // if (viewPortWidth < 576) {
        toggleMobile();
    console.log('togglemobile');
    // }
});
