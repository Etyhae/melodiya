import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { togglePlaylistInfo } from "../reducers/isPlaylistInfoVisibleReducer";
import Track from "./Track";
import { switchSong } from "../reducers/currentSongReducer";
import { togglePlay } from "../reducers/isPlayingReducer";
import Button from "./Button";
import { BiPlayCircle } from "react-icons/bi";
import { switchPlaylist } from "../reducers/currentPlaylistReducer";

const PlaylistModal = () => {
  const isPlaylistInfoVisible = useSelector(
    (state) => state.isPlaylistInfoVisible.visible
  );
  const playlistInfo = useSelector(
    (state) => state.isPlaylistInfoVisible.playlist
  );
  const dispatch = useDispatch();

  const songClickHandler = (playlist, song) => {
    dispatch(switchPlaylist(playlist));
    dispatch(switchSong(song));
    dispatch(togglePlay(true));
  };

  const playlistClickHandler = () => {
    dispatch(switchPlaylist(playlistInfo));
    dispatch(switchSong(playlistInfo.songs[0]));
    dispatch(togglePlay(true));
    dispatch(togglePlaylistInfo());
  };
  if (playlistInfo) {
    return (
      <ReactModal
        isOpen={isPlaylistInfoVisible}
        onRequestClose={() => dispatch(togglePlaylistInfo())}
        style={{
          content: {
            top: "40%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "70vh",
            borderRadius: "10px",
            border: "4px solid #27ae60",
            backgroundColor: "rgb(15 23 42 / 0.9)",
          },
          overlay: {
            backgroundColor: "rgb(15 23 42 / 0.6)",
            backdropFilter: "blur(5px)",
          },
        }}
        ariaHideApp={false}
      >
        <div className="flex flex-col md:flex-row justify-between pb-8 overflow-hidden">
          <div className="flex flex-row h-full">
            <img src={playlistInfo.cover} className="w-24 h-24 rounded" />
            <div className="flex flex-col pl-4">
              <p className="text-white text-lg font-medium">
                {playlistInfo.playlistName}
              </p>
              <p className="text-slate-500 text-md">{playlistInfo.compiler}</p>
            </div>
          </div>
          <div className="flex flex-col pt-4 md:pt-0 gap-y-4">
            <p className="text-white text-sm">Прослушиваний: 12653</p>
            <Button
              color="27ae60"
              size="2.5rem"
              type={<BiPlayCircle />}
              className="hidden md:block"
              onClick={playlistClickHandler}
            />
            <div className="w-full h-12 md:hidden bg-[#27ae60] rounded flex justify-center">
              <Button
                color="white"
                size="2.5rem"
                type={<BiPlayCircle />}
                onClick={playlistClickHandler}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-auto ">
          {playlistInfo.songs.map((song) => (
            <Track
              song={song}
              onClick={() => songClickHandler(playlistInfo, song)}
              key={song.label}
              full={true}
            />
          ))}
        </div>
      </ReactModal>
    );
  } else {
    return null;
  }
};

export default PlaylistModal;
