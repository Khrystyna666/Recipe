const navigation = document.querySelector('.navigation');

const makeSticky = () => {
if (window.pageYOffset >= 0) { // if you change the margin/gap change the value to same
navigation.classList.add("fixed");
console.log("fixed");
} else {
navigation.classList.remove("fixed");
}
console.log(window.pageYOffset);
};
window.onscroll = makeSticky;

document.addEventListener('DOMContentLoaded', function(){
    const hamburgerMenu = document.querySelector('.hamburger_menu')
    const mobileMenu = document.querySelector('.mobile_menu')

    hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('open')
    })

})