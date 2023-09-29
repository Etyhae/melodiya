import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from 'react';

const Chart = ({ song }) => {
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
		<button className={`${songActive ? "bg-slate-400/30" : ""} w-[100%]`} onClick={songHandlerClick}>
			<div className="w-full flex flex-row lg:justify-left justify-left lg:px-8 px-6 justify-items-center items-center content-between hover:opacity-90 hover:scale-105 transition delay-150 duration-300 ease-linear">
				<img
					className="h-[4vh] w-[4vh] sm:w-[4vh] sm:h-[4vh] object-cover mr-2 float-left rounded-md"
					src={song.coverURL}
					alt="coverImg"
				/>
				<div className="flex flex-col justify-items-center items-center justify-center pl-2 pr-20">
					<p className="text-base text-white">{song.label}</p>
					<p className="text-sm text-slate-400">{song.author}</p>
				</div>
                <div className="text-white text-sm flex justify-center justify-items-center items-center">
                    <p>Прослушиваний: <br/>100000</p>
                </div>
			</div>
            
		</button>
	);
};

export default Chart;
