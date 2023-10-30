import TrackName from "./TrackName";
import { useSelector } from "react-redux";

const SongMainInfo = () => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  const currentSong = useSelector((state) => state.currentSong.value);

  return (
    <>
      <div
        className="relative w-full h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentSong.cover})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-2 z-1 backdrop-blur-md backdrop-brightness-50">
          <p className="text-sm text-slate-400">Сейчас играет</p>
          <p className="text-base text-white">{currentPlaylist.playlistName}</p>
          <p className="text-sm text-slate-400">by {currentPlaylist.compiler}</p>
        </div>
        <div className="absolute inset-x-0 top-1/4 flex flex-col justify-center items-center z-1">
          <img
            className={`${
              isPlaying ? "" : "anim-paused"
            } w-[25rem] h-[25rem] rounded-full song-cover`}
            src={currentSong.cover}
            alt={currentSong.label}
          />
          <div className="text-center">
            <TrackName song={currentSong} sizeLarge="2xl" sizeSmall="xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SongMainInfo;
