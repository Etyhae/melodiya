import {
  BiBookHeart,
  BiDotsVerticalRounded,
  BiHeart,
  BiMenu,
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

const PlayerControls = () => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const currentSong = useSelector((state) => state.currentSong.value);
  const currentPlaylist = useSelector((state) => state.currentPlaylist.value);
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
      <div className="fixed z-50 bottom-0 bg-black flex flex-col md:flex-row py-2 px-4 gap-y-2 md:gap-y-0 md:px-20 w-screen h-32 md:h-16 md:items-center gap-x-12">
        <div className="flex flex-row px-2">
          <div className="flex gap-x-2 items-center">
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
              size="2rem"
              type={currentSong.liked ? <BiSolidHeart /> : <BiHeart />}
              onClick={() => dispatch(setLiked())}
              className="flex md:hidden pr-6"
            />
            <Button
              color={isLastSong ? "a4a4a4" : "#27ae60"}
              size="3rem"
              type={<BiSkipNext />}
              disabled={isLastSong ? 1 : 0}
              onClick={() => skipSongClick(1)}
              className="hidden md:flex"
            />
            <div className="text-left flex gap-x-4 justify-start">
              <img
                className="rounded-md w-12 h-12"
                src={currentSong.cover}
                alt={currentSong.label}
              />
              <TrackName
                song={currentSong}
                sizeLarge="md"
                sizeSmall="sm"
                underline={true}
              />
            </div>
          </div>
          <div className="ml-auto flex md:hidden flex-row items-center">
            <Button
              color="27ae60"
              size="2rem"
              type={<BiVolumeFull />}
              className="hidden md:flex"
            />
            <Button
              color="27ae60"
              size="2rem"
              type={<BiDotsVerticalRounded />}
              className="hidden md:flex"
            />
            <Button
              color="white"
              size="2rem"
              type={currentSong.liked ? <BiSolidHeart /> : <BiHeart />}
              onClick={() => dispatch(setLiked())}
              className="hidden md:flex"
            />
            <Button
              color="#27ae60"
              size="3rem"
              type={isPlaying ? <BiPause /> : <BiPlay />}
              onClick={() => dispatch(togglePlay())}
              className="flex md:hidden"
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row ml-auto md:m-0 md:pl-4 gap-x-4">
          <Button
            color="white"
            size="1.5rem"
            type={currentSong.liked ? <BiSolidHeart /> : <BiHeart />}
            onClick={() => dispatch(setLiked())}
          />
          <Button color="white" size="1.5rem" type={<BiRepeat />} />
        </div>
        <div className="ml-auto hidden md:flex flex-row gap-x-4 pr-4">
          <Button color="27ae60" size="2rem" type={<BiVolumeFull />} />
          <Button color="27ae60" size="2rem" type={<BiDotsVerticalRounded />} />
        </div>
        <div className="md:hidden flex flex-row justify-around items-center content-center h-full py-2">
          <Button color="a4a4a4" size="2.5rem" type={<BiSolidUserCircle />} />
          <Button color="a4a4a4" size="2.5rem" type={<BiSearch />} />
          <Button color="a4a4a4" size="2.5rem" type={<BiBookHeart />} />
        </div>
      </div>
    </>
  );
};

export default PlayerControls;
