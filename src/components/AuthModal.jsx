import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { switchVisible } from "../reducers/isAuthVisibleReducer";
import Button from "./Button";
import { BiLogoGoogle, BiLogoTelegram, BiLogoVk } from "react-icons/bi";

const AuthModal = () => {
  const isAuthVisible = useSelector((state) => state.isAuthVisible.value);
  const dispatch = useDispatch();

  return (
    <ReactModal
      isOpen={isAuthVisible}
      onRequestClose={() => dispatch(switchVisible())}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "24rem",
          height: "60%",
          borderRadius: "50px",
          border: "4px solid #27ae60",
        },
        overlay: { backgroundColor: "#ffffff3e", backdropFilter: "blur(5px)" },
      }}
      ariaHideApp={false}
    >
      <div className="w-full h-full flex flex-col justify-start text-center content-center p-8">
        <h1 className="pb-8 text-xl font-medium">Авторизация</h1>
        <form>
          <input
            name="login"
            type="email"
            className="border-2 border-slate-400 rounded-xl w-full h-12 p-2 mb-4"
            placeholder="Почта"
          ></input>
          <input
            name="password"
            type="password"
            className="border-2 border-slate-400 rounded-xl w-full h-12 p-2 mb-8"
            placeholder="Пароль"
          ></input>
          <div className=" content-center font-medium text-base">
            <Button
              onClick={() => dispatch(switchVisible())}
              size="2.5rem"
              color="black"
              type={"Войти"}
              className="border-2 text-white bg-slate-800 border-slate-800 rounded-xl w-full h-12 p-2 mb-4"
            />
            <Button
              onClick={() => dispatch(switchVisible())}
              size="2.5rem"
              color="black"
              type={"Зарегистрироваться"}
              className="border-2 border-slate-600 rounded-xl w-full h-12 p-2 mb-4"
            />
          </div>
        </form>
        <div className="flex flex-col bottom-0 mt-auto">
          <p className="text-sm">Войти с помощью</p>
          <div className="flex flex-row justify-center content-center">
            <Button size="3rem" color="#27ae60" type={<BiLogoGoogle />} />
            <Button size="3rem" color="#27ae60" type={<BiLogoVk />} />
            <Button size="3rem" color="#27ae60" type={<BiLogoTelegram />} />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default AuthModal;
