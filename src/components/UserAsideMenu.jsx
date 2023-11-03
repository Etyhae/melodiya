import {
  BiCog,
  BiSolidUserCircle,
  BiSolidPlaylist,
  BiSearchAlt,
  BiSolidBookHeart,
  BiBookHeart,
} from "react-icons/bi"
import Button from "./Button"
import { useDispatch, useSelector } from "react-redux"
import { switchVisible } from "../reducers/isAuthVisibleReducer"
import { toggleUserAside } from "../reducers/isUserAsideActiveReducer"
import {
  toggleAsideSearch,
  toggleAsideLiked,
} from "../reducers/userAsideStateReducer"

const UserAsideMenu = (props) => {
  const isUserAsideActive = useSelector((state) => state.isUserAsideActive.value);
    const userAsideState = useSelector((state) => state.userAsideState.value);
  const dispatch = useDispatch();

  const toggleAsideTo = (menu) => {
    switch (menu) {
      case "likedAside":  if ( menu != userAsideState && isUserAsideActive ) { dispatch(toggleAsideLiked()); break; } else { dispatch(toggleAsideLiked()); dispatch(toggleUserAside()); break; }
      case "searchAside": if ( menu != userAsideState && isUserAsideActive ) { dispatch(toggleAsideSearch()); break; } else { dispatch(toggleAsideSearch()); dispatch(toggleUserAside()); break; }
    }
  };

  return (
    <>
      <aside
        className={`fixed z-40 bg-slate-900/90 h-screen md:h-[94vh] w-screen md:w-[4rem] flex flex-col items-center py-4 gap-y-4 left-0 ${props.className}`}
      >
        <Button
          color="#27ae60"
          size="2.5rem"
          type={<BiSolidUserCircle />}
          onClick={() => dispatch(switchVisible())}
          className={`w-full flex justify-center ${userAsideState === "userAside" && isUserAsideActive ? "bg-slate-400/30" : ""}`}
        />
        <Button color="a4a4a4" size="2.5rem" type={<BiCog />} className={`w-full flex justify-center ${userAsideState === "settingsAside" && isUserAsideActive ? "bg-slate-400/30" : ""}`}/>
        <div className="flex flex-col pt-48 gap-y-8 w-full">
          <Button color="#27ae60" size="2.5rem" type={<BiSolidPlaylist />} className={`w-full flex justify-center ${userAsideState === "playlistsAside" && isUserAsideActive ? "bg-slate-400/30" : ""}`}/>
          <Button
            color="#27ae60"
            size="2.5rem"
            type={<BiSearchAlt />}
            onClick={() => toggleAsideTo("searchAside")}
            className={`w-full flex justify-center ${userAsideState === "searchAside" && isUserAsideActive ? "bg-slate-400/30" : ""}`}
          />
          <Button
            color="#27ae60"
            size="2.5rem"
            type={
              userAsideState === "likedAside" && isUserAsideActive ? (
                <BiSolidBookHeart />
              ) : (
                <BiBookHeart />
              )
            }
            onClick={() => toggleAsideTo("likedAside")}
            className={`w-full flex justify-center ${userAsideState === "likedAside" && isUserAsideActive ? "bg-slate-400/30" : ""}`}
          />
          
        </div>
      </aside>
    </>
  );
};

export default UserAsideMenu;
