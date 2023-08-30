import { configureStore } from '@reduxjs/toolkit';
import { products } from '../entities/category-products/api/productsSlice';
import { categories } from '../entities/categories/api/categories/categoriesSlice';
import { productById } from '../entities/product/api/product/productByIdSlice';
import { searchProducts } from '../features/user-search-products/api/productsSearchSlice';
import { productsPagination } from '../features/pagination/api/productsPaginationSlice';

const store = configureStore({
  reducer: {
    products: products,
    productById: productById,
    categories: categories,
    productsByTitle: searchProducts,
    productsPagination: productsPagination,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
