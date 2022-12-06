import SingleItemTask from "./SingleItemOfTask";
function Gym() {
  return (
    <>
      <div id="gym-container">
        <h1 className="task-heading">GYM</h1>
        <h2 className="sub-task-heading">Why gym is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/BUcZ8sBM_e8"
          Description="Going to the gym every day can help improve your cardiovascular system, strengthen your muscles, help you maintain your weight, boost your mental health and decrease the odds that you'll develop other health conditions."
          SubTitle="Beginner Full Body Gym Workout"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/IGhQtwzfmXM"
          Description="Getting to the gym on a regular basis can do wonders for your health. However, too much of a good thing can also have negative effects, especially if you're not careful.If you exercise daily, make sure to pay attention to any signs and symptoms of overtraining, including excess fatigue, a decrease in your performance, problems with sleep and recurring injuries. If you notice these things happening, it might be time to assess your workouts and scale back on the number of days you're going to the gym."
          SubTitle="Complete Beginners Guide To Gym"
        />
      </div>
    </>
  );
}
export default Gym;

<iframe
  width="782"
  height="440"
  src="https://www.youtube.com/embed/IGhQtwzfmXM"
  title="Workout For Beginners | Complete Beginners Guide To Gym"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
