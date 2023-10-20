const song = {
  playlistID: 29219219129,
  playlistName: "Metamorphosis 3",
  label: "Metamorphosis 3",
  authors: "zxcursed, INTERWORLD",
  songURL: "1",
  coverURL:
    "https://avatars.yandex.net/get-music-content/8096180/48de10d3.a.25444202-1/800x800",
  active: false,
  liked: false,
  listensCount: 9284821,
};

const song2 = {
  playlistID: 29219219129,
  playlistName: "Memories",
  label: "Memories",
  authors: "Overrated",
  songURL: "2",
  coverURL:
    "https://avatars.yandex.net/get-music-content/6202531/7bbea894.a.23498989-1/800x800",
  active: false,
  liked: false,
  listensCount: 10000,
};
const song3 = {
  playlistID: 29219219129,
  playlistName: "Totally Spices",
  label: "Totally Spices",
  authors: "Lead Horizon",
  songURL: "2",
  coverURL:
    "https://avatars.yandex.net/get-music-content/6300975/ce8be800.a.23127932-1/800x800",
  active: false,
  liked: false,
  listensCount: 10000,
};
const song4 = {
  playlistID: 29219219129,
  playlistName: "Katana",
  label: "Katana",
  authors: "Lead Horizons",
  songURL: "2",
  coverURL:
    "https://avatars.yandex.net/get-music-content/5878680/4cd0fdde.a.24054824-1/800x800",
  active: false,
  liked: false,
  listensCount: 10000,
};
const song5 = {
  playlistID: 29219219129,
  playlistName: "CHAINSAW",
  label: "CHAINSAW",
  authors: "fxcesplit",
  songURL: "2",
  coverURL:
    "https://avatars.yandex.net/get-music-content/5502420/16ce9816.a.23994173-1/800x800",
  active: false,
  liked: false,
  listensCount: 10000,
};
const song6 = {
  playlistID: 29219219129,
  playlistName: "Panic Attack",
  label: "Panic Attack",
  authors: "SPXCEMIND, shizxcrdrst",
  songURL: "2",
  coverURL:
    "https://avatars.yandex.net/get-music-content/6296749/c26c8b10.a.22977219-1/800x800",
  active: false,
  liked: false,
  listensCount: 10000,
};
const song7 = {
  playlistID: 29219219129,
  playlistName: "tsukuyomi (Prod. by Pxlsdead)",
  label: "tsukuyomi (Prod. by Pxlsdead)",
  authors: "INOMI, Эсси",
  songURL: "2",
  coverURL:
    "https://avatars.yandex.net/get-music-content/6201394/e826559b.a.23615563-1/800x800",
  active: false,
  liked: false,
  listensCount: 10000,
};

const playlist = {
  playlistID: 903989231,
  playlistName: "AGGRESSIVE",
  compiler: "etyhae",
  coverURL:
    "https://avatars.yandex.net/get-music-content/8096180/48de10d3.a.25444202-1/800x800",
  songs: [song, song2, song3, song4, song5, song6, song7],
};

const playlist2 = {
  playlistID: 903989231,
  playlistName: "Overrated",
  compiler: "nnisley",
  coverURL:
    "https://avatars.yandex.net/get-music-content/6202531/7bbea894.a.23498989-1/800x800",
  songs: [song2, song],
};

const initialState = {
  playlist: playlist, // Исходный плейлист
  song: playlist.songs[0], // Исходная песня
  songs: [],
  isPlaying: false, // Статус воспроизведения
  isAsideActive: true, // Отображение боковой панели
  isLiked: song.liked // Лайк на песне
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return { ...state, playlist: action.payload };

    case "SET_SONG":
      return { ...state, song: action.payload };

    case "TOGGLE_PLAY":
      return { ...state, isPlaying: !state.isPlaying };

    case "TOGGLE_ASIDE":
      return { ...state, isAsideActive: !state.isAsideActive };

    default:
      return state;
  }
};

export default rootReducer;
