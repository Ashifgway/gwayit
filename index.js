let nav = document.querySelector(".nav-links");
let menu = document.querySelector(".menu");
let menuicon = document.querySelector(".menu-icon");

let menuToggler = false;

function toggleMenu() {
  menuToggler = !menuToggler;

  function activate() {
    if (menuToggler === true) {
      nav.style.transform = "translateX(0)";
      nav.style.display = "flex";
      menuicon.innerHTML = "close";
    } else {
      nav.style.transform = "translateX(100%)";
      nav.style.display = "none";
      menuicon.innerHTML = "menu";
    }
  }
  return activate();
}
