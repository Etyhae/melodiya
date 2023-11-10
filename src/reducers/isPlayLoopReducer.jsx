import { createSlice } from '@reduxjs/toolkit';

export const isPlayLoopSlice = createSlice({
  name: 'isPlayLoop',
  initialState: {
    value: false, // начальное значение
  },
  reducers: {
    toggleLoop: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleLoop } = isPlayLoopSlice.actions;

export default isPlayLoopSlice.reducer;

