var elBtn = document.querySelector(".header__button");
var elHeader = document.querySelector(".header__container");

elBtn.addEventListener("click", function () {
    elHeader.classList.toggle("header--active")
})