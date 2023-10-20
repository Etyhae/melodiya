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

const ControlCentre = (props) => {
  return (
    <div className="fixed z-50 bg-black bottom-0 w-screen flex flex-col md:flex-row items-center h-32 md:h-16">
      <div className="w-screen md:w-auto flex justify-center items-center">
        <button
          onClick={() => props.func.skipSong(-1)}
          disabled={
            props.playlistCurrent.songs.indexOf(props.songCurrent) == 0 ? 1 : 0
          }
        >
          <IconContext.Provider
            value={{
              size: "4rem",
              color:
                props.playlistCurrent.songs.indexOf(props.songCurrent) == 0
                  ? "gray"
                  : "#27AE60",
            }}
          >
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>

        <button onClick={props.func.playSwitch}>
          <IconContext.Provider value={{ size: "4rem", color: "#27AE60" }}>
            {props.bool.isPlaying ? <BiPlay /> : <BiPause />}
          </IconContext.Provider>
        </button>
        <button
          onClick={() => props.func.skipSong(1)}
          disabled={
            props.playlistCurrent.songs.indexOf(props.songCurrent) ==
            props.playlistCurrent.songs.length - 1
              ? 1
              : 0
          }
        >
          <IconContext.Provider
            value={{
              size: "4rem",
              color:
                props.playlistCurrent.songs.indexOf(props.songCurrent) ==
                props.playlistCurrent.songs.length - 1
                  ? "gray"
                  : "#27AE60",
            }}
          >
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      <div className="w-screen md:w-auto flex justify-center items-center">
        <div className="max-w-[20rem] flex flex-row">
          <img
            className={`h-12 w-12 object-cover rounded-md ml-8 mr-4`}
            src={props.songCurrent.coverURL}
            alt="coverImg"
          />
          <div className="flex flex-col">
            <p className="text-sm text-white font-semibold underline decoration-solid underline-offset-8 leading-loose">
              {props.func.cutLabel(props.songCurrent.label)}
            </p>
            <p className="text-sm text-slate-400">
              {props.songCurrent.authors}
            </p>
          </div>
        </div>
        <button className="pl-6 flex" onClick={() => props.func.likeSwitch(props.songCurrent)}>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              color: "#27AE60",
            }}
          >
            {props.bool.isLiked ? <BiSolidHeart /> : <BiHeart />}
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
          onClick={() => props.func.asideSwitch()}
        >
          <IconContext.Provider
            value={{
              size: "3rem",
              color: "#27AE60",
            }}
          >
            <BiMenu />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default ControlCentre;
