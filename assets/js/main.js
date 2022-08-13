const toggleMenu = document.querySelector("#toggle-menu");
const toggleMenuIcon = toggleMenu.querySelector("img");
const menu = document.querySelector("#menu");

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("translate-y-[-200%]");
  changeMenuIcon();
});

// Close when menu click menu list
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    menu.classList.add("translate-y-[-200%]");
    changeMenuIcon();
  });
});

function changeMenuIcon() {
  const isContainTraslate = menu.classList.contains("translate-y-[-200%]");
  const icon = isContainTraslate ? "icon-menu" : "icon-close";
  toggleMenuIcon.src = `./assets/images/icons/${icon}.svg`;
}
