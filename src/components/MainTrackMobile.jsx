import { togglePlay } from "../reducers/isPlayingReducer";
import { togglePlaylistAside } from "../reducers/isPlaylistAsideVisibleReducer";
import { truncateLabel } from "../utils/truncateLabel";
import Button from "./Button";
import TrackName from "./TrackName";
import { useSelector, useDispatch } from "react-redux";

const MainTrackMobile = ({song}) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  const dispatch = useDispatch();

    return (
        <>
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
        <div className="flex flex-col items-center justify-center h-3/4 ">
          <button onClick={() => dispatch(togglePlay())}>
            <img
              className={`${
                isPlaying ? "" : "anim-paused"
              } w-[18rem] h-[18rem] md:w-[25rem] md:h-[25rem] rounded-full song-cover`}
              src={song.cover}
              alt={song.label}
            />
          </button>

          <div className="text-center pt-2">
            <TrackName
              label={truncateLabel(song.label)}
              authors={song.authors}
              sizeLarge="2xl"
              sizeSmall="md"
              underline={true}
            />
          </div>
        </div>
      </>
    )
}

export default MainTrackMobile;