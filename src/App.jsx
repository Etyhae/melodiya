import "./App.css";
import PlaylistAsideMenu from "./components/PlaylistAsideMenu";
import UserAsideMenu from "./components/UserAsideMenu";
import SongMainInfo from "./components/SongMainInfo";
import PlayerControls from "./components/PlayerControls";
import SuggestPlaylistsSection from "./components/SuggestPlaylistsSection";
import AuthModal from "./components/AuthModal";

function App() {
  return (
    <div className="pb-12">
      <div className="w-screen flex flex-row">
        <UserAsideMenu />
        <SongMainInfo />
        <PlaylistAsideMenu />
      </div>
      <SuggestPlaylistsSection />
      <AuthModal/>
      <PlayerControls />
    </div>
  );
}

export default App;
