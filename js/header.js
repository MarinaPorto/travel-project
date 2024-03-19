
window.addEventListener("resize", function () {
  if (window.innerWidth > 890) {
    document.getElementById("nav__wrapper").style.display = "block";
  } else {
    document.getElementById("nav__wrapper").style.display = "none";
  }
});


const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  document.getElementById("nav__wrapper").style.display = "flex";
});

const burgerClose = document.getElementById("burger-close");

burgerClose.addEventListener("click", () => {
  document.getElementById("nav__wrapper").style.display = "none";
});

const moreItems = document.querySelectorAll(".submenu__item-more");

moreItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

const navItems = document.querySelectorAll(".nav__link");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.nextElementSibling) {
      if (item.nextElementSibling.classList.contains("submenu")) {
        item.nextElementSibling.classList.toggle("open-menu");
      }
    }
  });
});

