import { useSelector } from "react-redux";
import TrackName from "./TrackName";
import { truncateLabel } from "../utils/truncateLabel";

const Track = ({ song, onClick, full }) => {
  const currentSong = useSelector((state) => state.currentSong.value);
  const isPlaylistAsideVisible = useSelector((state) => state.isPlaylistAsideVisible.value);
  return (
    <>
    <button
      className={`flex flex-row w-full border-slate-400  hover:outline outline-2 outline-[#27ae60] p-2 hover:opacity-80 ${
        song === currentSong ? "bg-slate-400/30" : ""
      }
      ${full ? "justify-start" : isPlaylistAsideVisible ? "justify-start" : "md:justify-center"}`}
      onClick={onClick}
    >
      <img src={song.cover} alt={song.label} className=" h-12 w-12 rounded-md flex self-center" />
      <div className={`text-left pl-4 ${full ? "" : isPlaylistAsideVisible ? "" : "md:hidden"}`}>
        <TrackName label={truncateLabel(song.label)} sizeLarge={'sm'} sizeSmall={'xs'}
              authors={song.authors} />
             </div>
    </button>
    {/* <button
      className={`flex flex-row w-full border-slate-400  hover:outline outline-2 outline-[#27ae60] p-2 hover:opacity-80 ${
        song === currentSong ? "bg-slate-400/30" : ""
      }
      ${isPlaylistAsideVisible ? "justify-start" : "md:justify-center"}`}
      onClick={onClick}
    >
      <div className={`text-left pl-4 ${isPlaylistAsideVisible ? "" : "md:hidden"}`}>
      <div className="flex flex-row items-center">
        <p
          className={`text-sm text-white font-semibold leading-loose`}
        >
          {song.label}&nbsp;—&nbsp;<span className="text-slate-400">{song.authors}</span>
        </p>
      </div>
             </div>
    </button> */}
    </>
  );
};

export default Track;
