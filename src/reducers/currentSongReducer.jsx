import { createSlice } from "@reduxjs/toolkit";
import { AGGRESSIVEplaylist } from "../playlistWithSongs";

const songInitialState =
  JSON.parse(localStorage.getItem("song")) || AGGRESSIVEplaylist.songs[0];

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState: {
    value: songInitialState,
  },
  reducers: {
    switchSong: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("song", JSON.stringify(state.value));
    },
    skipSong: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("song", JSON.stringify(state.value));
    },
    setLiked: (state) => {
      return {
        ...state,
        value: {
          ...state.value,
          liked: !state.value.liked,
        },
      };
    },
  },
});

export const { switchSong, setLiked, skipSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;
