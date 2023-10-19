import PlaylistTrack from "./PlaylistTrack";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

const PlaylistAside = (props) => {
  const songs = props.playlist.songs;
  return (
    <aside
      className={`${
        props.isAsideActive ? "w-screen md:block md:w-1/5" : "hidden md:block md:w-[5rem]"
      }   flex flex-col flex-1 z-40 right-0 bottom-0 top-0 fixed h-screen w-screen backdrop-blur-lg bg-slate-900/60 transition delay-150 duration-300 ease-linear overflow-y-auto`}
    >
      <div className="w-full right-0 m-0">
        <div
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
        </div>
        <div
          className={`hidden py-2 px-2 lg:p-2 w-screen md:w-full text-white md:flex flex-row justify-center h-20 items-center hover:opacity-90 md:hover:scale-105 transition delay-150 duration-300 ease-linear`}
        >
          <button onClick={() => props.func.asideSwitch()}>
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
        {songs.map((song, index) => (
          <PlaylistTrack
            key={index}
            songOngoing={props.songCurrent}
            song={song}
            songToggle={props.func.songSwitch}
            asideToggle={props.func.asideSwitch}
            isAsideActive={props.isAsideActive}
          />
        ))}
      </div>
    </aside>
  );
};

export default PlaylistAside;
