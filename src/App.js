import React, { useState } from "react";

import "./App.css";
import { Header, CurrentTrack, TrackInfo, Wrapper, Controls } from "./style/styles";
import { BiPauseCircle, BiPlayCircle, BiSkipNext, BiSkipPrevious} from "react-icons/bi";
import H5AudioPlayer from "react-h5-audio-player";

const song = {
  playlistID: 29219219129,
  playlistName: "Metamorphosis 3",
  label: "Metamorphosis 3",
  authors: "zxcursed, INTERWORLD",
  songURL: "1",
  coverURL:
    "https://avatars.yandex.net/get-music-content/8096180/48de10d3.a.25444202-1/800x800",
  active: false,
  liked: false,
  listensCount: 9284821,
};

function App() {
  const [isPlaying, setPause] = useState();

  const playClickHandler = () => {
    setPause(!isPlaying);
    console.log(isPlaying);
  };

  return (
    <div>
      <div className="min-h-screen">
        <div
          className="bg-stone-800 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${song.coverURL})` }}
        >
          {/* Current song */}
          <Header>
            <CurrentTrack>
              <p>Сейчас играет</p>
              <p>{song.playlistName}</p>  
            </CurrentTrack>

            <TrackInfo>
              <img src={song.coverURL}/>
              
              <p>{song.label}</p>
              <p>{song.authors}</p>
            </TrackInfo>
        </Header>
        </div>
      </div>
      <Wrapper>
        <H5AudioPlayer autoPlay src="http://example.com/audio.mp3" onPause={e => playClickHandler} onPlay={e => playClickHandler} />
        <Controls>
          <BiSkipPrevious />
          {isPlaying? <BiPlayCircle /> : <BiPauseCircle />}
          <BiSkipNext />
        </Controls>
      </Wrapper>
        
        
    </div>
  );
}

export default App;
