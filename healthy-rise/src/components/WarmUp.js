import SingleItemTask from "./SingleItemOfTask";
function WarmUp() {
  return (
    <>
      <div id="warmup-container">
        <h1 className="task-heading">WARM UP</h1>
        <h2 className="sub-task-heading">Why warm-up is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/-p0PA9Zt8zk"
          Description="The purpose of warming up before physical activity is to prepare mentally and physically for your chosen activity. Warming up increases your heart rate and therefore your blood flow. This enables more oxygen to reach your muscles."
          SubTitle="QUICK WARM-UP ROUTINE"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/VecbXgWY0DI"
          Description="It is very important to perform a proper warm up before any type of physical activity.  The purpose of a warm up is to prevent injury by increasing the body’s core and muscle temperature.  Warm muscles increase the rate of energy production which increases reflexes and lowers the time it takes to contract a muscle.   A good warm up should also increase range of motion and mentally prepare you for exercise. Warm ups should be specific to the type of exercise you are doing, but should be a full body warm up even if you only plan to workout a few muscle groups.  For example, if you are planning to do a leg workout you should do a warm up with mostly lower body exercises, but also include a few upper body/full body exercises as well."
          SubTitle="WARM UP ROUTINE BEFORE WORKOUT"
        />
      </div>
    </>
  );
}
export default WarmUp;
<iframe
  width="782"
  height="440"
  src="https://www.youtube.com/embed/VecbXgWY0DI"
  title="WARM UP ROUTINE BEFORE WORKOUT | Quick and Effective | Rowan Row"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
