import { fetchData } from "./utils.js";
console.log("HI");

try {
    const URL = "https://my-json-server.typicode.com/bishwajitP27/anythingKart/products";
    const method = "GET";
    const response = await fetchData(method, URL);
    const data = response?.data;
} catch(error) {
    const err = error?.toJSON();
    const errMessage = err?.config?.data || 'Nothing to display';
}