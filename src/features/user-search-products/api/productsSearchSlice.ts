import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchProductsAction } from './searchProductsAction';
import { ICategory } from '../../../entities/categories/model/ICategory';

type ApiResponse = {
  status: 'loading' | 'success' | 'error' | null;
  productsList: ICategory | null;
  error: string | null;
};
const initialState: ApiResponse = {
  status: null,
  productsList: null,
  error: null,
};
export const productsSearchSlice = createSlice({
  name: 'search products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchProductsAction.pending, (state: ApiResponse) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      searchProductsAction.fulfilled,
      (state: ApiResponse, action: PayloadAction<ICategory>) => {
        state.status = 'success';
        state.error = null;
        state.productsList = action.payload as ICategory;
      },
    );
    builder.addCase(
      searchProductsAction.rejected,
      (state: ApiResponse, action) => {
        state.status = 'error';
        state.error = action.payload as string;
      },
    );
  },
});

export const searchProducts = productsSearchSlice.reducer;
