import SingleItemTask from "./SingleItemOfTask";
function FaceYoga() {
  return (
    <>
      <div id="meditation-container">
        <h1 className="task-heading">FACE YOGA</h1>
        <h2 className="sub-task-heading">Why faceyoga is so important?</h2>
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/kdrmGytwgqE"
          Description="Face yoga involves massage and exercises that stimulate the muscles, skin, and lymphatic system. This technique is designed to soften and relax your face muscles to help alleviate tension, stress, and worry. This may also help you stop making the facial expressions associated with those feelings.."
          SubTitle="FACE YOGA FOR ACNE & PIGMENTATION"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/LBp0dThh2Tg"
          Description="Collins explains that face yoga promotes healthy, glowing skin. She says: “Face yoga helps to lift and firm the muscles under the skin, which smooths lines and wrinkles. Massage helps to boost circulation, improve lymphatic drainage, and release tension.."
          SubTitle="ANTI AGING FACE YOGA"
        />
        <SingleItemTask
          youtubeUrl="https://www.youtube.com/embed/j_m5mgLik4g"
          Description="Collins explains that face yoga promotes healthy, glowing skin. She says: “Face yoga helps to lift and firm the muscles under the skin, which smooths lines and wrinkles. Massage helps to boost circulation, improve lymphatic drainage, and release tension.."
          SubTitle="REDUCE FACE FAT YOGA"
        />
      </div>
    </>
  );
}
export default FaceYoga;
