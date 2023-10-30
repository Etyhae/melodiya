import { IconContext } from "react-icons";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} disabled={props.disabled} className={`hover:opacity-80 ${props.className}`}>
        <IconContext.Provider value={{size: props.size, color: props.color}}>
          {props.type}
        </IconContext.Provider>
      </button>
    </>
  );
};

export default Button;
