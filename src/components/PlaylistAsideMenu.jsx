import { BiMenu } from "react-icons/bi";
import Button from "./Button";
import Track from "./Track";
import { useSelector, useDispatch } from 'react-redux'
import { switchSong } from "../reducers/currentSongReducer";

const PlaylistAsideMenu = () => {
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  const dispatch = useDispatch();
    return (
        <>
        <aside className="bg-slate-900/60 h-screen w-screen md:w-[5rem] flex flex-col items-center py-4 right-0">
            <Button color="27ae60" size="2.5rem" type={<BiMenu/>} />
            {currentPlaylist.songs.map((song) => (
              <Track song={song} onClick={() => dispatch(switchSong(song))}/>
            ))}
        </aside>
      </>
    )
}

export default PlaylistAsideMenu;