import { useState } from "react";
import "../css/SchoolHistory.css";
import plusIcon from "../assets/plus.png";

function SchoolHistory() {
  const [showHistoryInput, setShowHistoryInput] = useState(false);
  const historyList = [];

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(e);
    setShowHistoryInput(!showHistoryInput);
  };

  const schoolHistory = historyList.map((item) => {
    return (
      <div key={item.key}>
        <h2>School: </h2>
        <span>{item.schoolName}</span>
        <h2>Area of Study: </h2>
        <span>{item.field}</span>
        <h2>From: </h2>
        <span>{item.studyStart}</span>
        <h2>To: </h2>
        <span>{item.studyEnd}</span>
      </div>
    );
  });

  if (showHistoryInput) {
    return (
      <>
        <div>{schoolHistory}</div>
        <form className="school-input-form">
          <label>School: </label>
          <input type="text" />
          <label>Area of Study: </label>
          <input type="text" />
          <label>From: </label>
          <input type="date" />
          <label>To: </label>
          <input type="date" />
          <button type="submit" onClick={handleSubmitClick}>
            Submit
          </button>
        </form>
      </>
    );
  }

  return (
    <>
      <div>{schoolHistory}</div>
      <button className="add-history-button">
        <img
          className="icon"
          src={plusIcon}
          onClick={() => {
            setShowHistoryInput(!showHistoryInput);
          }}
        />
      </button>
    </>
  );
}

export default SchoolHistory;
