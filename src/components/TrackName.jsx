const TrackName = (props) => {
  return (
    <>
      <div className="flex flex-col">
        <p
          className={`text-${props.sizeLarge} text-white font-semibold ${props.underline ? "underline decoration-solid underline-offset-8" : ""} leading-loose`}
        >
          {props.song.label}
        </p>
        <p className={`text-${props.sizeSmall} text-slate-400`}>
          {props.song.authors}
        </p>
      </div>
    </>
  );
};

export default TrackName;
