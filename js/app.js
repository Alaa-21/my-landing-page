const nav = document.querySelector('nav');
// const header = document.querySelector('header');
const header = document.querySelector('header');

const headerObserverOptions = {
    rootMargin: '-100px'
};
const headerObserver = new IntersectionObserver(function(entries,headerObserver) {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    })
}, headerObserverOptions)

headerObserver.observe(header);