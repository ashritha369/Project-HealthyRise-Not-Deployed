import SingleItemTask from "./SingleItemOfTask";
function BedTimeWarmUp() {
  return (
    <>
      <div id="bedtime-container">
        <h1 className="task-heading">BEDTIME WARM UP</h1>
        <h2 className="sub-task-heading">
          Why bedtime warmup is so important?
        </h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/7iBm75B7LeI"
          Description="Stretching before bed helps your body rejuvenate itself during sleep. It can also help you avoid discomfort during sleep especially if you are someone who experiences muscle spasms during the day"
          SubTitle="STRETCH ROUTINE IN BED"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/Ab_AFNm4mNQ"
          Description="Stretching before bed is a great natural way to improve sleep duration and quality.."
          SubTitle="7 MIN STRETCHING EXERCISES BEFORE BED | FULL BODY COOL DOWN FOR RELAXATION & FLEXIBILITY"
        />
      </div>
    </>
  );
}
export default BedTimeWarmUp;
