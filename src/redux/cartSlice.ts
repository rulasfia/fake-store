import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  initialState,
  reducers: {
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
