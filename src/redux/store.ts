import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistedViewSelectorReducer from './slices/viewSelectorSlice';
import persistCartReducer from './slices/cartSlice';
import persistProductOrderReducer from './slices/productOrderSlice';

export const store = configureStore({
  reducer: {
    viewSelector: persistedViewSelectorReducer,
    cart: persistCartReducer,
    productOrder: persistProductOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
