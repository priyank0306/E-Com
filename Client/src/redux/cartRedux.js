import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let present = false;
      state.products.forEach((prod) => {
        if (prod._id === action.payload._id) {
          present = true;
          prod.quantity += action.payload.quantity;
        }
      });
      if (!present) {
        state.products.push(action.payload);
        state.quantity += action.payload.quantity !== 0 && 1;
      }
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    editProducts: (state, action) => {
      let shouldWeRemoveProd = false;
      state.products.forEach((prod, index, object) => {
        if (prod._id === action.payload._id) {
          prod.quantity += action.payload.quantityEdit;
          if (prod.quantity === 0) {
            state.products.splice(index, 1);
            shouldWeRemoveProd = true;
          }
        }
      });
      state.quantity -= shouldWeRemoveProd ? 1 : 0;
      state.totalPrice =
        state.totalPrice + action.payload.quantityEdit * action.payload.price;
    },
    makeDefault: (state) => {
      state.products = [];
      state.quantity = 0;
      state.initialState = 0;
    },
  },
});

export const { addProduct, editProducts, makeDefault } = cartSlice.actions;
export default cartSlice.reducer;

// const setCartInDB = async(state)=>{

// }
