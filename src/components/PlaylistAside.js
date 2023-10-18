import PlaylistTrack from "./PlaylistTrack";

const PlaylistAside = (props) => {
    const songs = props.playlist.songs;
  return (
    <aside
      className={`${
        props.isHidden ? "hidden" : "block"
      } lg:block flex flex-col flex-1 z-40 right-0 bottom-0 top-0 fixed h-screen w-screen md:w-1/5 backdrop-blur-lg bg-slate-900/60 transition delay-150 duration-300 ease-linear`}
    >
      <div className="w-screen md:w-full right-0 m-0">
        {songs.map((song, index) => (
          <PlaylistTrack key={index} songOngoing={props.songCurrent} song={song} songToggle={props.songSwitch} />
        ))}
      </div>
    </aside>
  );
};

export default PlaylistAside;
