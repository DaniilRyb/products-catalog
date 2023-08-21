import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesAction, CategoriesProducts } from './getCategoriesAction';

type ApiResponse = {
  status: 'loading' | 'success' | 'error' | null;
  categories: CategoriesProducts | null;
  error: string | null;
};
const initialState: ApiResponse = {
  status: null,
  categories: null,
  error: null,
};
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesAction.pending, (state: ApiResponse) => {
      state.status = 'loading';
    });
    builder.addCase(getCategoriesAction.fulfilled, (state, action) => {
      state.status = 'success';
      state.categories = action.payload;
    });
    builder.addCase(getCategoriesAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload as string;
    });
  },
});

export const categories = categoriesSlice.reducer;
