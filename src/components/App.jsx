import { useState } from "react";
import GeneralInformation from "./GeneralInformation.jsx";
import SchoolHistory from "./SchoolHistory.jsx";
import WorkHistory from "./WorkHistory.jsx";
import ResumeBuilder from "./ResumeBuilder.jsx";
import "../css/App.css";

function App() {
  const [selectedTabState, setSelectedTabState] = useState(0);
  const [userInfoState, setUserInfoState] = useState({
    person: { firstName: "", lastName: "", age: null, phoneNumber: "" },
    schoolHistory: [],
    workHistory: [],
  });

  const handleTabClick = (tabID) => {
    setSelectedTabState(tabID);
  };

  const handleEvent = (e, index) => {
    if (index === 0) {
      //GeneralInformation
      if (e.target[1].id === "first-name") {
        setUserInfoState({
          ...userInfoState,
          person: {
            ...userInfoState.person,
            firstName: e.target[1].value,
          },
        });
      } else if (e.target[1].id === "last-name") {
        setUserInfoState({
          ...userInfoState,
          person: {
            ...userInfoState.person,
            lastName: e.target[1].value,
          },
        });
      } else if (e.target[1].id === "age") {
        setUserInfoState({
          ...userInfoState,
          person: {
            ...userInfoState.person,
            age: e.target[1].value,
          },
        });
      } else if (e.target[1].id === "phone-number") {
        setUserInfoState({
          ...userInfoState,
          person: {
            ...userInfoState.person,
            phoneNumber: e.target[1].value,
          },
        });
      }
    } else if (index === 1) {
      //SchoolHistory
      setUserInfoState({
        ...userInfoState,
        schoolHistory: [
          ...userInfoState.schoolHistory,
          {
            key: crypto.randomUUID(),
            schoolName: e.target[0].value,
            field: e.target[1].value,
            studyStart: e.target[2].value,
            studyEnd: e.target[3].value,
          },
        ],
      });
    } else if (index === 2) {
      //WorkHistory
      setUserInfoState({
        ...userInfoState,
        workHistory: [
          ...userInfoState.workHistory,
          {
            key: crypto.randomUUID(),
            company: e.target[0].value,
            position: e.target[1].value,
            workStart: e.target[2].value,
            workEnd: e.target[3].value,
            responsibilities: e.target[4].value,
          },
        ],
      });
    }
  };

  const handleDelete = (itemKey, index) => {
    if (index === 1) {
      //SchoolHistory
      setUserInfoState({
        ...userInfoState,
        schoolHistory: userInfoState.schoolHistory.filter(
          (item) => item.key !== itemKey
        ),
      });
    } else if (index === 2) {
      //WorkHistory
      setUserInfoState({
        ...userInfoState,
        workHistory: userInfoState.workHistory.filter(
          (item) => item.key !== itemKey
        ),
      });
    }
    console.log("deleted");
    console.log(userInfoState);
  };

  return (
    <div className="app-container">
      <section className="input-section">
        <div className="tabs">
          <button
            className="general-button"
            onClick={() => {
              handleTabClick(0);
            }}
          >
            General
          </button>
          <button
            className="school-button"
            onClick={() => {
              handleTabClick(1);
            }}
          >
            School History
          </button>
          <button
            className="work-button"
            onClick={() => {
              handleTabClick(2);
            }}
          >
            Work History
          </button>
        </div>
        <div
          className={
            selectedTabState === 0 ? "general-info" : "general-info hidden"
          }
        >
          <GeneralInformation
            eventHandler={handleEvent}
            person={userInfoState.person}
          />
        </div>
        <div
          className={
            selectedTabState === 1 ? "school-info" : "school-info hidden"
          }
        >
          <SchoolHistory
            eventHandler={handleEvent}
            deletionHandler={handleDelete}
            schoolHistory={userInfoState.schoolHistory}
          />
        </div>
        <div
          className={selectedTabState === 2 ? "work-info" : "work-info hidden"}
        >
          <WorkHistory
            eventHandler={handleEvent}
            deletionHandler={handleDelete}
            workHistory={userInfoState.workHistory}
          />
        </div>
      </section>
      <section className="output-section">
        <ResumeBuilder
          person={userInfoState.person}
          schoolHistory={userInfoState.schoolHistory}
          workHistory={userInfoState.workHistory}
        />
      </section>
    </div>
  );
}

export default App;
