import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from 'react';

const Chart = ({ song, place }) => {
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
		<button className={`p-2`} onClick={songHandlerClick}>
				<div className="w-full flex flex-row lg:justify-left justify-left justify-items-center items-center content-between hover:opacity-90 hover:scale-105 transition delay-150 duration-300 ease-linear">
					<div className="min-w-[3rem] text-left text-lg font-medium text-white">
						<p >{place + 1}.</p>
					</div>
					<img
						className="h-[4vh] w-[4vh] sm:w-[4vh] sm:h-[4vh] object-cover mr-2 float-left rounded-md"
						src={song.coverURL}
						alt="coverImg"
					/>
					<div className="flex flex-col justify-items-center items-center justify-center pl-2 pr-[3vw]">
						<p className="text-base text-white">{song.label}</p>
						<p className="text-sm text-slate-400">{song.author}</p>
					</div>
					<div className="text-white text-sm lg:flex justify-center justify-items-center items-center hidden">
						<p>Прослушиваний: <br/>{song.listensCount}</p>
					</div>
				</div>
		</button>
	);
};

export default Chart;
