import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")):[]
  },
  reducers: {
    Add_ToCart: (state, action) => {
         state.cart.push(action.payload);   
        localStorage.setItem("Cart",JSON.stringify(state.cart));
    },

    Del_FromCart: (state,action) => {
        let id = action.payload
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        localStorage.setItem("Cart",JSON.stringify(state.cart));
        },
    Change_Quantity: (state, action) => {
        let { id, qty } = action.payload;

        let item = state.cart.find((item) => item.id === id);

        if (item) {
            item.qty = Number(qty); // 🔥 FIX
        }

        localStorage.setItem("Cart", JSON.stringify(state.cart));
    }
}

});

export const { Add_ToCart, Del_FromCart, Change_Quantity } = cartSlice.actions;
export default cartSlice.reducer;