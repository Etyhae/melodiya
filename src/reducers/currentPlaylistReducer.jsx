import { createSlice } from "@reduxjs/toolkit";
import { playlist } from "../playlistWithSongs";

export const currentPlaylistSlice = createSlice({
    name: 'currentPlaylist',
    initialState: {
      value: playlist,
    },
    reducers: {
      switchPlaylist: (state, action) => {
        state.value = action.payload;
      },
    },
  });

export const { switchPlaylist } = currentPlaylistSlice.actions;

export default currentPlaylistSlice.reducer;