import { state } from "./index.js";

export function createCards(productData) {
  const products = document.getElementById("products");
  const noDataSection = document.getElementById("no-data");
  products.innerHTML = "";
  if (productData.length === 0) {
    noDataSection.classList.remove("no-data--state");
    return;
  }
  noDataSection.classList.add("no-data--state");
  productData.forEach((item) => {
    const { category, title, path, price, rating, id } = item;
    const products = document.getElementById("products");
    const existingCards = products.innerHTML;
    const discount = Math.round(((price.originalPrice - price.discountedPrice) / price.originalPrice) * 100);
    const productsCard = `
        <section class="product-card">
            <figure class="product-img"">
                <img src="${path}" alt="${title}" class="product-image">
                <figcaption>${title}</figcaption>
                <div class="ratings flex">
                    <i class="fa-solid fa-star"></i>
                    <p class="rating">${rating?.startRating || "NA"}</p>
                    <p class="people-rated">(${rating?.peopleRated || "NA"})</p>
                </div>
            </figure>
            <div class="price-card--section flex">
                <div class="current-price">
                    <span class="currency">Rs.</span>
                    <span class="price">${price?.discountedPrice}</span>
                </div>
                <div class="original-price">
                    <span class="currency">Rs.</span>
                    <span class="price">${price.originalPrice}</span>
                </div>
                <div class="discount">
                    <span class="discount-percent">${discount}%</span>
                    <span>OFF</span>
                </div>
            </div>
            <button class="add-to-cart-btn flex" id="${id}">
                <i class="fa-solid fa-cart-shopping kart-icons">
                </i>
                <span>Add to Cart</span>
            </button>
        </section>`;
    if (products) {
      products.innerHTML = existingCards + productsCard;
    }
  });

  //Cart handler
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  function addToCartHandler() {
    state.productData.forEach((item) => {
      if (item.id === parseInt(this.id)) {
        state.cart.push(item);
        this.querySelector("span").textContent = "Added to cart";
      }
    });
  }

  addToCartBtns.forEach(function (item) {
    item.addEventListener("click", addToCartHandler);
  });
}
