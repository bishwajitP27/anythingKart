import { fetchData } from "./utils.js";
import { createCards } from "./createCard.js";
import { checkLoginStatus } from "./authentication.js";
import { sortBy } from "./sidebar.js";

const sortRadioBtns = document.querySelectorAll("[type='radio']");
const searchBtn = document.querySelector(".search-bar--input");

export const state = {
    cart: []
};
try {
    const URL = "https://my-json-server.typicode.com/bishwajitP27/anythingKart/products";
    const method = "GET";
    const response = await fetchData(method, URL);
    state.productData = response?.data;
    createCards([...state.productData])
} catch(error) {
    const errMessage = error?.config?.data || 'Nothing to display';
}

//Check login status
checkLoginStatus();

//Handle sort
sortRadioBtns.forEach(btn => {
    btn.addEventListener("click", sortBy);
});

//Handle search
function handleSearch(event) {
    const searchText = this?.value?.toLowerCase() || "";
    const { productData } = state;
    const searchData = productData.filter(product => {
        return product?.title?.toLowerCase()?.includes(searchText);
    });
    createCards(searchData);
}
searchBtn.addEventListener("input", handleSearch);
