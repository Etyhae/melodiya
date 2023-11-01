const TrackName = (props) => {
  const screenW = window.screen.width;
  const symbolsMax = Math.round(screenW / 110); 

  const cutLabel = (label) => {
    return label.length > symbolsMax ? label.slice(0, symbolsMax).trim() + "..." : label;
  };
  return (
    <>
      <div className="flex flex-col">
        <p
          className={`text-${props.sizeLarge} text-white font-semibold ${props.underline ? "underline decoration-solid underline-offset-8" : ""} leading-loose`}
        >
          {cutLabel(props.song.label)}
        </p>
        <p className={`text-${props.sizeSmall} text-slate-400`}>
          {props.song.authors}
        </p>
      </div>
    </>
  );
};

export default TrackName;
