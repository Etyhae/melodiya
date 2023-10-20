import PlaylistTrack from "./PlaylistTrack";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

const PlaylistAside = (props) => {
  const songs = props.playlist.songs;
  const likeSwitch = props.func.likeSwitch;
  const songSwitch = props.func.songSwitch;
  return (
    <div
      className={`${props.isAsideActive ? "md:w-1/5 w-screen" : "md:w-20 w-0"} flex flex-col flex-1 z-40 right-0 bottom-0 top-0 fixed h-screen backdrop-blur-lg bg-slate-900/60 overflow-y-auto`}
    >
      <div className="w-full right-0 m-0">
        {/* <div
          className={`md:hidden py-2 px-2 lg:p-2 w-screen md:w-full text-white flex flex-row justify-between h-20 items-center hover:opacity-90 md:hover:scale-105 transition delay-150 duration-300 ease-linear`}
        >
          <button onClick={() => props.func.asideSwitch()}>
            <IconContext.Provider
              value={{
                size: "3rem",
                color: "#27AE60",
              }}
            >
              <BiMenu />
            </IconContext.Provider>
          </button>
        </div> */}
        <div
          className={`justify-center ${props.isAsideActive ? "md:justify-end" : "md:justify-center"} py-2 px-2 lg:p-2 w-screen md:w-full text-white md:flex hidden md:flex-row  h-20 items-center hover:opacity-80 transition delay-150 duration-300 ease-linear`}
        >
          <button
            className={`${props.isAsideActive ? "pr-2" : ""}`}
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
        {songs.map((song, index) => (
          <PlaylistTrack
            key={index}
            songOngoing={props.songCurrent}
            isLiked={song.isLiked}
            song={song}
            isAsideActive={props.isAsideActive}
            func={{likeSwitch, songSwitch}}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistAside;
