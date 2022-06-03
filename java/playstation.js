const nav = document.querySelector(".navigation2");
const navOffsetTop = nav.offsetTop;

window.addEventListener('scroll', () => {
    if(window.scrollY >= navOffsetTop) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
    }
    else{
        nav.style.position = 'static';
    }
});