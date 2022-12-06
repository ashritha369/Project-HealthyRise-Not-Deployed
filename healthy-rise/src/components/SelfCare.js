import SingleItemTask from "./SingleItemOfTask";
function SelfCare() {
  return (
    <>
      <div id="meditation-container" className="inner-div">
        <h1 className="task-heading">SELF CARE</h1>
        <h2 className="sub-task-heading">Why selfcare is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/4LSTfMANYqk"
          Description="Self-care is a crucial part of looking after yourself, as well as others. When you practice self-care you produce positive feelings, which boosts motivation and self-esteem leaving you with increased energy to support yourself as well as your loved ones. Self-care starts with tending to your own needs."
          SubTitle="Self-Care Ideas to Practice"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/w0iVTQS8ftg"
          Description="Self-care is the practice of consciously doing things that preserve or improve your mental or physical health
          These days, when people talk about self-care they are generally talking about the conscious and deliberate choice to do something that looks after you and your wellbeing.
          This covers the mental and the physical, and a regime of self-care should improve the way you feel in body and mind."
          SubTitle="A Self-Care Action Plan"
        />
      </div>
    </>
  );
}
export default SelfCare;
