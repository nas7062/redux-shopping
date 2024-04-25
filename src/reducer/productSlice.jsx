import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../data/data";


export const productSlice = createSlice({
    name: "products",
    initialState: {
        Filter: JSON.parse(sessionStorage.getItem("Filter")) || productData, // 필터링 초기상태
        Products: JSON.parse(sessionStorage.getItem("product")) || productData, // 제품 초기상태
    },
    reducers: {
        Filter(state, action) { // 타입에 따라 나눔
            //const filter = productData.filter((product) => product.type === action.payload);
            const filter = productData.filter((proudct)=>proudct.type.includes(action.payload));
            state.Filter = filter;
            const savedState = JSON.stringify(filter);
            sessionStorage.setItem("Filter", savedState);

        },
        Products(state, action) { // 특정제품을 선택
            const Product = state.Filter.filter((product) => product.id === action.payload);
            state.Products = Product;
            const savedState = JSON.stringify(Product);
            sessionStorage.setItem("product", savedState);
        },
        filterColor(state, action) { // 색상에 따라 나눔
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
        filterSize(state, action) { // 사이즈에 따라 나눔
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
} = productSlice.actions; // 액션 내보냄

export default productSlice.reducer; // 리듀서 내보냄