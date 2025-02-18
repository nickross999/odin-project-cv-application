import { useState } from "react";
import "../css/SchoolHistory.css";
import plusIcon from "../assets/plus.png";
import closeIcon from "../assets/close.png";

function SchoolHistory({ eventHandler, deletionHandler, schoolHistory }) {
  const [showSchoolHistoryInput, setSchoolHistoryInput] = useState(false);

  const schoolHistoryElements = schoolHistory.map((item) => {
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
        <button
          className="delete-history-button"
          onClick={() => {
            handleDeletion(item.key);
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </div>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchoolHistoryInput(!showSchoolHistoryInput);
    eventHandler(e, 1);
  };

  const handleDeletion = (itemKey) => {
    deletionHandler(itemKey, 1);
  };

  if (showSchoolHistoryInput) {
    return (
      <div className="school-history-container">
        <h1>School History: </h1>
        <div>{schoolHistoryElements}</div>
        <form className="school-input-form" onSubmit={handleSubmit}>
          <label htmlFor="input-school">School: </label>
          <input id="input-school" type="text" />
          <label htmlFor="input-field">Area of Study: </label>
          <input id="input-field" type="text" />
          <label htmlFor="input-date-start">From: </label>
          <input id="input-date-start" type="date" />
          <label htmlFor="input-date-end">To: </label>
          <input id="input-date-end" type="date" />
          <button type="submit">Submit</button>
        </form>
        <button
          className="cancel-add-button"
          onClick={() => {
            setSchoolHistoryInput(!showSchoolHistoryInput);
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </div>
    );
  }

  return (
    <div className="school-history-container">
      <h1>School History: </h1>
      <div>{schoolHistoryElements}</div>
      <button className="add-history-button">
        <img
          className="icon"
          src={plusIcon}
          onClick={() => {
            setSchoolHistoryInput(!showSchoolHistoryInput);
          }}
        />
      </button>
    </div>
  );
}

export default SchoolHistory;
