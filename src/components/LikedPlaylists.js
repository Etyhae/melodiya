const LikedPlaylists = ({ playlistUnit, coverURL, name, onPlaylistClick }) => {
  const handlePlaylistClick = () => {
    onPlaylistClick(playlistUnit);
  };

  return (
    <button
      className={`rounded-md flex flex-col items-center p-2 min-w-fit space-y-2 hover:opacity-90 md:hover:scale-105 transition delay-150 duration-300 ease-linear`}
      onClick={handlePlaylistClick}
    >
      <img src={`${coverURL}`} className="rounded-md h-36 w-36" alt="" />
      <p>{name}</p>
    </button>
  );
};

export default LikedPlaylists;
