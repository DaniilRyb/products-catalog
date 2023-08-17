import { createSlice } from '@reduxjs/toolkit';
import { getCategories, CategoriesProducts } from './getCategories';

type ApiResponse = {
  status: "loading" | "success" | "error" | null,
  data: CategoriesProducts | null,
  error: string | null
}
const initialState: ApiResponse = {
  status: null,
  data: null,
  error: null
}
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.pending, (state) => {
      state.status = "loading"
      state.data = null
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.status = "success"
      state.data = action.payload
    })
    builder.addCase(getCategories.rejected, (state, action) => {
      state.status = "error"
      state.error = action.payload as string
    })
  }
})

export const categories = categoriesSlice.reducer
