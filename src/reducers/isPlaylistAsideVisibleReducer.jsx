import { createSlice } from '@reduxjs/toolkit';

export const isPlaylistAsideVisibleSlice = createSlice({
  name: 'isPlaylistAsideVisible',
  initialState: {
    value: false, // начальное значение
  },
  reducers: {
    togglePlaylistAside: (state) => {
      state.value = !state.value;
    },
  },
});

export const { togglePlaylistAside } = isPlaylistAsideVisibleSlice.actions;

export default isPlaylistAsideVisibleSlice.reducer;

