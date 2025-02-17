import { useState } from "react";
import GeneralInformation from "./GeneralInformation.jsx";
import SchoolHistory from "./SchoolHistory.jsx";
import WorkHistory from "./WorkHistory.jsx";
import "../css/App.css";

function App() {
  const [selectedTabState, setSelectedTabState] = useState("general-info");
  const [userInfoState, setUserInfoState] = useState({
    firstName: "",
    lastName: "",
    age: null,
    phoneNumber: "",
    schoolHistory: [],
    workHistory: [],
  });

  const handleTabClick = (tabID) => {
    setSelectedTabState(tabID);
  };

  const handleEvent = (e, id) => {
    //gotta think about this one, might need to write some code in the components
    console.log(e);
    if (id === 0) {
      //GeneralInformation
    } else if (id === 1) {
      //SchoolHistory
    } else if (id === 2) {
      //WorkHistory
    }
  };

  return (
    <div className="app-container">
      <section className="input-section">
        <div className="tabs">
          <button
            className="general-button"
            onClick={() => {
              handleTabClick("general-info");
            }}
          >
            General
          </button>
          <button
            className="school-button"
            onClick={() => {
              handleTabClick("school-info");
            }}
          >
            School History
          </button>
          <button
            className="work-button"
            onClick={() => {
              handleTabClick("work-info");
            }}
          >
            Work History
          </button>
        </div>
        <div
          className={
            selectedTabState === "general-info"
              ? "general-info"
              : "general-info hidden"
          }
        >
          <GeneralInformation eventHandler={handleEvent} />
        </div>
        <div
          className={
            selectedTabState === "school-info"
              ? "school-info"
              : "school-info hidden"
          }
        >
          <SchoolHistory eventHandler={handleEvent} />
        </div>
        <div
          className={
            selectedTabState === "work-info" ? "work-info" : "work-info hidden"
          }
        >
          <WorkHistory eventHandler={handleEvent} />
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default App;
