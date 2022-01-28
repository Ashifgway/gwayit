let nav = document.querySelector(".nav-links");
let menu = document.querySelector(".menu");
let menuicon = document.querySelector(".menu-icon");

menu.addEventListener("click", function () {
  if (nav.style.transform === "translateX(100%)") {
    nav.style.transform = "translateX(0)";
    nav.style.display = "flex";
    menuicon.innerHTML = "close";
  } else {
    nav.style.transform = "translateX(100%)";
    nav.style.display = "none";
    menuicon.innerHTML = "menu";
  }
});
