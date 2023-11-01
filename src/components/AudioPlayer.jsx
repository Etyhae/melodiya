import React, {useState, useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import "../styles/progress-bar.css";

const AudioPlayer = ({ songURL }) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const isLoop = useSelector((state) => state.isPlayLoop.value);

  const audioRef = useRef();
  const progressBarRef = useRef();

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    console.log(progressBarRef.current.value);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="flex flex-row justify-center content-center items-center ">
      <audio src={songURL} ref={audioRef} onLoadedMetadata={onLoadedMetadata} loop={isLoop} />
      <div className="text-white flex flex-row justify-around">
        <span className="time current p-2">{formatTime(timeProgress)}</span>
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
          className="w-full"
        />
        <span className="time p-2">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
