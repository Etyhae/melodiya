import { togglePlay } from "../reducers/isPlayingReducer";
import { togglePlaylistAside } from "../reducers/isPlaylistAsideVisibleReducer";
import { truncateLabel } from "../utils/truncateLabel";
import Button from "./Button";
import TrackName from "./TrackName";
import { useSwipeable } from "react-swipeable";
import { useSelector, useDispatch } from "react-redux";
import MainTrackMobile from "./MainTrackMobile";
import TrackMainNext from "./TrackMainNext";
import { skipSong } from "../reducers/currentSongReducer";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useCallback } from "react";


const SongMainInfo = (props) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  const currentSong = useSelector((state) => state.currentSong.value);
  const nextSong =
    currentPlaylist.songs[currentPlaylist.songs.indexOf(currentSong) + 1];
  const previousSong =
    currentPlaylist.songs[currentPlaylist.songs.indexOf(currentSong) - 1];

  const isFirstSong = currentPlaylist.songs.indexOf(currentSong) === 0;
  const isLastSong =
    currentPlaylist.songs.indexOf(currentSong) ===
    currentPlaylist.songs.length - 1;

    const x = useMotionValue(0);
  const config = {
    delta: 0, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: 450, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };

  const swipeHandlers = useSwipeable({
    onSwiping: useCallback(
      (e) => {
        x.set(e.deltaX);
      },
      [x]
    ),
    onSwipedRight: () => {
      const prevSongIndex = currentPlaylist.songs.indexOf(currentSong) - 1;
      if (prevSongIndex >= 0 )  { dispatch(skipSong(currentPlaylist.songs[prevSongIndex]))};
      x.set(0);
    },

    onSwipedLeft: () => {
      const nextSongIndex = currentPlaylist.songs.indexOf(currentSong) + 1;
      if (nextSongIndex < currentPlaylist.songs.length) {
        dispatch(skipSong(currentPlaylist.songs[nextSongIndex]));
      }
      x.set(0);
    },
    onTouchEndOrOnMouseUp: () => {
      x.set(0);
    },
    ...config
  });

  const dispatch = useDispatch();
  return (
    <div
      className="bg-no-repeat bg-cover bg-fixed bg-center w-screen h-[90vh] md:h-screen"
      style={{ backgroundImage: `url(${currentSong.cover})` }}
    >
      <div className="flex-col h-full backdrop-blur-md backdrop-brightness-50 py-4 hidden sm:flex">
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
              src={currentSong.cover}
              alt={currentSong.label}
            />
          </button>

          <div className="text-center pt-2">
            <TrackName
              label={truncateLabel(currentSong.label)}
              authors={currentSong.authors}
              sizeLarge="2xl"
              sizeSmall="md"
              underline={true}
            />
          </div>
        </div>
      </div>
      <motion.div 
        key={currentSong.id}
        style={{x}}  
        {...swipeHandlers}
        className="flex flex-col h-full backdrop-blur-md backdrop-brightness-50 py-4 sm:hidden"
      >
        <MainTrackMobile swipeHandlers={swipeHandlers} song={currentSong} />
      </motion.div>
    </div>
  );
};

export default SongMainInfo;
