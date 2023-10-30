import { createSlice } from '@reduxjs/toolkit';

export const isPlayingSlice = createSlice({
  name: 'isPlaying',
  initialState: {
    value: false, // начальное значение
  },
  reducers: {
    togglePlay: (state) => {
      state.value = !state.value;
    },
  },
});

export const { togglePlay } = isPlayingSlice.actions;

export default isPlayingSlice.reducer;

