import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        Cart: [],
        Count: 0,
        totalCount: 0,
        totalPrice: 0,
    },
    reducers: {
        addCart(state, action) {
            const ProductId = action.payload;

            const exist = state.Cart.find((product) =>
                product.id === ProductId.id &&
                product.size === ProductId.size &&
                product.color === ProductId.color
            );
            if (exist) {
                exist.Count++;
                exist.totalPrice += ProductId.price;
                state.totalCount++;
                state.totalPrice += ProductId.price;
            }
            else {
                state.Cart.push({
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
        },
    },
});

export const
    {
        addCart, removeCart
    } = CartSlice.actions;

export default CartSlice.reducer;