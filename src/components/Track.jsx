import { useSelector } from "react-redux";
import TrackName from "./TrackName";

const Track = ({ song, onClick }) => {
  const currentSong = useSelector((state) => state.currentSong.value);
  const isPlaylistAsideVisible = useSelector((state) => state.isPlaylistAsideVisible.value);
  return (
    <button
      className={`flex flex-row  w-full p-2 hover:opacity-80 ${
        song === currentSong ? "bg-slate-400/30" : ""
      }
      ${isPlaylistAsideVisible ? "justify-start" : "md:justify-center"}`}
      onClick={onClick}
    >
      <img src={song.cover} alt={song.label} className=" h-12 w-12 md:h-14 md:w-14 rounded-md" />
      <div className={`text-left pl-4 ${isPlaylistAsideVisible ? "" : "md:hidden"}`}>
        <TrackName song={song} />
             </div>
    </button>
  );
};

export default Track;
