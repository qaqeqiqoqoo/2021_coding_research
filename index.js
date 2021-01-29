const toggleBt = document.querySelector(".navbar_toggleBt");
const menu = document.querySelector(".navbar_menu");
const icon = document.queryCommandValue(".navbar_icon");

toggleBt.addEventListener("click", () => {
menu.classList.toggle("active");
icon.classList.toggle("active");

});