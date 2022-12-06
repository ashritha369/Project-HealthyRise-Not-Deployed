import SingleItemTask from "./SingleItemOfTask";
function HealthyMeals() {
  return (
    <>
      <div id="healthymeals-container" className="inner-div">
        <h1 className="task-heading">HEALTHY MEALS</h1>
        <h2 className="sub-task-heading">Why healthy meals is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/Gmh_xMMJ2Pw"
          Description="A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet."
          SubTitle="How to Create a Healthy Plate"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/jwWpTAXu-Sg"
          Description="Healthy eating does not mean having only boiled meals, eating less, or saying no to fat. Healthy food habits involve switching to a well-balanced, nutritious diet, i.e., eating everything in the right amount and at the right time and with the right combination. Don’t completely exclude fats or overdo the fibers and proteins! ."
          SubTitle="BEGINNERS GUIDE TO HEALTHY EATING "
        />
      </div>
    </>
  );
}
export default HealthyMeals;
