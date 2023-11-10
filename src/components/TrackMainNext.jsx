const TrackMainNext = ({nextTrack}) => {
    return (
        <>
        <div className="absolute -mr-[50%] right-0 flex">
            <img src={nextTrack.cover} alt={nextTrack.label} className=" rounded-full w-20 h-20" />
        </div>
        </>
    )
}

export default TrackMainNext;