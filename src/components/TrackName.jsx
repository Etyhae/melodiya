const TrackName = ({label, authors, underline, sizeLarge, sizeSmall}) => {
  return (
    <>
      <div className="flex flex-col">
        <p
          className={`text-${sizeLarge} text-white font-semibold ${underline ? "underline decoration-solid underline-offset-8" : ""} leading-loose`}
        >
          {label}
        </p>
        <p className={`text-${sizeSmall} text-slate-400 pt-1`}>
          {authors}
        </p>
      </div>
    </>
  );
};

export default TrackName;
