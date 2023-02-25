import { ADD_TO_CART } from "./actionTypes";


const initialState = {
    products: [
        {
            id: 1,
            name: "product 1",
            category: "Product category ",
            price: 100,
            image: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
            quantity: 10
        },
        {
            id: 2,
            name: "product 2",
            category: "Product category ",
            image: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
            price: 100,
            quantity: 10
        }
    ],
    carts: [],
    cartsOfNumber: 0
}


const productReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case ADD_TO_CART:
            
            const newProduct = {
                id: 2,
                name: "product ",
                category: "Product category ",
                price: 100,
                quantity: 10
            }
            return {
                ...state,
                carts: [state.carts, newProduct]
            }

        default:
            return state;
    }
}



export default productReducer;