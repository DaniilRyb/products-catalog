import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type CategoriesProducts = string[];
export const getCategoriesAction = createAsyncThunk<
  CategoriesProducts,
  void,
  { rejectValue: string }
>('api/categories', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<CategoriesProducts>(
      'https://dummyjson.com/products/categories',
    );
    return data as CategoriesProducts;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error get data categories');
  }
});
