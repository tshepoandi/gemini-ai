const SongLayout = (props) => {
  return (
    <div >
      <div className="card w-50 mx-4 bg-base-100 shadow-2xl image-full">
        <figure><img src={props.thumbnail} alt="Song thumbnail" /></figure>
        <div className="card-body text-start">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.artist}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Song Knowledge</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SongLayout
