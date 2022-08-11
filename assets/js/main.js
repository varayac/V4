const toggleMenu = document.querySelector("#toggle-menu");
const toggleMenuIcon = toggleMenu.querySelector("i");
const menu = document.querySelector("#menu");

toggleMenu.addEventListener("click", () => {
  menu.classList.remove("hidden");
});
