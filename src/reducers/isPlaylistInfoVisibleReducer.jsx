import { createSlice } from "@reduxjs/toolkit";

export const isPlaylistInfoVisibleSlice = createSlice({
  name: "isPlaylistReviewVisible",
  initialState: {
    playlist: null,
    visible: false,
  },
  reducers: {
    togglePlaylistInfo: (state, action) => {
      state.playlist = action.payload;
      state.visible = !state.visible;
    },
  },
});

export const { togglePlaylistInfo } = isPlaylistInfoVisibleSlice.actions;

export default isPlaylistInfoVisibleSlice.reducer;
