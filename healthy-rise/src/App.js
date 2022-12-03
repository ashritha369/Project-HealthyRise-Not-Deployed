import "./App.css";
import "./components/BedTimeWarmUp";
import "./components/Cardio";
import "./components/FaceYoga";
import "./components/Favorite";
import "./components/GrateFulFor";
import "./components/Gym";
import "./components/HealthyMeals";
import "./components/Meditation";
import Meditation from "./components/Meditation";
import "./components/SelfCare";
import "./components/WarmUp";
import "./components/WhenYouFeelLow";
import "./components/Yoga";
// Importing Routes from react-router-dom
import { Route, Routes } from "react-router-dom";
import Yoga from "./components/Yoga";
import BedTimeWarmUp from "./components/BedTimeWarmUp";
import FaceYoga from "./components/FaceYoga";
import Favorite from "./components/Favorite";
import GrateFulFor from "./components/GrateFulFor";
import Gym from "./components/Gym";
import HealthyMeals from "./components/HealthyMeals";
import SelfCare from "./components/SelfCare";
import WarmUp from "./components/WarmUp";
import WhenYouFeelLow from "./components/WhenYouFeelLow";
import Cardio from "./components/Cardio";

function App() {
  return (
    <>
      {/* <div className="App">
        <Meditation />
      </div> */}
      <Routes>
        <Route path="/Mediation" element={<Meditation />} />
        <Route path="/BedTimeWarmUp" element={<BedTimeWarmUp />} />
        <Route path="/Cardio" element={<Cardio />} />
        <Route path="/FaceYoga" element={<FaceYoga />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/GrateFulFor" element={<GrateFulFor />} />
        <Route path="/Gym" element={<Gym />} />
        <Route path="/HealthyMeals" element={<HealthyMeals />} />
        <Route path="/SelfCare" element={<SelfCare />} />
        <Route path="/WarmUp" element={<WarmUp />} />
        <Route path="/WhenYouFeelLow" element={<WhenYouFeelLow />} />
        <Route path="/yoga" element={<Yoga />} />
      </Routes>
    </>
  );
}

export default App;
