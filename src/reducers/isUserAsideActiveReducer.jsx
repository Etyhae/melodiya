import { createSlice } from '@reduxjs/toolkit';

export const isUserAsideActiveSlice = createSlice({
  name: 'isUserAsideActive',
  initialState: {
    value: false, 
  },
  reducers: {
    toggleUserAside: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleUserAside } = isUserAsideActiveSlice.actions;

export default isUserAsideActiveSlice.reducer;

