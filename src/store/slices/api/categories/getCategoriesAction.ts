import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type CategoriesProducts = string[];
export const getCategories = createAsyncThunk<
  CategoriesProducts,
  void,
  { rejectValue: string }
>('apiData', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<CategoriesProducts>(
      'https://dummyjson.com/products/categories',
    );
    console.log("https://dummyjson.com/products/categories", data);
    return data as CategoriesProducts;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error get data categories');
  }
});
