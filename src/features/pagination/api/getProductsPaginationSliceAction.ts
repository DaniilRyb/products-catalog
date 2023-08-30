import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICategory } from '../../../entities/categories/model/ICategory';

type ProductsPaginationParams = {
  limit: number;
  skip: number;
};

export interface IPagination {
  pagination: {
    limit: number;
    skip: number;
    total: number;
  };
  data: ICategory;
}
export const getProductsPaginationSliceAction = createAsyncThunk<
  IPagination,
  ProductsPaginationParams,
  { rejectValue: string }
>('api/products', async ({ limit, skip }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<ICategory>(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );
    return {
      pagination: {
        skip,
        limit,
        total: 100,
      },
      data,
    } as IPagination;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error get data products');
  }
});
