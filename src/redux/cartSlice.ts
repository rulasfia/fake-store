import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { ProductItemType } from "../AppType";

// Define a type for the slice state
interface CartState {
  items?: ProductItemType[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload;
    },
    addToCart: (state, action: PayloadAction<ProductItemType>) => {
      state.items?.push(action.payload);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const newItems = state.items?.filter(
        (item) => item.id !== action.payload
      );
      state.items = newItems;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  incrementByAmount,
  addToCart,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
