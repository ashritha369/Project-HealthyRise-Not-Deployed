import SingleItemTask from "./SingleItemOfTask";
function Favorite() {
  return (
    <>
      <div id="favorite-container">
        <h1 className="task-heading">FAVORITES</h1>
        <h2 className="sub-task-heading">Why discipline is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/1Ms-4IaYywk"
          Description="Self-discipline allows you to stay focused on your goals. It enables you to stay in control of yourself and of your reaction to any situation. Self-discipline is like a muscle: the more you train it, the stronger you become. Lack of self-discipline can cause low self-esteem."
          SubTitle="DISCIPLINE IS GREATER THAN MOTIVATION"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/jPCVf6ac73k"
          Description="Consistency is the critical driver for success. Being consistent means dedicating yourself to your goals and staying focused on the things and activities to achieve your goals. Consistency requires a long-term commitment from you and involves sustained effort in doing actions repeatedly until you achieve your goals."
          SubTitle="CONSISTENCY MATTERS!"
        />
      </div>
    </>
  );
}
export default Favorite;
