import { configureStore } from '@reduxjs/toolkit';
import { products } from './slices/api/products/productsSlice';
import { categories } from './slices/api/categories/categoriesSice';

const store = configureStore({
reducer: {
  products: products,
  categories: categories
}
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
