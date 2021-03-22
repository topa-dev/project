const toggleButton = document.querySelector(".tb");
const navBar = document.querySelector('.nav-link');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

toggleButton.addEventListener('click',()=>{
    navBar.classList.toggle('active')
})
const appearOptions = {
    threshold:0.2,
    rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},appearOptions)
faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});
sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
});