import { useState } from "react";

const Chart = ({ song, place }) => {
  const [songActive, setSongActive] = useState(song.active);

  function songHandlerClick() {
    song.active = !song.active;
    setSongActive(!songActive);
  }

  const zeroLength = 2;

  return (
      <button className={`p-2 lg:px-[20%] justify-items-stretch h-full text-white flex flex-row gap-4 items-center hover:opacity-90 md:hover:scale-105 transition delay-150 duration-300 ease-linear`} onClick={songHandlerClick}>
            <p className="mr-2">{String(place + 1).padStart(zeroLength, '0')}</p>
          <img
            className="h-[4vh] w-[4vh] object-cover float-left rounded-md hidden lg:flex"
            src={song.coverURL}
            alt="coverImg"
          />
          <div className="flex flex-col text-left">
            <p className="text-base text-white">{song.label}</p>
            <p className="text-sm text-slate-400">{song.authors}</p>
          </div>
      </button>
  );
};

export default Chart;
