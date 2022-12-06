import SingleItemTask from "./SingleItemOfTask";
function WhenYouFeelLow() {
  return (
    <>
      <div id="whenyoufeellow-container " className="inner-div">
        <h1 className="task-heading">WHEN YOU FEEL LOW</h1>
        <h2 className="sub-task-heading">This too shall pass</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/h1rA2jMS-6I"
          Description="When you are feeling down or stressed, it can be helpful to look for things you can do to make yourself feel better quickly. While there are things that are simply outside of your control, go and take a break, go for a walk, Crank up the music do something nice for someone else, talk to a friend or a family."
          SubTitle="Feel Like Quitting: Remember Why You Started!"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/tElbDd2UzRU"
          Description="It does not matter how late it is, a person should always take the opportunity to pursue their goals'. It means that: there is always time to start what we wanted to start, there is always time to pick up again something that we had stopped doing."
          SubTitle="It's Never Too Late (No Regrets)"
        />
      </div>
    </>
  );
}
export default WhenYouFeelLow;
