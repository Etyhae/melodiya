export const setPlaylist = (playlist) => ({
  type: "SET_PLAYLIST",
  payload: playlist,
});

export const setSong = (song) => ({
  type: "SET_SONG",
  payload: song,
});

export const togglePlay = () => ({
  type: "TOGGLE_PLAY",
});

export const toggleAside = () => ({
  type: "TOGGLE_ASIDE",
});
  
