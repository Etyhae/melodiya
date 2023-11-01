import isPlayingReducer from '../reducers/isPlayingReducer';
import currentSongReducer from '../reducers/currentSongReducer';
import currentPlaylistReducer from '../reducers/currentPlaylistReducer';

import { configureStore } from "@reduxjs/toolkit";
import isAuthVisibleReducer from '../reducers/isAuthVisibleReducer';
import isPlaylistAsideVisibleReducer from '../reducers/isPlaylistAsideVisibleReducer';
import isPlayLoopReducer from '../reducers/isPlayLoopReducer';

export const store = configureStore({
  reducer: {
    isPlaying: isPlayingReducer,
    currentSong: currentSongReducer,
    currentPlaylist: currentPlaylistReducer,
    isAuthVisible: isAuthVisibleReducer,
    isPlaylistAsideVisible: isPlaylistAsideVisibleReducer,
    isPlayLoop: isPlayLoopReducer
  },
});