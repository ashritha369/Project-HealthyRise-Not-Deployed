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
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        {/* MEDITATION */}
        <Link to="/mediation">
          <div className="menu-task-cards" id="meditation-menu-card">
            <h4>MEDITATION</h4>
          </div>
        </Link>
        {/* FACE-YOGA*/}
        <Link to="/faceyoga">
          <div className="menu-task-cards" id="faceyoga-menu-card">
            <h4>FACEYOGA</h4>
          </div>
        </Link>
        {/* WARM-UP*/}
        <Link to="/warmup">
          <div className="menu-task-cards" id="warmup-menu-card">
            <h4>WARM-UP</h4>
          </div>
        </Link>
        {/* GYM*/}
        <Link to="/gym">
          <div className="menu-task-cards" id="gym-menu-card">
            <h4>GYM</h4>
          </div>
        </Link>
        {/* CARDIO*/}
        <Link to="/cardio">
          <div className="menu-task-cards" id="cardio-menu-card">
            <h4>CARDIO</h4>
          </div>
        </Link>
        {/* YOGA*/}
        <Link to="/yoga">
          <div className="menu-task-cards" id="yoga-menu-card">
            <h4>YOGA</h4>
          </div>
        </Link>
        {/* HEALTHY-MEALS*/}
        <Link to="/healthymeals">
          <div className="menu-task-cards" id="healthymeals-menu-card">
            <h4>HEALTHY-MEALS</h4>
          </div>
        </Link>
        {/* SELF-CARE*/}
        <Link to="/selfcare">
          <div className="menu-task-cards" id="selfcare-menu-card">
            <h4>SELF-CARE</h4>
          </div>
        </Link>
        {/* FAVORITE*/}
        <Link to="/favorite">
          <div className="menu-task-cards" id="favorite-menu-card">
            <h4>FAVORITES</h4>
          </div>
        </Link>
        {/* BED-TIME-WARMUP*/}
        <Link to="/bedtimewarmup">
          <div className="menu-task-cards" id="bedtimewarmup-menu-card">
            <h4>BEDTIME WARM UP</h4>
          </div>
        </Link>
        {/* GRATEFUL-FOR*/}
        <Link to="/gratefulfor">
          <div className="menu-task-cards" id="gratefulfor-menu-card">
            <h4>GRATEFUL-FOR</h4>
          </div>
        </Link>
        {/* WHEN-YOU-FEEL-LOW*/}
        <Link to="/whenyoufeellow">
          <div className="menu-task-cards" id="whenyoufeellow-menu-card">
            <h4>WHEN YOU FEEL LOW</h4>
          </div>
        </Link>
      </div>
      {/* ROUTES SETUP-WITH REACT-ROUTER-DOM */}
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
