// ---- partners-items slider ----
$(document).ready(function () {
  $(".partners-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false,
    prevArrow: $(".parteners-arrow-prev"),
    nextArrow: $(".parteners-arrow-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
});

// ---- reviews-items slider ----
$(document).ready(function () {
  $(".reviews-items").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false,
    prevArrow: $(".reviews-arrow-prev"),
    nextArrow: $(".reviews-arrow-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
});

// ----pagination reviews----

const paginatonNumbers = document.querySelectorAll(
  ".pagination-reviews-page .paginaton-number"
);
paginatonNumbers.forEach((el) => {
  el.addEventListener("click", function (e) {
    paginatonNumbers.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  });
});
// ----pagination reviews end----

// ----pagination catalog-page----

const paginatonCatalogNumbers = document.querySelectorAll(
  ".pagination-catalog-page .paginaton-number"
);
paginatonCatalogNumbers.forEach((el) => {
  el.addEventListener("click", function (e) {
    paginatonCatalogNumbers.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  });
});
// ----pagination catalog-page end----

// ----catalog-page custom select ----

const selectSingle = document.querySelector(".__select");
const selectSingleTitle = selectSingle.querySelector(".__select__title");
const selectSingleLabels = selectSingle.querySelectorAll(".__select__label");

selectSingleTitle.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("__select__label") ||
      evt.target.classList.contains("__select__label") === null
    ) {
      selectSingleTitle.innerHTML = evt.target.innerHTML;
    } else {
      let blockParent = evt.target.parentElement;
      let blockParent2 = blockParent.parentElement;
      if (blockParent2 && blockParent2.classList.contains("__select__label")) {
        selectSingleTitle.innerHTML = blockParent2.innerHTML;
      } else {
        selectSingleTitle.innerHTML = blockParent.innerHTML;
      }
    }
    selectSingle.setAttribute("data-state", "");
  });
}

// ----catalog-page custom select end----
