import { BiMenu } from "react-icons/bi";
import Button from "./Button";
import Track from "./Track";
import { useSelector, useDispatch } from "react-redux";
import { switchSong } from "../reducers/currentSongReducer";
import { togglePlaylistAside } from "../reducers/isPlaylistAsideVisibleReducer";
import { togglePlay } from "../reducers/isPlayingReducer";

const PlaylistAsideMenu = (props) => {
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  const isPlaylistAsideVisible = useSelector(
    (state) => state.isPlaylistAsideVisible.value
  );
  const dispatch = useDispatch();

  const songClickHandler = (song) => {
    dispatch(switchSong(song));
    dispatch(togglePlay(true));
  };
  return (
    <aside
      className={`fixed z-40 ${
        isPlaylistAsideVisible
          ? "flex md:fixed md:w-[20rem]"
          : "hidden md:flex md:w-[5rem]"
      } justify-start bg-slate-900/90 h-screen md:h-[94vh] w-screen backdrop-blur-md flex-col items-center right-0 ${
        props.className
      }`}
    >
      <Button
        color="27ae60"
        size="3rem"
        type={<BiMenu />}
        className="flex self-end p-2 pr-4"
        onClick={() => dispatch(togglePlaylistAside())}
      />
      {currentPlaylist.songs.map((song) => (
        <Track song={song} onClick={() => songClickHandler(song)} key={song.label}/>
      ))}
    </aside>
  );
};

export default PlaylistAsideMenu;
