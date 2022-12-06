import SingleItemTask from "./SingleItemOfTask";

function Meditation() {
  return (
    <>
      <div id="meditation-container" className="inner-div">
        <h1 className="task-heading">MEDITATION</h1>
        <h2 className="sub-task-heading">Why meditation is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/BG79IpCBJTk"
          Description="Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health. You can also use it to relax and cope with stress by refocusing your attention on something calming. Meditation can help you learn to stay centered and keep inner peace."
          SubTitle="GUIDED MEDITATION"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/B6RFo1SbBJQ"
          Description="When you chant Om, a vibration sound felt through your vocal cord that clears and opens up the sinuses. Chanting Om also has cardiovascular benefits. It reduces stress and relaxes your body that brings down the blood pressure on the normal level and the heart beats with a regular rhythm."
          SubTitle="OM CHANT VIBRATION"
        />
      </div>
    </>
  );
}
export default Meditation;
