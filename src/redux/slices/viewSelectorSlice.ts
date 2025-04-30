import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storageSession from 'redux-persist/lib/storage/session';

export type ViewType = 'grid' | 'large' | 'list';

interface ViewSelectorState {
  value: ViewType;
}

const initialState: ViewSelectorState = {
  value: 'grid',
};

const viewSelectorPersistConfig = {
  key: 'viewSelector',
  storage: storageSession,
};

const viewSelectorSlice = createSlice({
  name: 'viewSelector',
  initialState,
  reducers: {
    setSelector: (state, action: PayloadAction<ViewType>) => {
      state.value = action.payload;
    },
    clearSelector: (state) => {
      state.value = 'grid';
    },
  },
});

const persistedViewSelectorReducer = persistReducer(
  viewSelectorPersistConfig,
  viewSelectorSlice.reducer,
);

export const { setSelector, clearSelector } = viewSelectorSlice.actions;
export default persistedViewSelectorReducer;
