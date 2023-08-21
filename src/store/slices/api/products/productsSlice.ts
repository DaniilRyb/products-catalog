import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from './getProducts';
import { ICategory } from '../../../../entities/interfaces/ICategory';

type ApiResponse = {
  status: 'loading' | 'success' | 'error' | null;
  data: ICategory | null;
  error: string | null;
};
const initialState: ApiResponse = {
  status: null,
  data: null,
  error: null,
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<ICategory>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload as string;
    });
  },
});

export const products = productsSlice.reducer;
