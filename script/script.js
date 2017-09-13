var open = document.getElementById("buttonOpen");

var close = document.getElementsByClassName("index-menu-header-btn")[0];

var menuHead = document.getElementsByClassName("menu-header")[0];

var main = document.getElementsByClassName("main")[0];

var footer = document.getElementsByClassName("footer")[0];

var mainMenu = document.getElementById("main-menu");

open.onclick = function () {
  
  mainMenu.style.display = "block";
  
  main.style.display = "none";
  
  if (footer) {
    footer.style.display = "none";
  }
  
  if (menuHead) {
    menuHead.style.display = "none";
  }
}

close.onclick = function () {
  
  if (menuHead) {
    
    menuHead.style.display = "flex";
  }
  main.style.display = "block";
  
  if (footer) {
    footer.style.display = "block";
  }
  mainMenu.style.display = "none";
}