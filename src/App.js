import "./App.css";
import Player from "./components/Player.js";
import Playlist from "./components/Playlist";

import { IconContext } from "react-icons";
import { BiMenu } from "react-icons/bi";

import React, { useState} from "react";
import Chart from "./components/Chart";
import { FastAverageColor } from "fast-average-color";

const song = {
	playlistID: 29219219129,
	playlistName: "DRESSCODE",
	label: "ДРЕССКОД",
	author: "Nikitata",
	songURL:
		"https://s44vlx.storage.yandex.net/get-mp3/b9285fe3ea264bbde7e2bbbdd7076f8e/000602288cf0b268/rmusic/U2FsdGVkX1-AOE5itjTSUhQXPHTi6UVI8voIpe-dWxTdUq9HEiXG0Wmj4k-tCrybtrFOMPHg-dURnsUr4pAhRrsqD5EihtJW8_23Wv6_QXE/67f54a816258fed87d308f7ad72206ba5aa7d8b403e29531f90240a37c589c49/19171?track-id=92228791&play=false",
	coverURL: "https://avatars.yandex.net/get-music-content/4382102/c247b5fa.a.18452239-1/800x800",
	active: false,
	liked: false
};

const song2 = {
	playlistID: 29219219129,
	playlistName: "DRESSCODE",
	label: "ДРЕССКОД",
	author: "Nikitata",
	songURL:
		"https://s44vlx.storage.yandex.net/get-mp3/b9285fe3ea264bbde7e2bbbdd7076f8e/000602288cf0b268/rmusic/U2FsdGVkX1-AOE5itjTSUhQXPHTi6UVI8voIpe-dWxTdUq9HEiXG0Wmj4k-tCrybtrFOMPHg-dURnsUr4pAhRrsqD5EihtJW8_23Wv6_QXE/67f54a816258fed87d308f7ad72206ba5aa7d8b403e29531f90240a37c589c49/19171?track-id=92228791&play=false",
	coverURL: "https://avatars.yandex.net/get-music-content/4382102/c247b5fa.a.18452239-1/800x800",
	active: false,
	liked: false
};

const song3 = {
	playlistID: 29219219129,
	playlistName: "DRESSCODE",
	label: "ДРЕССКОД",
	author: "Nikitata",
	songURL:
		"https://s44vlx.storage.yandex.net/get-mp3/b9285fe3ea264bbde7e2bbbdd7076f8e/000602288cf0b268/rmusic/U2FsdGVkX1-AOE5itjTSUhQXPHTi6UVI8voIpe-dWxTdUq9HEiXG0Wmj4k-tCrybtrFOMPHg-dURnsUr4pAhRrsqD5EihtJW8_23Wv6_QXE/67f54a816258fed87d308f7ad72206ba5aa7d8b403e29531f90240a37c589c49/19171?track-id=92228791&play=false",
	coverURL: "https://avatars.yandex.net/get-music-content/4382102/c247b5fa.a.18452239-1/800x800",
	active: true,
	liked: true
};

const songs = [song, song2, song3];

const getBGColor = async (image) => {
	const fac = new FastAverageColor;
	const color = await fac.getColorAsync(image);
	return color.hex;
}

function App() {
	const [isHidden, setIsHidden] = useState(true);

	const handleClick = e => {
	  setIsHidden(isHidden => !isHidden);
	};

	return (
		<div>
			<div className="min-h-screen">
				<div className="bg-stone-800 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${song.coverURL})` }}>
					<aside className={`${(isHidden? "translate-x-[100%]" : "translate-x-0")} lg:translate-x-0 transition delay-150 duration-300 ease-linear z-40 max-w-[100%] lg:max-w-[30%] lg:right-0 min-h-screen absolute lg:relative flex-col lg:float-right items-center text-left justify-start sm:min-w-[20%] bg-slate-700/30 h-[50%] pt-4 space-y-6 backdrop-blur-lg lg:flex`}>
						{songs.map((song) => (
							<Playlist song={song} />
						))}
					</aside>
					<header className="h-screen flex flex-col items-center justify-center content-center text-base text-white backdrop-blur-lg backdrop-brightness-50 relative">
						<div className="absolute inset-x-0 top-0 content-start mt-2">
							<p className="text-sm text-center text-slate-400">Сейчас играет</p>
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
							<p className="text-xl text-slate-400">{song.author}</p>
						</div>
					</header>
					<section className="z-50 fixed flex w-full bg-slate-400/20 p-2 bottom-0">
						<div className="flex justify-start h-full w-full">
							<Player url={song.songURL} size="6" />
						</div>
						<div className="lg:hidden flex items-center justify-end h-full w-full">
							<button className="hover:opacity-80" onClick={handleClick}>
								<IconContext.Provider value={{ size: "6vh", color: "#27AE60" }}>
									<BiMenu />
								</IconContext.Provider>
							</button>
						</div>
					</section>
				</div>
			</div>
			<div className="min-h-screen">
				<div className={`flex w-screen bg-[${getBGColor(song.coverURL)}]`}>
					<div className="w-1/3 py-12 pl-12">
						{songs.map((song) => (
							<Chart song={song} />
						))}
					</div>
					<div className="w-1/3 py-12">
						{songs.map((song) => (
							<Chart song={song} />
						))}
					</div>
					<div className="w-1/3 py-12 pr-12">
						{songs.map((song) => (
							<Chart song={song} />
						))}
					</div>

				</div>
			</div>
		</div>
	);
}

export default App;
