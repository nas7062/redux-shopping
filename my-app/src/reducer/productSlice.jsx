import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../data/data";


export const productSlice = createSlice({
    name: "products",
    initialState: {
        Filter: JSON.parse(sessionStorage.getItem("Filter")) || productData,
        Products: JSON.parse(sessionStorage.getItem("product")) || productData,
    },
    reducers: {
        Filter(state, action) {
            const filter = productData.filter((product) => product.type === action.payload);

            state.Filter = filter;
            const savedState = JSON.stringify(filter);
            sessionStorage.setItem("Filter", savedState);

        },
        Products(state, action) {
            const Product = state.Filter.filter((product) => product.id === action.payload);

            state.Products = Product;
            const savedState = JSON.stringify(Product);
            sessionStorage.setItem("product", savedState);
        },
        filterColor(state, action) {
            const color = state.Filter.filter((product) =>
                product.color.includes(action.payload));

            state.Filter = color;
            if (color.length <= 0) {
                state.Filter = [];
            }
            else {
                state.Filter = color;
                const savedState = JSON.stringify(color);
                localStorage.setItem("Filter", savedState);
            }
        },
        filterSize(state, action) {
            const size = state.Filter.filter((product) =>
                product.size.includes(action.payload));

            state.Filter = size;

            if (size.length <= 0) {
                state.Filter = [];
            }
            else {
                state.Filter = size;
                const savedState = JSON.stringify(size);
                sessionStorage.setItem("Filter", savedState);
            }
        },


    },
});

export const {
    Filter,
    Products,
    filterColor,
    filterSize
} = productSlice.actions;

export default productSlice.reducer;