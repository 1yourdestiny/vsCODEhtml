document.addEventListener("DOMContentLoaded", function () {
  function changeCartIndicator(count) {
    document.querySelector(".header__basket-indicator").innerHTML = count;
  }

  function addItemToCart(itemId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems == null) {
      cartItems = [];
    }
    cartItems.push(itemId);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    changeCartIndicator(cartItems.length);
  }

  function removeItemFromCart(itemId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems == null) {
      changeCartIndicator(0);
    }

    let index = cartItems.indexOf(itemId);
    if (index !== -1) {
      cartItems.splice(index, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    changeCartIndicator(cartItems.length);
  }

  // show actual count of items added to cart on page load
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  if (cartItems !== null) {
    changeCartIndicator(cartItems.length);

    // add active class to items which added to cart
    cartItems.forEach(function (item) {
      document.querySelectorAll(`[data-id='${item}']`).forEach(function (item) {
        console.log(item);
        item.querySelector(".btn-primary").classList.add("added-to-cart");
        item.querySelector("span").innerHTML = "В корзине";
      });
    });
  }

  // "add to cart" btn handler
  document.querySelectorAll(".card-btns .btn-primary").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      let productId = this.closest(".card").dataset.id;

      if (item.classList.contains("added-to-cart")) {
        item.classList.remove("added-to-cart");
        item.querySelector("span").innerHTML = "В корзину";
        removeItemFromCart(productId);
      } else {
        item.classList.add("added-to-cart");
        item.querySelector("span").innerHTML = "В корзине";
        addItemToCart(productId);
      }
    });
  });

  // swiper1 JSJSJSJSJS
  let slider = new Swiper(".catalog-slider .swiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
