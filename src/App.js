import "./App.css";
import Player from "./components/Player.js";
import Playlist from "./components/Playlist";

const song = {
	playlistID: 29219219129,
	playlistName: "DRESSCODE",
	label: "ДРЕССКОД",
	author: "Nikitata",
	songURL:
		"https://s44vlx.storage.yandex.net/get-mp3/b9285fe3ea264bbde7e2bbbdd7076f8e/000602288cf0b268/rmusic/U2FsdGVkX1-AOE5itjTSUhQXPHTi6UVI8voIpe-dWxTdUq9HEiXG0Wmj4k-tCrybtrFOMPHg-dURnsUr4pAhRrsqD5EihtJW8_23Wv6_QXE/67f54a816258fed87d308f7ad72206ba5aa7d8b403e29531f90240a37c589c49/19171?track-id=92228791&play=false",
	coverURL: "https://i.ytimg.com/vi/wC5OFVMCLS8/maxresdefault.jpg",
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
	coverURL: "https://i.ytimg.com/vi/wC5OFVMCLS8/maxresdefault.jpg",
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
	coverURL: "https://i.ytimg.com/vi/wC5OFVMCLS8/maxresdefault.jpg",
	active: true,
	liked: true
};

const songs = [song, song2, song3];

function App() {
	return (
		<div>
			<div
				className="text-center bg-stone-800 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${song.coverURL})` }}
			>
				<aside className="flex flex-col float-right items-center justify-start min-w-[20%] bg-transparent h-[50%] pt-4 space-y-6 backdrop-blur-lg">
					{songs.map((song) => (
						<Playlist song={song} />
					))}
				</aside>
				<header className="min-h-screen min-w-[75%] flex flex-col items-center justify-center text-base text-white backdrop-blur-lg backdrop-brightness-50 relative">
					<div className="absolute inset-x-0 top-0 content-start mt-2">
						<p className="text-sm text-slate-400">Сейчас играет</p>
						<p className="text-base">{song.playlistName}</p>
					</div>
					<div className="flex flex-col items-center justify-center text-center text-white font-mono mt-4">
						<img
							src={song.coverURL}
							className="song-cover h-[50vh] w-[50vh] object-cover pointer-events-none mb-4 rounded-full"
							alt="logo"
						/>
						<p className="text-2xl font-semibold underline decoration-solid underline-offset-8">
							{song.label}
						</p>
						<p className="text-xl text-slate-400">{song.author}</p>
					</div>
					<div className="App">
						<Player url={song.songURL} />
					</div>
				</header>
			</div>
		</div>
	);
}

export default App;
