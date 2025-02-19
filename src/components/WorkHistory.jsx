import { useState } from "react";
import "../css/WorkHistory.css";
import plusIcon from "../assets/plus.png";
import closeIcon from "../assets/close.png";
import pencilIcon from "../assets/pencil.png";

function WorkHistory({
  eventHandler,
  deletionHandler,
  editHandler,
  workHistory,
}) {
  const [showWorkHistoryInput, setShowWorkHistoryInput] = useState(false);
  const [editWorkHistoryInput, setEditWorkHistoryInput] = useState({
    bool: false,
    item: null,
  });

  const workHistoryElements = workHistory.map((item) => {
    return (
      <div key={item.key} className="work-history-item">
        <span>
          {item.company} | {item.position} | {item.workStart} - {item.workEnd}
        </span>
        <button
          className="edit-work-history-button"
          onClick={() => {
            setEditWorkHistoryInput({ bool: true, item: item });
          }}
        >
          <img src={pencilIcon} className="icon" />
        </button>
        <button
          className="delete-work-history-button"
          onClick={() => {
            handleDeletion(item.key);
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </div>
    );
  });

  const handleDeletion = (itemKey) => {
    deletionHandler(itemKey, 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWorkHistoryInput(!showWorkHistoryInput);
    eventHandler(e, 1);
  };

  const handleEdit = (e, itemKey) => {
    e.preventDefault();
    editHandler(e, itemKey, 1);
    setEditWorkHistoryInput({ bool: false, item: null });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditWorkHistoryInput({
      bool: true,
      key: editWorkHistoryInput.key,
      item: { ...editWorkHistoryInput.item, [e.target.name]: e.target.value },
    });
  };

  if (editWorkHistoryInput.bool) {
    return (
      <>
        <h1>Work History: </h1>
        <form
          className="work-input-form"
          onSubmit={(e) => {
            handleEdit(e, editWorkHistoryInput.item.key);
          }}
        >
          <label htmlFor="input-company">Company: </label>
          <input
            id="input-company"
            type="text"
            name="company"
            value={editWorkHistoryInput.item.company}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input-position">Position: </label>
          <input
            id="input-position"
            type="text"
            name="position"
            value={editWorkHistoryInput.item.position}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input-date-start">From: </label>
          <input
            id="input-date-start"
            type="date"
            name="workStart"
            value={editWorkHistoryInput.item.workStart}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input-date-end">To: </label>
          <input
            id="input-date-end"
            type="date"
            name="workEnd"
            value={editWorkHistoryInput.item.workEnd}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="job-description">
            Job/Responsibilities Description:
          </label>
          <textarea
            id="job-description"
            name="responsibilities"
            value={editWorkHistoryInput.item.responsibilities}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <button
          className="cancel-school-edit-button"
          onClick={() => {
            setEditWorkHistoryInput({ bool: false, item: null });
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </>
    );
  }

  if (showWorkHistoryInput) {
    return (
      <>
        <h1>Work History: </h1>
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
          className="cancel-add-history-button"
          onClick={() => {
            setShowWorkHistoryInput(!showWorkHistoryInput);
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Work History: </h1>
      <button
        className="add-work-history-button"
        onClick={() => {
          setShowWorkHistoryInput(!showWorkHistoryInput);
        }}
      >
        <img className="icon" src={plusIcon} />
      </button>
      <section className="work-history-list">{workHistoryElements}</section>
    </>
  );
}

export default WorkHistory;
