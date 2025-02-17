import { useState } from "react";
import "../css/WorkHistory.css";
import plusIcon from "../assets/plus.png";
import closeIcon from "../assets/close.png";

function WorkHistory() {
  const [showWorkHistoryInput, setWorkHistoryInput] = useState(false);
  const [workHistoryList, setWorkHistoryList] = useState([]);

  const workHistory = workHistoryList.map((item) => {
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
        <span>{item.responsbilities}</span>
        <button
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
    setWorkHistoryList(workHistoryList.filter((item) => item.key !== itemKey));
  };

  if (showWorkHistoryInput) {
    return (
      <div>
        <div className="work-history">{workHistory}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="work-history">{workHistory}</div>
      <button
        onClick={() => {
          setWorkHistoryInput(!showWorkHistoryInput);
        }}
      >
        <img className="icon" src={plusIcon} />
      </button>
    </div>
  );
}

export default WorkHistory;
