const TrackName = ({ label, authors, underline, sizeLarge, sizeSmall }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <p
          className={`text-${sizeLarge} text-white font-semibold ${
            underline ? "underline decoration-solid underline-offset-8" : ""
          } leading-loose whitespace-nowrap overflow-hidden overflow-ellipsis`}
        >
          {label}
        </p>
        <p
          className={`text-${sizeSmall} text-slate-400 pt-1 whitespace-nowrap overflow-hidden overflow-ellipsis`}
        >
          {authors}
        </p>
      </div>
    </>
  );
};

export default TrackName;
