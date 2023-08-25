import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICategory } from '../../../entities/categories/model/ICategory';

export const searchProductsAction = createAsyncThunk<
  ICategory,
  string,
  { rejectValue: string }
>('api/searchProducts', async (inputValue, { rejectWithValue }) => {
  const url: string = inputValue
    ? `https://dummyjson.com/products/search?q=${inputValue}&select=title`
    : `https://dummyjson.com/products/search`;
  console.log(url);
  try {
    const { data } = await axios.get<ICategory>(url);
    return data as ICategory;
  } catch (e) {
    return rejectWithValue('error get data');
  }
});
