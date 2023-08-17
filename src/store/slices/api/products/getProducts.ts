import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '../../../../entities/interfaces/ICategory';
import axios from 'axios';

export const getProducts = createAsyncThunk<ICategory, string,  { rejectValue: string }>("apiData", async (nameCategory: string, {rejectWithValue}) => {
  try {
    const { data } = await axios.get<ICategory>(`https://dummyjson.com/products/category/${nameCategory}`);
    return data as ICategory
  } catch (e) {
    console.log(e);
    return rejectWithValue("error get data products")
  }
  })
