import React, { useState } from "react";

import "./App.css";

import MainTrack from "./components/MainTrack";
import PlaylistAside from "./components/PlaylistAside";
import PlaylistsPicking from "./components/PlaylistsPicking";

import { FastAverageColor } from "fast-average-color";
import {
  BiHeart,
  BiMenu,
  BiPause,
  BiPlay,
  BiPlus,
  BiSkipNext,
  BiSkipPrevious,
  BiSolidHeart,
} from "react-icons/bi";
import { IconContext } from "react-icons";
import { useEffect } from "react";

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

const likedPlaylists = [playlist, playlist2];
const screenW = window.screen.width;

function App() {
  const getBGColor = async (image) => {
    const fac = new FastAverageColor();
    const color = await fac.getColorAsync(image);
    setBGColor(color.hex);
  };

  const [playlistCurrent, setPlaylist] = useState(playlist);
  const [songCurrent, setSong] = useState(playlistCurrent.songs[0]);
  const [BGColor, setBGColor] = useState(getBGColor(songCurrent.coverURL));
  const [isAsideActive, setAsideActive] = useState(
    screenW < 768 ? false : true
  );

  const asideSwitch = () => {
    setAsideActive(!isAsideActive);
  };

  useEffect(() => {
    getBGColor(songCurrent.coverURL);
  }, []);

  const skipSong = (way) => {
    setSong(
      (songCurrent) =>
        playlistCurrent.songs[playlistCurrent.songs.indexOf(songCurrent) + way]
    );
  };

  const songSwitch = (song) => {
    setSong(playlistCurrent.songs[playlistCurrent.songs.indexOf(song)]);
  };

  const playlistSwitch = (playlist) => {
    setPlaylist(playlist);
    songSwitch(playlist.songs[0]);
  };

  const [isPlaying, setPause] = useState(false);

  const playSwitch = () => {
    setPause(!isPlaying);
  };

  const [isHidden, setIsHidden] = useState(true);

  const [isLiked, setSongLiked] = useState(songCurrent.liked); // Redux

  const likeHandlerClick = () => {
    setSongLiked(!isLiked);
  };


  const cutLabel = (label) => {
    return label.length > 30 ? label.slice(0, 30).trim() + "...": label;
  }

  return (
    <div className="pb-[4rem]">
      <PlaylistAside
        isAsideActive={isAsideActive}
        playlist={playlistCurrent}
        songCurrent={songCurrent}
        func={{ songSwitch, asideSwitch }}
      />

      <MainTrack
        coverURL={songCurrent.coverURL}
        playlistName={songCurrent.playlistName}
        label={songCurrent.label}
        authors={songCurrent.authors}
        isPlaying={isPlaying}
        isAsideActive={isAsideActive}
      />

      <div className="fixed z-50 bg-black bottom-0 w-screen flex flex-row items-center h-16">
        <button
          onClick={() => skipSong(-1)}
          disabled={playlistCurrent.songs.indexOf(songCurrent) == 0 ? 1 : 0}
        >
          <IconContext.Provider
            value={{
              size: "3rem",
              color:
                playlistCurrent.songs.indexOf(songCurrent) == 0
                  ? "gray"
                  : "#27AE60",
            }}
          >
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>

        <button onClick={playSwitch}>
          <IconContext.Provider value={{ size: "3rem", color: "#27AE60" }}>
            {isPlaying ? <BiPlay /> : <BiPause />}
          </IconContext.Provider>
        </button>
        <button
          onClick={() => skipSong(1)}
          disabled={
            playlistCurrent.songs.indexOf(songCurrent) ==
            playlist.songs.length - 1
              ? 1
              : 0
          }
        >
          <IconContext.Provider
            value={{
              size: "3rem",
              color:
                playlistCurrent.songs.indexOf(songCurrent) ==
                playlist.songs.length - 1
                  ? "gray"
                  : "#27AE60",
            }}
          >
            <BiSkipNext />
          </IconContext.Provider>
        </button>
        <div className="max-w-[20rem] flex flex-row">
          <img
            className={`h-12 w-12 object-cover rounded-md ml-8 mr-4`}
            src={songCurrent.coverURL}
            alt="coverImg"
          />
          <div className="flex flex-col">
            <p className="text-sm text-white font-semibold underline decoration-solid underline-offset-8 leading-loose">
              {cutLabel(songCurrent.label)}
            </p>
            <p className="text-sm text-slate-400">{songCurrent.authors}</p>
          </div>
        </div>
        <button className="pl-6 flex" onClick={likeHandlerClick}>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              color: "#27AE60",
            }}
          >
            {isLiked ? <BiSolidHeart /> : <BiHeart />}
          </IconContext.Provider>
        </button>
        <button className="pl-4 flex">
          <IconContext.Provider
            value={{
              size: "1.5rem",
              color: "#27AE60",
            }}
          >
            <BiPlus />
          </IconContext.Provider>
        </button>
        <button
          className="ml-auto pr-4 flex md:hidden"
          onClick={() => asideSwitch()}
        >
          <IconContext.Provider
            value={{
              size: "4rem",
              color: "#27AE60",
            }}
          >
            <BiMenu />
          </IconContext.Provider>
        </button>
      </div>

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

export default App;
