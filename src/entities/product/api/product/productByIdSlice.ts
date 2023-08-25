import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../model/IProduct';
import { getProductByIdAction } from './getProductByIdAction';

type ApiResponse = {
  status: 'loading' | 'success' | 'error' | null;
  data: IProduct | null;
  error: string | null;
};

const initialState: ApiResponse = {
  status: null,
  data: null,
  error: null,
};

export const productByIdSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductByIdAction.pending, (state: ApiResponse) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      getProductByIdAction.fulfilled,
      (state: ApiResponse, action: PayloadAction<IProduct>) => {
        state.status = 'success';
        state.error = null;
        state.data = action.payload;
      },
    );
    builder.addCase(
      getProductByIdAction.rejected,
      (state: ApiResponse, action) => {
        state.status = 'error';
        state.error = action.payload as string;
      },
    );
  },
});

export const productById = productByIdSlice.reducer;
