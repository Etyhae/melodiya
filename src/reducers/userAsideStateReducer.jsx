import { createSlice } from "@reduxjs/toolkit";

export const userAsideStateSlice = createSlice({
  name: "userAsideState",
  initialState: {
    value: "",
  },
  reducers: {
    toggleAsideSearch: (state) => {
      state.value = "searchAside";
    },
    toggleAsidePlaylists: (state) => {
      state.value = "playlistsAside";
    },
    toggleAsideLiked: (state) => {
      state.value = "likedAside";
    },
    toggleAsideUser: (state) => {
      state.value = "userAside";
    },
    toggleAsideSettings: (state) => {
      state.value = "settingsAside";
    },
  },
});

export const {
  toggleAsideSearch,
  toggleAsidePlaylists,
  toggleAsideLiked,
  toggleAsideUser,
  toggleAsideSettings,
} = userAsideStateSlice.actions;

export default userAsideStateSlice.reducer;
