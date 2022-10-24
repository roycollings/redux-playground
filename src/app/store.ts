import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../components/FilterBar/filterSlice';

export const store = configureStore({
  reducer: {
    // Multiple reducers can be defined here.
    filter: filterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
