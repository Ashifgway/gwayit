let nav = document.querySelector(".nav-links");
let menu = document.querySelector(".menu");
let menuicon = document.querySelector(".menu-icon");
let view = document.getElementById("tab-viewer");

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

let tabs = document.querySelectorAll(".tab");

function tabNav(event, value) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("dealers-info");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  let contentId = value.getAttribute("id");

  document.getElementById(contentId).style.display = "flex";
  event.currentTarget.classList += " active";
}

let navbar = getElementById("navbar");
let home = getElementById("home");
