const debounce = (func, wait, immediate) => {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export const stickyHeader = () => {
    const header = document.querySelector('.navbar');
    let last_scroll_position = window.scrollY;
    let new_scroll_position = 0;

    window.addEventListener('scroll', () => {
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
};

export const mobileMenu = () => {
    let viewPortWidth =  window.innerWidth;

    window.addEventListener('resize', debounce(() => {
        viewPortWidth = window.innerWidth;
    }, 400));


    const offCanvasToggle = document.querySelector('[data-bs-target="#navbarNav"]');
    const offCanvasCollapse = document.querySelector('.off-canvas');
    const offCanvasLinks = document.querySelectorAll('.off-canvas a');

    const mobileButtonClick = () => {
        offCanvasToggle.click()
    };

    const toggleMobile = () => {
        offCanvasCollapse.classList.toggle('open');
        document.querySelector('.container').classList.toggle('blur');
        document.querySelector('body').classList.toggle('blur');
    };

    for (const x of offCanvasLinks) {
        x.addEventListener('click', () => {
            if (viewPortWidth < 576) {
                mobileButtonClick();
            }
        });
    }

    if (offCanvasToggle) {
        offCanvasToggle.addEventListener('click', () => {
            if (viewPortWidth < 576) {
                toggleMobile();
            }
        });
    }

};

export const anchorReload = () => {
    const baseUrl = window.location.href.split('#')[1];
    const el = document.getElementById(baseUrl);
    if (el) {
        el.scrollIntoView({behavior: "smooth"})
    }
};
