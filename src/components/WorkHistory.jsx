import { useState } from "react";
import "../css/WorkHistory.css";
import plusIcon from "../assets/plus.png";
import closeIcon from "../assets/close.png";

function WorkHistory({ eventHandler, deletionHandler, workHistory }) {
  const [showWorkHistoryInput, setShowWorkHistoryInput] = useState(false);

  const workHistoryElements = workHistory.map((item) => {
    return (
      <div key={item.key}>
        <h2>Company:</h2>
        <span>{item.company}</span>
        <h2>Position:</h2>
        <span>{item.position}</span>
        <h2>From: </h2>
        <span>{item.workStart}</span>
        <h2>To: </h2>
        <span>{item.workEnd}</span>
        <h2>Responsbilities: </h2>
        <span>{item.responsibilities}</span>
        <button
          className="delete-history-button"
          onClick={() => {
            handleDelete(item.key);
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </div>
    );
  });

  const handleDelete = (itemKey) => {
    deletionHandler(itemKey, 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWorkHistoryInput(!showWorkHistoryInput);
    eventHandler(e, 2);
  };

  if (showWorkHistoryInput) {
    return (
      <div className="work-history-container">
        <h1>Work History: </h1>
        <div className="work-history">{workHistoryElements}</div>
        <form className="work-history-input-form" onSubmit={handleSubmit}>
          <label htmlFor="input-company">Company: </label>
          <input id="input-company" type="text" />
          <label htmlFor="input-position">Position: </label>
          <input id="input-position" type="text" />
          <label htmlFor="input-date-start">From: </label>
          <input id="input-date-start" type="date" />
          <label htmlFor="input-date-end">To: </label>
          <input id="input-date-end" type="date" />
          <label htmlFor="job-description">
            Job/Responsibilities Description:
          </label>
          <textarea id="job-description"></textarea>
          <button type="submit">Submit</button>
        </form>
        <button
          className="cancel-add-button"
          onClick={() => {
            setShowWorkHistoryInput(!showWorkHistoryInput);
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </div>
    );
  }

  return (
    <div className="work-history-container">
      <h1>Work History: </h1>
      <div className="work-history">{workHistoryElements}</div>
      <button
        className="add-work-history-button"
        onClick={() => {
          setShowWorkHistoryInput(!showWorkHistoryInput);
        }}
      >
        <img className="icon" src={plusIcon} />
      </button>
    </div>
  );
}

export default WorkHistory;
