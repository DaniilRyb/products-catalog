import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '../../../../entities/categories/model/ICategory';
import axios from 'axios';

export class RequestError extends Error {
  code: number;
  messageAxios: string;
  constructor(message: string, code: number, messageAxios: string) {
    super(message);
    this.code = code;
    this.messageAxios = messageAxios;
  }
}

export const getProductsAction = createAsyncThunk<
  ICategory,
  string,
  { rejectValue: RequestError }
>('api/products', async (nameCategory: string, { rejectWithValue }) => {
  const { data, status } = await axios.get<ICategory>(
    `https://dummyjson.com/products/category/${nameCategory}`,
  );

  if (status !== 200) {
    return rejectWithValue({
      message: 'error request',
      messageAxios: 'error bad request',
      code: status,
      name: '',
    });
  }
  return data as ICategory;
});
