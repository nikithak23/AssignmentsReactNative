import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {items: [], totalAmount: 0};

const cartSlice = createSlice({
  name: 'Cart',
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems = [...state.items]; //here new array is returned.
        updatedItems[existingCartItemIndex] = updatedItem;
        state.items = updatedItems;
      } else {
        state.items = [
          ...state.items,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            quantity: 1,
          },
        ];
      }
      const updatedTotalAmount = state.totalAmount + action.payload.price;

      state.totalAmount = updatedTotalAmount;
    },


    
    deleteItem: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      state.totalAmount = updatedTotalAmount;
      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter(
          item => item.id !== action.payload.id,
        );
        state.items = updatedItems;
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        state.items = updatedItems;
      }
    },
  },
});

export const {addItem, deleteItem} = cartSlice.actions;

export default cartSlice.reducer;
