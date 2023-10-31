import {
  BiCog,
  BiSolidUserCircle,
  BiSolidPlaylist,
  BiHeart,
  BiSearchAlt,
} from "react-icons/bi";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { switchVisible } from "../reducers/isAuthVisibleReducer";

const UserAsideMenu = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <aside className={`fixed z-40 bg-slate-900/90 h-screen md:h-[94vh] w-screen md:w-[5rem] flex flex-col items-center py-4 gap-y-4 left-0 ${props.className}`}>
        <Button
          color="#27ae60"
          size="2.5rem"
          type={<BiSolidUserCircle />}
          onClick={() => dispatch(switchVisible())}
        >
        </Button>
        <Button color="a4a4a4" size="2.5rem" type={<BiCog />} />
        <div className="flex flex-col pt-48 gap-y-8">
          <Button color="#27ae60" size="2.5rem" type={<BiSolidPlaylist />} />
          <Button color="#27ae60" size="2.5rem" type={<BiSearchAlt />} />
          <Button color="#27ae60" size="2.5rem" type={<BiHeart />} />
        </div>
      </aside>
    </>
  );
};

export default UserAsideMenu;