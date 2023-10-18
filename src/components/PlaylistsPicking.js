import LikedPlaylists from "./LikedPlaylists";

const PlaylistsPicking = (props) => {
  const listPlaylists = props.listPlaylists;
  return (
    <section
      className="grid grid-rows-1 text-white p-4"
      style={{ backgroundColor: props.BGcolor + "55" }}
    >
      <p className="font-medium text-center text-xl pb-2">Ваши плейлисты</p>
      <div className="flex flex-row overflow-x-auto overflow-y-hidden md:justify-center">
        {listPlaylists.map((playlist) => (
          <LikedPlaylists
            playlistUnit={playlist}
            coverURL={playlist.coverURL}
            name={playlist.playlistName}
            onPlaylistClick={props.onPlaylistSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default PlaylistsPicking;
