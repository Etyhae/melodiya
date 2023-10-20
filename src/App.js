import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { useDispatch } from "react-redux";
import {
  setPlaylist,
  setSong,
  togglePlay,
  toggleAside,
} from "./actions/actions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";

import "./App.css";

import MainTrack from "./components/MainTrack";
import PlaylistAside from "./components/PlaylistAside";
import PlaylistsPicking from "./components/PlaylistsPicking";
import ControlCentre from "./components/ControlCentre";

import { FastAverageColor } from "fast-average-color";

const screenW = window.screen.width;

const song = {
  id: 7392177291,
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
  id: 28739173218,
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
  id: 729872791,
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
  id: 186168812,
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
  id: 263961293621,
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
  id: 8379172198,
  playlistID: 29219219129,
  playlistName: "Panic Attack",
  label: "Panic Attack",
  authors: "SPXCEMIND, shizxcrdrst",
  songURL: "2",
  coverURL:
    "https://avatars.yandex.net/get-music-content/6296749/c26c8b10.a.22977219-1/800x800",
  active: false,
  liked: true,
  listensCount: 10000,
};
const song7 = {
  id: 3612963921,
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

const likedPlaylists = [playlist, playlist2];

function App() {
  // const [isAsideActive, setAsideActive] = useState(
  //   screenW < 768 ? false : true
  // );

  // const asideSwitch = () => {
  //   setAsideActive(!isAsideActive);
  // };

  // useEffect(() => {
  //   getBGColor(songCurrent.coverURL);
  // }, []);

  // const skipSong = (way) => {
  //   setSong(
  //     (songCurrent) =>
  //       playlistCurrent.songs[playlistCurrent.songs.indexOf(songCurrent) + way]
  //   );
  // };

  // const songSwitch = (song) => {
  //   setSong(playlistCurrent.songs[playlistCurrent.songs.indexOf(song)]);
  // };

  const isPlaying = useSelector((state) => state.isPlaying);
  const playlistCurrent = useSelector((state) => state.playlist);
  const songCurrent = useSelector((state) => state.song);
  const isAsideActive = useSelector((state) => state.isAsideActive);

  const dispatch = useDispatch();

  const playlistSwitch = (playlist) => {
    dispatch(setPlaylist(playlist));
    dispatch(setSong(playlist.songs[0]));
  };

  const playSwitch = () => {
    dispatch(togglePlay());
  };

  const asideSwitch = () => {
    dispatch(toggleAside());
  };

  const songSwitch = (song) => {
    dispatch(
      setSong(playlistCurrent.songs[playlistCurrent.songs.indexOf(song)])
    );
  };

  const skipSong = (way) => {
    dispatch(
      setSong(
        playlistCurrent.songs[playlistCurrent.songs.indexOf(songCurrent) + way]
      )
    );
  };

  // const getBGColor = async (image) => {
  //   const corsAnywhereURL = "https://cors-anywhere.herokuapp.com/"; // URL "CORS Anywhere"
  //   const imageURL = songCurrent.coverURL;
  //   const fac = new FastAverageColor();
  
  //   try {
  //     const response = await fetch(corsAnywhereURL + imageURL);
  //     const blob = await response.blob();
  //     const color = await fac.getColorAsync(blob);
  //     setBGColor(color.hex);
  //   } catch (error) {
  //     console.error("Ошибка при получении цвета изображения:", error);
  //   }
  // };
  
  
  // const [BGColor, setBGColor] = useState("");
  
  // useEffect(() => {
  //   const img = new Image();
  //   img.src = songCurrent.coverURL;
  //   img.onload = () => {
  //     getBGColor(img);
  //   };
  // }, [songCurrent.coverURL]);


  const getBGColor = async (image) => {
    const fac = new FastAverageColor();
    const color = await fac.getColorAsync(image);
    setBGColor(color.hex);
  };

  const [BGColor, setBGColor] = useState(getBGColor(songCurrent.coverURL));

  // const [playlistCurrent, setPlaylist] = useState(playlist);
  // const [songCurrent, setSong] = useState(playlistCurrent.songs[0]);

  // const playlistSwitch = (playlist) => {
  //   setPlaylist(playlist);
  //   songSwitch(playlist.songs[0]);
  // };

  // const [isPlaying, setPause] = useState(false);

  // const playSwitch = () => {
  //   setPause(!isPlaying);
  // };

  const [isLiked, setSongLiked] = useState(); // Redux

  const likeSwitch = (song) => {
    const songIsLiked = song.liked;
    song.liked = !songIsLiked;
    setSongLiked(!isLiked);
  };

  const cutLabel = (label) => {
    return label.length > 30 ? label.slice(0, 30).trim() + "..." : label;
  };

  return (
    <div className="pb-[4rem]">
      <PlaylistAside
        isAsideActive={isAsideActive}
        playlist={playlistCurrent}
        songCurrent={songCurrent}
        isLiked={isLiked}
        func={{ songSwitch, asideSwitch, likeSwitch }}
      />

      <MainTrack
        coverURL={songCurrent.coverURL}
        playlistName={songCurrent.playlistName}
        label={songCurrent.label}
        authors={songCurrent.authors}
        isPlaying={isPlaying}
        isAsideActive={isAsideActive}
      />

      <ControlCentre
        songCurrent={songCurrent}
        playlistCurrent={playlistCurrent}
        bool={{ isPlaying, isLiked}}
        func={{ skipSong, playSwitch, cutLabel, asideSwitch, likeSwitch}}
      />

      <PlaylistsPicking
        BGcolor={BGColor}
        listPlaylists={likedPlaylists}
        onPlaylistSelect={playlistSwitch}
        isAsideActive={isAsideActive}
      />

      {/* Chart */}
      {/* <section
        className="h-full w-screen p-4"
        style={{ backgroundColor: BGColor + "dd" }}
      >
        <p className="font-medium text-center text-xl text-white pb-2">Чарт</p>
        <div className="columns-2 sm:columns-3">
          {chartSongs.map((song, index) => (
            <Chart key={index} song={song} place={index} />
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
