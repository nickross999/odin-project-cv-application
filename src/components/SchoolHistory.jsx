import { useState } from "react";
import "../css/SchoolHistory.css";
import plusIcon from "../assets/plus.png";
import closeIcon from "../assets/close.png";
import pencilIcon from "../assets/pencil.png";

function SchoolHistory({
  eventHandler,
  deletionHandler,
  editHandler,
  schoolHistory,
}) {
  const [showSchoolHistoryInput, setSchoolHistoryInput] = useState(false);
  const [editSchoolHistoryInput, setEditSchoolHistoryInput] = useState({
    bool: false,
    key: null,
  });

  const schoolHistoryElements = schoolHistory.map((item) => {
    return (
      <div key={item.key} className="school-history-item">
        <span>
          {item.schoolName} | {item.field} | {item.studyStart} - {item.studyEnd}
        </span>
        <button
          className="edit-school-history-button"
          onClick={() => {
            setEditSchoolHistoryInput({ bool: true, key: item.key });
          }}
        >
          <img src={pencilIcon} className="icon" />
        </button>
        <button
          className="delete-school-history-button"
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
    eventHandler(e, 2);
  };

  const handleDeletion = (itemKey) => {
    deletionHandler(itemKey, 2);
  };

  const handleEdit = (e, itemKey) => {
    e.preventDefault();
    editHandler(e, itemKey, 2);
    setEditSchoolHistoryInput({ bool: false, key: null });
  };

  if (editSchoolHistoryInput.bool) {
    const itemToEdit = schoolHistory.filter( //doesn't work?
      (item) => item.key === editSchoolHistoryInput.key
    );
    return (
      <>
        <h1>School History: </h1>
        <form
          className="school-input-form"
          onSubmit={(e) => {
            handleEdit(e, editSchoolHistoryInput.key);
          }}
        >
          <label htmlFor="input-school">School: </label>
          <input id="input-school" type="text" value={itemToEdit.schoolName} />
          <label htmlFor="input-field">Area of Study: </label>
          <input id="input-field" type="text" value={itemToEdit.field} />
          <label htmlFor="input-date-start">From: </label>
          <input
            id="input-date-start"
            type="date"
            value={itemToEdit.studyStart}
          />
          <label htmlFor="input-date-end">To: </label>
          <input id="input-date-end" type="date" value={itemToEdit.studyEnd} />
          <button type="submit">Submit</button>
        </form>
        <button
          className="cancel-school-edit-button"
          onClick={() => {
            setEditSchoolHistoryInput({ bool: false, key: null });
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </>
    );
  }

  if (showSchoolHistoryInput) {
    return (
      <>
        <h1>School History: </h1>
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
          className="cancel-school-add-button"
          onClick={() => {
            setSchoolHistoryInput(!showSchoolHistoryInput);
          }}
        >
          <img className="icon" src={closeIcon} />
        </button>
      </>
    );
  }

  return (
    <>
      <h1>School History: </h1>
      <button className="add-school-history-button">
        <img
          className="icon"
          src={plusIcon}
          onClick={() => {
            setSchoolHistoryInput(!showSchoolHistoryInput);
          }}
        />
      </button>
      <section className="school-history-list">{schoolHistoryElements}</section>
    </>
  );
}

export default SchoolHistory;
