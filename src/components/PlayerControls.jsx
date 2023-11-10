import {
  BiBookHeart,
  BiDotsVerticalRounded,
  BiHeart,
  BiPause,
  BiPlay,
  BiRepeat,
  BiSearch,
  BiSkipNext,
  BiSkipPrevious,
  BiSolidHeart,
  BiSolidUserCircle,
  BiVolumeFull,
} from "react-icons/bi";
import Button from "./Button";
import TrackName from "./TrackName";
import { useDispatch, useSelector } from "react-redux";
import { togglePlay } from "../reducers/isPlayingReducer";
import { setLiked, skipSong } from "../reducers/currentSongReducer";
import AudioPlayer from "./AudioPlayer";
import { toggleLoop } from "../reducers/isPlayLoopReducer";
import { truncateLabel } from "../utils/truncateLabel";
import { switchVisible } from "../reducers/isAuthVisibleReducer";
import { toggleAsideLiked, toggleAsideSearch } from "../reducers/userAsideStateReducer";
import { toggleUserAside } from "../reducers/isUserAsideActiveReducer";

const PlayerControls = () => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const currentSong = useSelector((state) => state.currentSong.value);
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
  const isLoop = useSelector((state) => state.isPlayLoop.value);
  const userAsideState = useSelector((state) => state.userAsideState.value);
  const isUserAsideActive = useSelector((state) => state.isUserAsideActive.value);

  const toggleAsideTo = (menu) => {
    switch (menu) {
      case "likedAside":  if ( menu != userAsideState && isUserAsideActive ) { dispatch(toggleAsideLiked()); break; } else { dispatch(toggleAsideLiked()); dispatch(toggleUserAside()); break; }
      case "searchAside": if ( menu != userAsideState && isUserAsideActive ) { dispatch(toggleAsideSearch()); break; } else { dispatch(toggleAsideSearch()); dispatch(toggleUserAside()); break; }
    }
  };

  const dispatch = useDispatch();

  const isFirstSong = currentPlaylist.songs.indexOf(currentSong) === 0;
  const isLastSong =
    currentPlaylist.songs.indexOf(currentSong) ===
    currentPlaylist.songs.length - 1;

  const skipSongClick = (way) => {
    dispatch(
      skipSong(
        currentPlaylist.songs[currentPlaylist.songs.indexOf(currentSong) + way]
      )
    );
  };

  return (
    <>
      <div className="fixed z-50 bottom-0 bg-black flex flex-col xl:flex-row py-2 px-4 2xl:px-24 gap-y-2 md:gap-y-0 w-screen h-28 xl:h-16 md:items-center content-center">
        <div className="flex flex-row md:px-2 items-center">
          <div className="flex items-center gap-x-2">
            <Button
              color={isFirstSong ? "#a4a4a4" : "#27ae60"}
              size="3rem"
              type={<BiSkipPrevious />}
              disabled={isFirstSong ? 1 : 0}
              onClick={() => skipSongClick(-1)}
              className="hidden md:flex"
            />
            <Button
              color="#27ae60"
              size="3rem"
              type={isPlaying ? <BiPause /> : <BiPlay />}
              onClick={() => dispatch(togglePlay())}
              className="hidden md:flex"
            />
            <Button
              color="white"
              size="1.8rem"
              type={currentSong.liked ? <BiSolidHeart /> : <BiHeart />}
              onClick={() => dispatch(setLiked())}
              className="flex md:hidden pr-2 sm:pr-6"
            />
            <Button
              color={isLastSong ? "a4a4a4" : "#27ae60"}
              size="3rem"
              type={<BiSkipNext />}
              disabled={isLastSong ? 1 : 0}
              onClick={() => skipSongClick(1)}
              className="hidden md:flex"
            />
            <div className="flex gap-x-4 justify-start text-left w-64 md:pr-8">
              <img
                className="rounded-md w-12 h-12 flex self-center"
                src={currentSong.cover}
                alt={currentSong.label}
              />
              <TrackName
                label={truncateLabel(currentSong.label, 20)}
                authors={currentSong.authors}
                sizeLarge="sm"
                sizeSmall="xs"
                underline={true}
              />
            </div>
          </div>
          <div className="ml-auto flex md:hidden flex-row items-center">
            <Button
              color="27ae60"
              size="2rem"
              type={<BiVolumeFull />}
              className="hidden lg:flex"
            />
            <Button
              color="27ae60"
              size="2rem"
              type={<BiDotsVerticalRounded />}
              className="hidden lg:flex"
            />
            <Button
              color="white"
              size="2rem"
              type={currentSong.liked ? <BiSolidHeart /> : <BiHeart />}
              onClick={() => dispatch(setLiked())}
              className="hidden lg:flex"
            />
            <Button
              color="#27ae60"
              size="3rem"
              type={isPlaying ? <BiPause /> : <BiPlay />}
              onClick={() => dispatch(togglePlay())}
              className="flex justify-self-end lg:hidden"
            />
          </div>
          <div className="hidden md:flex flex-row gap-x-4">
            <Button
              color="white"
              size="1.5rem"
              type={
                currentSong.liked ? (
                  <BiSolidHeart color="27ae60" />
                ) : (
                  <BiHeart />
                )
              }
              onClick={() => dispatch(setLiked())}
            />
            <Button
              color={isLoop ? "#27ae60" : "#FFFFFF"}
              size="1.5rem"
              type={<BiRepeat />}
              onClick={() => dispatch(toggleLoop())}
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row md:m-0 gap-x-4 w-full justify-center">
          <AudioPlayer songURL={currentSong.songURL} />
        </div>
        <div className="ml-auto hidden xl:flex flex-row gap-x-4 pr-4">
          <Button color="27ae60" size="2rem" type={<BiVolumeFull />} />
          <Button color="27ae60" size="2rem" type={<BiDotsVerticalRounded />} />
        </div>
        <div className="md:hidden flex flex-row justify-evenly items-center content-center h-full py-2">
          <Button
            color="a4a4a4"
            size="2rem"
            type={<BiSolidUserCircle />}
            onClick={() => dispatch(switchVisible())}
          />
          <Button color="a4a4a4" size="2rem" type={<BiSearch />} onClick={() => toggleAsideTo("searchAside")} />
          <Button color="a4a4a4" size="2rem" type={<BiBookHeart />} onClick={() => toggleAsideTo("likedAside")} />
        </div>
      </div>
    </>
  );
};

export default PlayerControls;
