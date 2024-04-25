import { createSlice } from "@reduxjs/toolkit";


const initialState =JSON.parse(sessionStorage.getItem("cart")) || {
    Cart: [],
    Count: 0,
    totalCount: 0,
    totalPrice: 0,
};
export const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addCart(state, action) {
            const ProductId = action.payload;
            const exist = state.Cart.find((product) =>
                product.id === ProductId.id &&
                product.size === ProductId.size &&
                product.color === ProductId.color
            );
            if (exist) { // 기존에 있던 상품이면 물건 수량 ,총 수량,총 가격증가;
                exist.Count++;
                exist.totalPrice += ProductId.price;
                state.totalCount++;
                state.totalPrice += ProductId.price;
            }
            else {
                state.Cart.push({ // 새로운 상품 추가
                    id: ProductId.id,
                    price: ProductId.price,
                    size: ProductId.size,
                    Count: 1,
                    img: ProductId.img,
                    totalPrice: ProductId.price,
                    name: ProductId.name,
                    descript: ProductId.descript,
                    color: ProductId.color,
                })
                state.totalCount++;
                state.totalPrice += ProductId.price;
            }
            sessionStorage.setItem("cart", JSON.stringify(state));
        },
        removeCart(state, action) {
            const ProductId = action.payload;

            const exist = state.Cart.find((product) =>
                product.id === ProductId.id &&
                product.size === ProductId.size &&
                product.color === ProductId.color
            );
            if (exist.Count === 1) {
                state.Cart = state.Cart.filter((product) =>
                    product.id !== ProductId.id ||
                    product.size !== ProductId.size ||
                    product.color !== ProductId.color
                );
                state.totalCount--;
                state.totalPrice -= ProductId.price;
            }
            else {
                exist.Count--;
                exist.totalPrice -= ProductId.price;
                state.totalCount--;
                state.totalPrice -= ProductId.price;
            }
            sessionStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const{addCart,removeCart} = CartSlice.actions;

export default CartSlice.reducer;