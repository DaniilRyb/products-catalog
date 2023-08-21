import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsAction } from './getProductsAction';
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
    builder.addCase(getProductsAction.pending, (state: ApiResponse) => {
      state.status = 'loading';
      state.error = null;
      state.data = null;
    });
    builder.addCase(
      getProductsAction.fulfilled,
      (state, action: PayloadAction<ICategory>) => {
        state.status = 'success';
        state.error = null;
        state.data = action.payload;
      },
    );
    builder.addCase(getProductsAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload as string;
    });
  },
});

export const products = productsSlice.reducer;
