import Meditation from "./Meditation";

function SingleItemTask(props) {
  return (
    <>
      <div className="single-item-sub-container" id="single-item">
        <div className="description-and-media">
          <div className="description item">
            <h3 className="description-title">{props.SubTitle}</h3>
            <p className="description-paragraph">{props.Description}</p>
          </div>
          <div className="media item">
            <iframe
              className="responsive-iframe"
              width="100%"
              height="300"
              src={props.youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleItemTask;
