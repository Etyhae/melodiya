import { useSelector } from "react-redux";

const Track = ({ song, onClick }) => {
  const currentSong = useSelector((state) => state.currentSong.value);
  return (
    <button
      className={`flex flex-row justify-around p-2 hover:opacity-80 ${
        song === currentSong ? "bg-slate-400/30" : ""
      }`}
      onClick={onClick}
    >
      <img src={song.cover} alt={song.label} className="rounded-md" />
      {/* <div className="text-left">
                <p className="text-base font-medium text-white">{song.label}</p>
                <p className="text-sm text-slate-400">{song.authors}</p>
             </div> */}
    </button>
  );
};

export default Track;
