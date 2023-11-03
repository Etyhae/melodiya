import { useSelector } from "react-redux";
import AsideSearch from "./AsideSearch";
import AsideLiked from "./AsideLiked";

const UserAsideAdvanced = () => {
    const isUserAsideActive = useSelector((state) => state.isUserAsideActive.value);
    const userAsideState = useSelector((state) => state.userAsideState.value);

    const switchUserAside = () => {
        switch (userAsideState) {
            case "searchAside": return <AsideSearch />;
            case "likedAside": return <AsideLiked />;
        }
    }

    return (
        <div className={`fixed ${
        isUserAsideActive
          ? "flex w-screen md:fixed md:w-[20rem] z-40"
          : "hidden z-0"
      } bg-slate-800/80 h-screen md:h-[94vh] w-screen backdrop-blur-md flex-col items-center justify-center content-center sm:left-16`}>

        {switchUserAside()}
      </div>
        
    )
}

export default UserAsideAdvanced;