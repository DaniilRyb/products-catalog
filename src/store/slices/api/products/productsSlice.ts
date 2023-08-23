import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsAction, RequestError } from './getProductsAction';
import { ICategory } from '../../../../entities/interfaces/ICategory';

type ApiResponse = {
  status: 'loading' | 'success' | 'error' | null;
  data: ICategory | null;
  error: RequestError | null;
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
    });
    builder.addCase(
      getProductsAction.fulfilled,
      (state: ApiResponse, action: PayloadAction<ICategory>) => {
        state.status = 'success';
        state.data = action.payload;
        state.error = null;
      },
    );
    builder.addCase(getProductsAction.rejected, (state, action) => {
      state.status = 'error';
      if (state.error) state.error = action.payload as RequestError;
      console.log('state.error', state.error);
    });
  },
});

export const products = productsSlice.reducer;
