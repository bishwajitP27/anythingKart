import { state } from "./index.js";
import { createCards } from "./createCard.js";

export function sortBy(event) {
  const value = event?.target?.value || "ascending";
  const sortedData = state.productData.sort((a, b) => {
    if (value == "ascending") {
      return a?.price?.discountedPrice - b?.price?.discountedPrice;
    } else {
      return b?.price?.discountedPrice - a?.price?.discountedPrice;
    }
  });
  createCards(sortedData);
}
