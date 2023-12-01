import { AGGRESSIVEplaylist, PHONKplaylist } from "../playlistWithSongs";
import Playlist from "./Playlist";
import { useDispatch } from "react-redux";
import { togglePlaylistInfo } from "../reducers/isPlaylistInfoVisibleReducer";

const SuggestPlaylistsSection = () => {
  const suggestedPlaylists = [AGGRESSIVEplaylist, PHONKplaylist];

  const dispatch = useDispatch();
  return (
    <>
      <div className="w-screen h-48 md:mb-20 flex flex-row justify-center gap-x-4 overflow-x-auto px-4">
        {suggestedPlaylists.map((playlist, index) => (
          <Playlist
            playlist={playlist}
            onClick={() => {
              dispatch(togglePlaylistInfo(playlist));
            }}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default SuggestPlaylistsSection;
