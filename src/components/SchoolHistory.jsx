import { useState } from "react";
import "../css/SchoolHistory.css";
import plusIcon from "../assets/plus.png";
import closeIcon from "../assets/close.png";

function SchoolHistory() {
  const [showSchoolHistoryInput, setSchoolHistoryInput] = useState(false);
  const [schoolHistoryList, setSchoolHistoryList] = useState([]);

  const schoolHistory = schoolHistoryList.map((item) => {
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
    setSchoolHistoryList([
      ...schoolHistoryList,
      {
        key: crypto.randomUUID(),
        schoolName: e.target[0].value,
        field: e.target[1].value,
        studyStart: e.target[2].value,
        studyEnd: e.target[3].value,
      },
    ]);
    setSchoolHistoryInput(!showSchoolHistoryInput);
  };

  const handleDeletion = (itemKey) => {
    setSchoolHistoryList(
      schoolHistoryList.filter((item) => item.key !== itemKey)
    );
  };

  if (showSchoolHistoryInput) {
    return (
      <div className="school-history">
        <h1>School History: </h1>
        <div>{schoolHistory}</div>
        <form className="school-input-form" onSubmit={handleSubmit}>
          <label>School: </label>
          <input type="text" />
          <label>Area of Study: </label>
          <input type="text" />
          <label>From: </label>
          <input type="date" />
          <label>To: </label>
          <input type="date" />
          <button type="submit">Submit</button>
        </form>
        <button
          onClick={() => {
            setSchoolHistoryInput(!showSchoolHistoryInput);
          }}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="school-history">
      <h1>School History: </h1>
      <div>{schoolHistory}</div>
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
