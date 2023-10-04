import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";

const Playlist = ({ song }) => {
  const [songLiked, setSongLiked] = useState(song.liked);
  const [songActive, setSongActive] = useState(song.active);

  function likeHandlerClick() {
    song.liked = !song.liked;
    setSongLiked(!songLiked);
  }

  function songHandlerClick() {
    song.active = !song.active;
    setSongActive(!songActive);
  }

  return (
    <button
      className={`${songActive ? "bg-slate-400/30" : ""} py-2 px-4 lg:p-2 w-screen md:w-full text-white flex flex-row justify-between h-full items-center hover:opacity-90 md:hover:scale-105 transition delay-150 duration-300 ease-linear`}
      onClick={songHandlerClick}
    >
        <img
          className="h-[6vh] w-[6vh] object-cover rounded-md"
          src={song.coverURL}
          alt="coverImg"
        />
		<div className="text-center">
			<p className="text-base font-medium text-white">{song.label}</p>
			<p className="text-sm text-slate-400">{song.authors}</p>
		</div>
        <button className="playButton" onClick={likeHandlerClick}>
          <IconContext.Provider value={{ size: "1.5rem", color: "#27AE60" }}>
            {songLiked ? <BiSolidHeart /> : <BiHeart />}
          </IconContext.Provider>
        </button>
    </button>
  );
};

export default Playlist;
