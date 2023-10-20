import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";

const PlaylistTrack = (props) => {
  const screenW = window.screen.width;

  const songHandlerClick = () => {
    props.func.songSwitch(props.song);
    if (screenW < 768) {
      props.func.asideToggle();
    }
  };

  const [isLiked, toggleLike] = useState(props.song.liked);
  
  const likeSwitch = (song) => {
    toggleLike(!isLiked);
    props.func.likeSwitch(song.liked);
  }


  return (
    <div
      className={`${
        props.song == props.songOngoing ? "bg-slate-400/30" : ""
      } py-2 px-4 lg:p-2 w-screen md:w-full ${
        props.isAsideActive ? "justify-between" : "justify-center"
      } text-white flex flex-row h-20 items-center hover:opacity-90 transition delay-150 duration-300 ease-linear`}
    >
      <button
        className={`text-left flex justify-between `}
        onClick={songHandlerClick}
      >
        <img
          className={`h-[6vh] w-[6vh] object-cover rounded-md`}
          src={props.song.coverURL}
          alt="coverImg"
        />
        <div className={`${props.isAsideActive ? "" : "hidden"} text-left pl-2`}>
          <p className="text-base font-medium text-white">{props.song.label}</p>
          <p className="text-sm text-slate-400">{props.song.authors}</p>
        </div>
      </button>

      <button
        className={`${props.isAsideActive ? "" : "hidden"} playButton`}
        onClick={() => likeSwitch(props.song)}
      >
        <IconContext.Provider value={{ size: "1.5rem", color: "#27AE60" }}>
          {isLiked ? <BiSolidHeart /> : <BiHeart />}
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default PlaylistTrack;
