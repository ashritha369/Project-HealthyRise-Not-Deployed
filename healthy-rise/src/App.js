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
import logo from "./Imgs/Healthy.png";
// use ref hook to scroll to a particular section
import { useRef } from "react";

function App() {
  const selectedSection = useRef(null);
  const scrollDown = () => {
    window.scrollTo({
      top: selectedSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="header-container">
        <img src={logo} id="logo" alt="logo"></img>
      </div>
      <div className="menu-container">
        {/* MEDITATION */}
        <Link to="/mediation">
          <div className="menu-task-cards" id="meditation-menu-card">
            <button onClick={scrollDown}>MEDITATION</button>
          </div>
        </Link>
        {/* FACE-YOGA*/}
        <Link to="/faceyoga">
          <div className="menu-task-cards" id="faceyoga-menu-card">
            <button onClick={scrollDown}>FACEYOGA</button>
          </div>
        </Link>
        {/* WARM-UP*/}
        <Link to="/warmup">
          <div className="menu-task-cards" id="warmup-menu-card">
            <button onClick={scrollDown}>WARM-UP</button>
          </div>
        </Link>
        {/* GYM*/}
        <Link to="/gym">
          <div className="menu-task-cards" id="gym-menu-card">
            <button onClick={scrollDown}>GYM</button>
          </div>
        </Link>
        {/* CARDIO*/}
        <Link to="/cardio">
          <div className="menu-task-cards" id="cardio-menu-card">
            <button onClick={scrollDown}>CARDIO</button>
          </div>
        </Link>
        {/* YOGA*/}
        <Link to="/yoga">
          <div className="menu-task-cards" id="yoga-menu-card">
            <button onClick={scrollDown}>YOGA</button>
          </div>
        </Link>
        {/* HEALTHY-MEALS*/}
        <Link to="/healthymeals">
          <div className="menu-task-cards" id="healthymeals-menu-card">
            <button onClick={scrollDown}>HEALTHY-MEALS</button>
          </div>
        </Link>
        {/* SELF-CARE*/}
        <Link to="/selfcare">
          <div className="menu-task-cards" id="selfcare-menu-card">
            <button onClick={scrollDown}>SELF-CARE</button>
          </div>
        </Link>
        {/* FAVORITE*/}
        <Link to="/favorite">
          <div className="menu-task-cards" id="favorite-menu-card">
            <button onClick={scrollDown}>FAVORITES</button>
          </div>
        </Link>
        {/* BED-TIME-WARMUP*/}
        <Link to="/bedtimewarmup">
          <div className="menu-task-cards" id="bedtimewarmup-menu-card">
            <button onClick={scrollDown}>BEDTIME WARM UP</button>
          </div>
        </Link>
        {/* GRATEFUL-FOR*/}
        <Link to="/gratefulfor">
          <div className="menu-task-cards" id="gratefulfor-menu-card">
            <button onClick={scrollDown}>GRATEFUL-FOR</button>
          </div>
        </Link>

        {/* WHEN-YOU-FEEL-LOW*/}
        <Link to="/whenyoufeellow">
          <div className="menu-task-cards" id="whenyoufeellow-menu-card">
            <button onClick={scrollDown}>WHEN YOU FEEL LOW</button>
          </div>
        </Link>
      </div>
      {/* ROUTES SETUP-WITH REACT-ROUTER-DOM */}
      <div className="selectedContainer" ref={selectedSection}></div>
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
