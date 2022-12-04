import Meditation from "./Meditation";

function SingleItemTask(props) {
  return (
    <>
      <div className="single-item-sub-container" id="single-item">
        <h1 className="task-heading">Single Menu Item Heading Here</h1>
        <h2 className="sub-task-heading">Why this item is important?</h2>
        <div className="description-and-media">
          <div className="description">
            <p className="description-paragraph">description-paragraph</p>
          </div>
          <div className="media">
            <iframe
              className="responsive-iframe"
              width="100%"
              height="300"
              src={props.youtubeUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleItemTask;
