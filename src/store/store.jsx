import isPlayingReducer from '../reducers/isPlayingReducer';
import currentSongReducer from '../reducers/currentSongReducer';
import currentPlaylistReducer from '../reducers/currentPlaylistReducer';

import { configureStore } from "@reduxjs/toolkit";
import isAuthVisibleReducer from '../reducers/isAuthVisibleReducer';

export const store = configureStore({
  reducer: {
    isPlaying: isPlayingReducer,
    currentSong: currentSongReducer,
    currentPlaylist: currentPlaylistReducer,
    isAuthVisible: isAuthVisibleReducer
  },
});