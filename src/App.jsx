import "./App.css";
import PlaylistAsideMenu from "./components/PlaylistAsideMenu";
import UserAsideMenu from "./components/UserAsideMenu";
import SongMainInfo from "./components/SongMainInfo";
import PlayerControls from "./components/PlayerControls";
import SuggestPlaylistsSection from "./components/SuggestPlaylistsSection";
import AuthModal from "./components/AuthModal";
import UserAsideAdvanced from "./components/UserAsideAdvanced";
import PlaylistModal from "./components/PlaylistModal";

function App() {
  return (
    <div className=" pb-32 md:pb-12">
      <div className="w-screen flex flex-row">
        <UserAsideMenu className="hidden md:flex" />
        <UserAsideAdvanced />
        <SongMainInfo />
        <PlaylistAsideMenu />
      </div>
      <SuggestPlaylistsSection />
      <AuthModal />
      <PlayerControls />
      <PlaylistModal />
    </div>
  );
}

export default App;
