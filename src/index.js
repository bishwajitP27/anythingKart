import { fetchData } from "./utils.js";
import { createCards } from "./createCard.js";
import { sortBy } from "./sidebar.js";

export const state = {};
try {
    const URL = "https://my-json-server.typicode.com/bishwajitP27/anythingKart/products";
    const method = "GET";
    const response = await fetchData(method, URL);
    state.productData = response?.data;
    createCards([...state.productData])
} catch(error) {
    const err = error?.toJSON();
    const errMessage = err?.config?.data || 'Nothing to display';
}