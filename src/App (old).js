import { IconContext } from "react-icons";
import { BiMenu } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

import "./App.css";

import Player from "./components/Player.js";
import Playlist from "./components/PlaylistTrack";
import Chart from "./components/Chart";
import LikedPlaylists from "./components/LikedPlaylists";

const playlist1 = {
  playlistID: 29219219129,
  playlistName: "Metamorphosis 3",
  coverURL:
    "https://avatars.yandex.net/get-music-content/8096180/48de10d3.a.25444202-1/800x800",
  listensCount: 9218,
};
const playlist2 = {
  playlistID: 29219219129,
  playlistName: "Metamorphosis 3",
  coverURL:
    "https://avatars.yandex.net/get-music-content/8096180/48de10d3.a.25444202-1/800x800",
  listensCount: 9218,
};
const playlist3 = {
  playlistID: 29219219129,
  playlistName: "Metamorphosis 3",
  coverURL:
    "https://avatars.yandex.net/get-music-content/8096180/48de10d3.a.25444202-1/800x800",
  listensCount: 9218,
};

const listPlaylists = [playlist1, playlist2, playlist3];

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
  playlistName: "DRESSCODE",
  label: "ДРЕССКОД",
  authors: "Nikitata",
  songURL: "1",
  coverURL:
    "https://avatars.yandex.net/get-music-content/4382102/c247b5fa.a.18452239-1/800x800",
  active: false,
  liked: false,
  listensCount: 2377923,
};

const song3 = {
  playlistID: 29219219129,
  playlistName: "DRESSCODE",
  label: "ДРЕССКОД",
  authors: "Nikitata",
  songURL: "1",
  coverURL:
    "https://avatars.yandex.net/get-music-content/4382102/c247b5fa.a.18452239-1/800x800",
  active: true,
  liked: true,
  listensCount: 73927,
};

const songs = [song3, song, song2, song3];

const chartSongs = [
  song,
  song2,
  song3,
  song,
  song2,
  song3,
  song,
  song2,
  song3,
  song,
  song2,
  song3,
];

const getBGColor = async (image, setFunction) => {
  const fac = new FastAverageColor();
  const color = await fac.getColorAsync(image);
  setFunction(color.hex);
};

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [BGColor, setBGColor] = useState();
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    getBGColor(song.coverURL, setBGColor);
  }, []);

  const toggleHidden = () => {
    setTimeout(() => {
      setIsHidden((prev) => !prev);
    }, 100);
  };

  return (
    <div>
      {/*Start Control Center */}
      <React.Fragment>
        <section
          className={`${
            scroll > 10 ? "bg-slate-900" : "bg-slate-400/20"
          } z-50 fixed bottom-0 flex w-screen p-2 transition-colors delay-150 duration-200 ease-linear`}
        >
          <div className="flex justify-start h-full w-screen">
            <Player url={song.songURL} size="5" />
          </div>
          <div className="lg:hidden flex items-center justify-end h-full">
            <button className="hover:opacity-80" onClick={toggleHidden}>
              <IconContext.Provider value={{ size: "5vh", color: "#27AE60" }}>
                <BiMenu />
              </IconContext.Provider>
            </button>
          </div>
        </section>
      </React.Fragment>
      
      {/*End Control Center*/}

      {/*Start Playlist */}
      <React.Fragment>
        <aside
          className={`${
            isHidden ? "hidden" : "block"
          } lg:block flex flex-col flex-1 z-40 right-0 left-0 bottom-0 top-0 fixed h-screen w-screen md:w-1/5 backdrop-blur-lg bg-slate-900/60 transition delay-150 duration-300 ease-linear`}
        >
          <div className="w-screen md:w-full right-0 m-0">
            {songs.map((song, index) => (
              <Playlist key={index} song={song} />
            ))}
          </div>
        </aside>
      </React.Fragment>
      {/*End Playlist */}
      <div className="min-h-screen">
        <div
          className="bg-stone-800 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${song.coverURL})` }}
        >
          {/* Current song */}
          <header className="h-screen flex flex-col items-center justify-center content-center text-base text-white backdrop-blur-lg backdrop-brightness-50 relative">
            <div className={`absolute inset-x-0 top-0 content-start mt-2`}>
              <p className="text-sm text-center text-slate-400">
                Сейчас играет
              </p>
              <p className="text-base text-center">{song.playlistName}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-white font-mono mt-4">
              <img
                src={song.coverURL}
                className="song-cover h-[40vh] w-[40vh] object-cover pointer-events-none mb-4 rounded-full"
                alt="logo"
              />

              <p className="text-2xl font-semibold underline decoration-solid underline-offset-8 leading-loose">
                {song.label}
              </p>
              <p className="text-xl text-slate-400">{song.authors}</p>
            </div>
          </header>
        </div>
      </div>
      <section
        className="grid grid-rows-1 text-white p-4"
        style={{ backgroundColor: BGColor + "aa" }}
      >
        <p className="font-medium text-center text-xl pb-2">Ваши плейлисты</p>
        <div className="flex flex-row overflow-x-auto overflow-y-hidden md:justify-center">
          {listPlaylists.map((playlist, index) => (
            <LikedPlaylists key={index} playlist={playlist} />
          ))}
        </div>
      </section>
      {/* Chart */}
      <section
        className="h-full w-screen p-4"
        style={{ backgroundColor: BGColor + "dd" }}
      >
        <p className="font-medium text-center text-xl text-white pb-2">Чарт</p>
        <div className="columns-2 sm:columns-3">
          {chartSongs.map((song, index) => (
            <Chart key={index} song={song} place={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
