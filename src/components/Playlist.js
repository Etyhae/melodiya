import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { IconContext } from "react-icons";

const Playlist = ({ song }) => {
	return (
		<div
			style={{
				"background-color": ` ${
					song.active ? "rgba(203,213,225, 0.2)" : "none"
				}`,
			}}
		>
			<div className="flex flex-row justify-center justify-items-center mr-2 ml-3">
				<img
					className="h-[12vh] w-[12vh] object-cover mr-2 float-left"
					src={song.coverURL}
					alt="coverImg"
				/>
				<div className="flex flex-col justify-items-center items-center justify-center pl-2 pr-20">
					<p className="text-base text-center text-white">{song.label}</p>
					<p className="text-sm text-center text-slate-400">{song.author}</p>
				</div>
				<button className="playButton float-right">
					<IconContext.Provider value={{ size: "1.5rem", color: "#27AE60" }}>
						<BiHeart />
					</IconContext.Provider>
				</button>
			</div>
		</div>
	);
};

export default Playlist;
