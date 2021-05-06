const doc = document;
const hamburger = doc.querySelector(".hamburger__button");
const nav = doc.querySelector(".nav");


const toggleMenu = (e) => {
    e.preventDefault();
    if (e.type === "click" || e.key === "Enter" ){
        nav.classList.toggle("nav--active");
        hamburger.classList.toggle("hamburger--active");
    }
};

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("keypress", toggleMenu);