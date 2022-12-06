import SingleItemTask from "./SingleItemOfTask";
function Yoga() {
  return (
    <>
      <div id="yoga-container">
        <h1 className="task-heading">YOGA</h1>
        <h2 className="sub-task-heading">Why yoga is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/Eml2xnoLpYE"
          Description="Yoga improves strength, balance and flexibility.
          Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength. Balance on one foot, while holding the other foot to your calf or above the knee (but never on the knee) at a right angle"
          SubTitle="Full Body Yoga for Strength & Flexibility | 25 Minute At Home Mobility Routine"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/dAqQqmaI9vY"
          Description="The ultimate goal of yoga is to help the individual to transcend the self and attain enlightenment. As the Bhagavad-Gita says, A person is said to have achieved yoga, the union with the Self, when the perfectly disciplined mind gets freedom from all desires, and becomes absorbed in the Self alone"
          SubTitle="30 Min Daily Yoga Routine for Beginners (Follow Along)"
        />
      </div>
    </>
  );
}
export default Yoga;
