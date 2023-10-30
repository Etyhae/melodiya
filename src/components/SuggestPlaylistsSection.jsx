import { playlist, playlist2 } from "../playlistWithSongs";
import Playlist from "./Playlist";
import { useDispatch } from "react-redux";
import { switchPlaylist } from "../reducers/currentPlaylistReducer";

const SuggestPlaylistsSection = () => {
  const suggestedPlaylists = [playlist, playlist2, playlist, playlist2];

  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-64 flex flex-row justify-center gap-x-4">
        {suggestedPlaylists.map((playlist) => (
          <Playlist
            playlist={playlist}
            onClick={() => dispatch(switchPlaylist(playlist))}
          />
        ))}
      </div>
    </>
  );
};

export default SuggestPlaylistsSection;
