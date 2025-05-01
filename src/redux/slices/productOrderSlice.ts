import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

interface ProductOrderState {
  order: string[]; // Масив id продуктів
}

const initialState: ProductOrderState = {
  order: [],
};

const productOrderSlice = createSlice({
  name: 'productOrder',
  initialState,
  reducers: {
    setProductOrder(state, action: PayloadAction<string[]>) {
      state.order = action.payload;
    },
    clearProductOrder(state) {
      state.order = [];
    },
  },
});

const productOrderPersistConfig = {
  key: 'productOrder',
  storage,
};

export const { setProductOrder, clearProductOrder } = productOrderSlice.actions;

export default persistReducer(
  productOrderPersistConfig,
  productOrderSlice.reducer,
);
