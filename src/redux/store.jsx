import {configureStore} from "@reduxjs/toolkit";
import ProductsSlice from "./Products/productsSlice"
import BasketSlice from "./Basket/BasketSlice";
import balanceSlice from "./Balance/balanceSlice";


export const store = configureStore({
    reducer:{
        products : ProductsSlice,
        balance : balanceSlice,
        basket : BasketSlice
    }
})