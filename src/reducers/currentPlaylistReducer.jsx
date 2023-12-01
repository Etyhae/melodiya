import { createSlice } from "@reduxjs/toolkit";
import { AGGRESSIVEplaylist } from "../playlistWithSongs";

const playlistInitialState =
  JSON.parse(localStorage.getItem("playlist")) || AGGRESSIVEplaylist;

export const currentPlaylistSlice = createSlice({
  name: "currentPlaylist",
  initialState: {
    value: playlistInitialState,
  },
  reducers: {
    switchPlaylist: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("playlist", JSON.stringify(state.value));
    },
  },
});

export const { switchPlaylist } = currentPlaylistSlice.actions;

export default currentPlaylistSlice.reducer;
