import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IProduct } from '../../model/IProduct';

export const getProductByIdAction = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: string }
>('api/products', async (id: string, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<IProduct>(
      `https://dummyjson.com/products/${id}`,
    );
    return data as IProduct;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error get data products');
  }
});
