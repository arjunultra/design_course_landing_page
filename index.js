const hamMenu = document.getElementById("menu");
const navContainer = document.getElementById("nav-container");
const exitBtn = document.getElementById("exit");
hamMenu.addEventListener("click", function () {
  navContainer.classList.toggle("hide-mobile");
});
exitBtn.addEventListener("click", function () {
  navContainer.classList.toggle("hide-mobile");
});
