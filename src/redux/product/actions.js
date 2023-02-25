import { ADD_TO_CART } from "./actionTypes"

export const addToCart  = () => {
    console.log("add to cart action ")
    return {
        type:ADD_TO_CART
    }
}