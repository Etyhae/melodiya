const LikedPlaylists = ({ playlist }) => {
  return (
    <button
      className={`rounded-md flex flex-col items-center p-2 min-w-fit space-y-2 hover:opacity-90 md:hover:scale-105 transition delay-150 duration-300 ease-linear`}
    >
      <img src={`${playlist.coverURL}`} className="rounded-md h-36 w-36" alt="" />
      <p>{playlist.playlistName}</p>
    </button>
  );
};

export default LikedPlaylists;
