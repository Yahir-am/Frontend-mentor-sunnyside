const menu = document.querySelector(".js--list");
const bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
    menu.classList.toggle("active");
});