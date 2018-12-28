import jump from 'jump.js';

const jumplinks = document.querySelectorAll('[data-scroll-target]');

for (const link of jumplinks.values()) {
    link.addEventListener('click', event => {
        event.preventDefault();

        jump(event.target.dataset.scrollTarget, {
            offset: -document.querySelector('.desktop-nav').clientHeight
        });
    });
}
