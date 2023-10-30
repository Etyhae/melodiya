import { BiDotsVerticalRounded, BiHeart, BiPause, BiPlay, BiRepeat, BiSkipNext, BiSkipPrevious, BiSolidHeart, BiVolumeFull } from "react-icons/bi"
import Button from "./Button"
import TrackName from "./TrackName"
import {useDispatch, useSelector} from 'react-redux'
import { togglePlay } from "../reducers/isPlayingReducer"
import { setLiked, skipSong } from "../reducers/currentSongReducer"

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
      dispatch(skipSong(currentPlaylist.songs[currentPlaylist.songs.indexOf(currentSong) + way]));
    }

  return (
    <>
      <div className="fixed bottom-0 bg-black flex flex-row px-20 w-screen h-16 items-center gap-x-12">
        <div className="">
          <Button color={isFirstSong ? "#a4a4a4" : "#27ae60"} size="3rem" type={<BiSkipPrevious />} disabled={isFirstSong ? 1 : 0} onClick={() => skipSongClick(-1)} />
          <Button color="#27ae60" size="3rem" type={isPlaying ? <BiPause/> : <BiPlay />} onClick={() => dispatch(togglePlay())}/>
          <Button color={isLastSong ? "a4a4a4" : "#27ae60"} size="3rem" type={<BiSkipNext />} disabled={isLastSong ? 1 : 0} onClick={() => skipSongClick(1)} />
        </div>
        <div className="text-left flex gap-x-4">
            <img className="rounded-md w-12 h-12" src={currentSong.cover} alt={currentSong.label}/>
            <TrackName song={currentSong} sizeLarge="sm" sizeSmall="xs"/>
        </div>
        <div className="flex flex-row gap-x-4">
            <Button color="white" size="1.5rem" type={currentSong.liked ? <BiSolidHeart/> : <BiHeart/>} onClick={() => dispatch(setLiked())}/>
            <Button color="white" size="1.5rem" type={<BiRepeat/>}/>
        </div>
        <div className="ml-auto flex flex-row">
            <Button color="27ae60" size="2rem" type={<BiVolumeFull/>}/>
            <Button color="27ae60" size="2rem" type={<BiDotsVerticalRounded/>} />
        </div>
      </div>
    </>
  );
};

export default PlayerControls;
