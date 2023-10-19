import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";

const PlaylistTrack = ({ song, songToggle, songOngoing, asideToggle, isAsideActive}) => {
  const [songLiked, setSongLiked] = useState(song.liked);

  const likeHandlerClick = () => {
    setSongLiked(!songLiked);
  }

  const screenW = window.screen.width;

  const songHandlerClick = () => {
    songToggle(song);
    if(screenW < 768 ) {
      asideToggle();
    }
  }

  

  return (
    <button
      className={`${song == songOngoing ? "bg-slate-400/30" : ""} py-2 px-4 lg:p-2 w-screen md:w-full text-white flex flex-row ${isAsideActive ? "justify-between" : "justify-center"} h-20 items-center hover:opacity-90 md:hover:scale-105 transition delay-150 duration-300 ease-linear`}
      onClick={songHandlerClick}
    >
        <img
          className={`h-[6vh] w-[6vh] object-cover rounded-md`}
          src={song.coverURL}
          alt="coverImg"
        />
		<div className={`${isAsideActive ? "" : "hidden"} text-center`}>
			<p className="text-base font-medium text-white">{song.label}</p>
			<p className="text-sm text-slate-400">{song.authors}</p>
		</div>
        <button className={`${isAsideActive ? "" : "hidden"} playButton`} onClick={likeHandlerClick}>
          <IconContext.Provider value={{ size: "1.5rem", color: "#27AE60" }}>
            {songLiked ? <BiSolidHeart /> : <BiHeart />}
          </IconContext.Provider>
        </button>
    </button>
  );
};

export default PlaylistTrack;
