import { togglePlay } from "../reducers/isPlayingReducer";
import { togglePlaylistAside } from "../reducers/isPlaylistAsideVisibleReducer";
import Button from "./Button";
import TrackName from "./TrackName";
import { useSelector, useDispatch } from "react-redux";

const SongMainInfo = (props) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  const currentSong = useSelector((state) => state.currentSong.value);
  const dispatch = useDispatch();
  return (
    <div
      className="bg-no-repeat bg-cover bg-fixed bg-center w-screen h-[90vh] md:h-screen"
      style={{ backgroundImage: `url(${currentSong.cover})` }}
    >
      <div className="flex flex-col h-full backdrop-blur-md backdrop-brightness-50 py-4">sent_mail_form_new_en_tplfom
        <div className="flex flex-col text-center">
          <p className="text-sm text-slate-400">Сейчас играет</p>
          <Button
            type={
              <p className="text-base text-white">
                {currentPlaylist.playlistName}
              </p>
            }
            onClick={() => dispatch(togglePlaylistAside())}
          />
          <p className="text-sm text-slate-400">
            by {currentPlaylist.compiler}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <button onClick={() => dispatch(togglePlay())}>
            <img
              className={`${
                isPlaying ? "" : "anim-paused"
              } w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] rounded-full song-cover`}
              src={currentSong.cover}
              alt={currentSong.label}
            />
          </button>

          <div className="text-center pt-2">
            <TrackName
              song={currentSong}
              sizeLarge="2xl"
              sizeSmall="md"
              underline={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongMainInfo;
