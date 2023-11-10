import { createSlice } from "@reduxjs/toolkit"
import { playlist } from "../playlistWithSongs"


export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState: {
    value: playlist.songs[0],
  },
  reducers: {
    switchSong: (state, action) => {
      state.value = action.payload;
    },
    skipSong: (state, action) => {
      state.value = action.payload;
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
