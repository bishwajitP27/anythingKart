import { fetchData } from "./utils.js";

try {
    const URL = "https://my-json-server.typicode.com/bishwajitP27/anythingKart/products";
    const method = "GET";
    const response = await fetchData(method, URL);
    const data = response?.data;
    data.forEach(product => {
        createCard(product)
    });
} catch(error) {
    const err = error?.toJSON();
    const errMessage = err?.config?.data || 'Nothing to display';
}

function createCard(item) {
    const { category, title, path, price, rating } = item;
    const products = document.getElementById("products");
    const existingCards = products.innerHTML;
    const discount = Math.round(((price.originalPrice - price.discountedPrice)/price.originalPrice) * 100);
    const productsCard = `
    <section class="product-card">
        <figure class="product-img"">
            <img src="${path}" alt="${title}" class="product-image">
            <figcaption>${title}</figcaption>
            <div class="ratings flex">
                <i class="fa-solid fa-star"></i>
                <p class="rating">${rating?.startRating || 'NA'}</p>
                <p class="people-rated">(${rating?.peopleRated || 'NA'})</p>
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
        <button class="add-to-cart-btn flex">
            <i class="fa-solid fa-cart-shopping kart-icons">
            </i>
            <span>Add to Cart</span>
        </button>
    </section>`;
    if(products) products.innerHTML = existingCards + productsCard;
}
