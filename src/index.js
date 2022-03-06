import { fetchData } from "./utils.js";
import { createCards } from "./createCard.js";
import { checkLoginStatus } from "./authentication.js";

export const state = {};
try {
    const URL = "https://my-json-server.typicode.com/bishwajitP27/anythingKart/products";
    const method = "GET";
    const response = await fetchData(method, URL);
    state.productData = response?.data;
    createCards([...state.productData])
} catch(error) {
    const errMessage = error?.config?.data || 'Nothing to display';
}

document.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');
});

//Check login status
checkLoginStatus()