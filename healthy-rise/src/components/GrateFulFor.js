import SingleItemTask from "./SingleItemOfTask";
function GrateFulFor() {
  return (
    <>
      <div id="grateful-container" className="inner-div">
        <h1 className="task-heading">GRATEFUL FOR</h1>
        <h2 className="sub-task-heading">Why grateful for is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/0DlCJOJmF94"
          Description="Gratitude helps people feel more positive emotions, relish good experiences, improve their health, deal with adversity, and build strong relationships."
          SubTitle="This Song Will Make You Feel GRATEFUL FOR YOUR LIFE 💚"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/uMm2CKeLh-k"
          Description="Gratitude is a beautiful way of enriching our lives. It refers to the feeling and attitude of appreciation and thankfulness for the good which we receive in life. It has been proven scientifically that when we express our gratefulness to other people, we feel happier and calmer."
          SubTitle="I Am Grateful for It All | Gratitude Affirmations | 21 Day Challenge"
        />
      </div>
    </>
  );
}
export default GrateFulFor;
