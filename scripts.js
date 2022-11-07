hamburger = document.querySelector(".hamburger");
navlink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navlink.classList.toggle("active");
})