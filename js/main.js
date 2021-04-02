const element = document.querySelectorAll('.scroll__content__box');

window.addEventListener('scroll', showOnScroll);

function showOnScroll() {
    // get the value of the screen, which will be the trigger for anim to start
    let borderScroll = window.innerHeight / 5 * 4;
    // console.log(borderScroll)

    element.forEach(el => {
        // getting the top border value of every element
        let elHeightBorder = el.getBoundingClientRect();
        // console.log(elHeightBorder)

        // if value of screen is bigger then value of top border of element, start animation
        if (borderScroll > elHeightBorder.top) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    })
}
// shows first elements on screen, without scrolling
showOnScroll()