import { useSelector, useDispatch } from "react-redux";
import Track from "./Track";
import { switchSong } from "../reducers/currentSongReducer";
import { togglePlay } from "../reducers/isPlayingReducer";
import { switchPlaylist } from "../reducers/currentPlaylistReducer";

const AsideLiked = () => {
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  
  const likedSongsArray = currentPlaylist.songs.filter((song) => song.liked);
  const playlistLiked = {
    playlistID: 903989231,
    playlistName: "Liked",
    compiler: "etyhae",
    cover:
      "https://i.pinimg.com/736x/7f/fc/57/7ffc57ac0d230a7447b16aad13a4a389.jpg",
    songs: likedSongsArray,
  };

  const dispatch = useDispatch();

  const songClickHandler = (playlist, song) => {
    dispatch(switchPlaylist(playlist));
    dispatch(switchSong(song));
    dispatch(togglePlay(true));
  };

  return (
    <>
      <div className="w-full h-full flex flex-col pt-4 pb-8">
        <p className="text-center pb-2 text-white font-medium">
          Понравившиеся треки
        </p>
        <div className="w-full">
          {playlistLiked.songs.map((song) => (
            <Track
              song={song}
              onClick={() => songClickHandler(playlistLiked, song)}
              key={song.label}
              full={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AsideLiked;
