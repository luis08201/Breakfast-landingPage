let btnMenu = document.getElementById("hamburger");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");

    let nav = document.getElementById("nav");
    nav.classList.toggle("active");
})