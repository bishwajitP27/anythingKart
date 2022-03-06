import { fetchData } from "./utils.js";

try {
    const URL = "https://my-json-server.typicode.com/bishwajitP27/anythingKart/products";
    const method = "GET";
    const response = await fetchData(method, URL);
    const data = response?.data;
    data.forEach(product => {
        console.log(product);
        createCard(product)
    });
} catch(error) {
    const err = error?.toJSON();
    const errMessage = err?.config?.data || 'Nothing to display';
}

function createCard(item) {
    console.log(item.path)
    const products = document.getElementById("products");
    const existingCards = products.innerHTML;
    const productsCard = `
    <section class="product-card">
        <figure class="product-img"">
            <img src="${item?.path}" alt="${item?.title}" class="product-image">
            <figcaption>${item?.title}</figcaption>
            <div class="ratings flex">
                <i class="fa-solid fa-star"></i>
                <p class="rating">3</p>
                <p class="people-rated">(201)</p>
            </div>
        </figure>
        <div class="price-card--section flex">
            <div class="current-price">
                <span class="currency">Rs.</span>
                <span class="price">200</span>
            </div>
            <div class="original-price">
                <span class="currency">Rs.</span>
                <span class="price">200</span>
            </div>
            <div class="discount">
                <span class="discount-percent">40%</span>
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
