import { configureStore } from '@reduxjs/toolkit';
import { products } from './slices/api/products/productsSlice';
import { categories } from '../entities/categories/api/categories/categoriesSlice';
import { productById } from '../entities/product/api/product/productByIdSlice';
import { searchProducts } from '../features/user-search-products/api/productsSearchSlice';

const store = configureStore({
  reducer: {
    products: products,
    productById: productById,
    categories: categories,
    productsByTitle: searchProducts,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
