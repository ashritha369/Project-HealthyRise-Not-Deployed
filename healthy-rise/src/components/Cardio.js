import SingleItemTask from "./SingleItemOfTask";
function Cardio() {
  return (
    <>
      <div id="cardio-container">
        <h1 className="task-heading">CARDIO</h1>
        <h2 className="sub-task-heading">Why cardio is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/7HuB5lHlhpA"
          Description="Aerobic exercise reduces the risk of many conditions. These conditions include obesity, heart disease, high blood pressure, type 2 diabetes, metabolic syndrome, stroke and certain types of cancer. Weight-bearing aerobic exercises, such as walking, help lower the risk of osteoporosis."
          SubTitle="CARDIO WORKOUT AT HOME"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/dj03_VDetdw"
          Description="Getting to the gym on a regular basis can do wonders for your health. However, too much of a good thing can also have negative effects, especially if you're not careful.If you exercise daily, make sure to pay attention to any signs and symptoms of overtraining, including excess fatigue, a decrease in your performance, problems with sleep and recurring injuries. If you notice these things happening, it might be time to assess your workouts and scale back on the number of days you're going to the gym."
          SubTitle="CARDIO WORKOUT FOR BEGINNERS From Home In 10 Minutes "
        />
      </div>
    </>
  );
}
export default Cardio;
