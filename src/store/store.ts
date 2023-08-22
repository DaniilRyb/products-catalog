import { configureStore } from '@reduxjs/toolkit';
import { products } from './slices/api/products/productsSlice';
import { categories } from './slices/api/categories/categoriesSlice';
import { productById } from './slices/api/product/productByIdSlice';

const store = configureStore({
  reducer: {
    products: products,
    productById: productById,
    categories: categories,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
