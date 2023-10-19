import { motion } from "framer-motion";

const MainTrack = (props) => {
  return (
    <div className="min-h-screen">
      {/* <div
        className="bg-stone-800 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${props.coverURL})` }}
      > */}
      <motion.div
        className="bg-stone-800 bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url(${props.coverURL})` }}
      >
        {/* Current song */}
        <header className={`h-screen flex flex-col items-center justify-center content-center text-base text-white backdrop-blur-lg backdrop-brightness-50 relative ${props.isAsideActive ? "md:pr-[20%]" : ""}`}>
          <div className={`absolute inset-x-0 top-0 content-start mt-2 ${props.isAsideActive ? "md:pr-[20%]" : ""}`}>
            <p className="text-sm text-center text-slate-400">Сейчас играет</p>
            <p className="text-base text-center">{props.playlistName}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white font-mono mt-4">
              <img
                src={props.coverURL}
                className={`${
                  props.isPlaying ? "paused" : ""
                } song-cover h-[40vh] w-[40vh] object-cover pointer-events-none mb-4 rounded-full`}
                alt="logo"
              />
            <p className="text-2xl font-semibold underline decoration-solid underline-offset-8 leading-loose">
              {props.label}
            </p>
            <p className="text-xl text-slate-400">{props.authors}</p>
          </div>
        </header>
      </motion.div>
    </div>
  );
};

export default MainTrack;
