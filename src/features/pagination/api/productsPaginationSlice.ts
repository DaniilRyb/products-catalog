import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getProductsPaginationSliceAction,
  IPagination,
} from './getProductsPaginationSliceAction';

type ApiResponse = {
  status: 'loading' | 'success' | 'error' | null;
  data: IPagination | null;
  error: string | null;
};
const initialState: ApiResponse = {
  status: null,
  data: null,
  error: null,
};
export const productsPaginationSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProductsPaginationSliceAction.pending,
      (state: ApiResponse) => {
        state.status = 'loading';
        state.error = null;
      },
    );
    builder.addCase(
      getProductsPaginationSliceAction.fulfilled,
      (state: ApiResponse, action: PayloadAction<IPagination>) => {
        state.status = 'success';
        state.error = null;
        state.data = action.payload;
      },
    );
    builder.addCase(
      getProductsPaginationSliceAction.rejected,
      (state: ApiResponse, action) => {
        state.status = 'error';
        state.error = action.payload as string;
      },
    );
  },
});

export const productsPagination = productsPaginationSlice.reducer;
