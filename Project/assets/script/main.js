/*=============== SHOW MENU ===============*/
const btnShow = document.getElementById("head-toggle");
const btnClose = document.getElementById("close");
const main = document.getElementById("main");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

btnShow.addEventListener("click", function () {
    main.classList.add("show-menu");
})

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

btnClose.addEventListener("click", function () {
    main.classList.remove("show-menu");
})

/*=============== REMOVE MENU MOBILE ===============*/

const navItem = document.querySelectorAll(".navbar ul li a");

for (let item of navItem) {
    item.addEventListener("click", function () {
        main.classList.remove("show-menu")
    })
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
// console.log(sections);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);
