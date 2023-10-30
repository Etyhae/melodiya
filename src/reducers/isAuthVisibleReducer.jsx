import { createSlice } from "@reduxjs/toolkit"

export const isAuthVisibleSlice = createSlice({
  name: "isAuthVisible",
  initialState: {
    value: false,
  },
  reducers: {
    switchVisible: (state) => {
      state.value = !state.value;
    },
  },
});

export const { switchVisible } = isAuthVisibleSlice.actions;

export default isAuthVisibleSlice.reducer;
