import { createStore ,applyMiddleware} from "redux";
import productReducer from "./product/productReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger"



const store  =  createStore(productReducer, composeWithDevTools(applyMiddleware(logger)))

export default store; 