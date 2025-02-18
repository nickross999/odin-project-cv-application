import { useState } from "react";
import "../css/GeneralInformation.css";
import pencilIcon from "../assets/pencil.png";
import closeIcon from "../assets/close.png";

function GeneralInformation({ eventHandler, person }) {
  const [visibilityState, setVisibilityState] = useState([
    false,
    false,
    false,
    false,
  ]);

  const inputs = [
    {
      id: "first-name",
      label: "First Name: ",
      type: "text",
      key: crypto.randomUUID(),
    },
    {
      id: "last-name",
      label: "Last Name: ",
      type: "text",
      key: crypto.randomUUID(),
    },
    {
      id: "age",
      label: "Age: ",
      type: "number",
      key: crypto.randomUUID(),
    },
    {
      id: "phone-number",
      label: "Phone Number: ",
      type: "text",
      key: crypto.randomUUID(),
    },
  ];

  const toggleInputVisibility = (e, index) => {
    setVisibilityState([
      ...visibilityState.slice(0, index),
      !visibilityState[index],
      ...visibilityState.slice(index + 1),
    ]);
  };

  const inputElements = inputs.map((input, index) => {
    if (visibilityState[index]) {
      return (
        <div className="input-container" key={input.key}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toggleInputVisibility(e, index);
              eventHandler(e, 0);
            }}
          >
            <div className="input-title-div">
              <h1>{input.label}</h1>
              <button type="submit" className="toggle-input-visibility-button">
                <img src={closeIcon} className="icon" />
              </button>
            </div>
            <label className="input-label hidden" htmlFor={input.id}>
              {input.label}
            </label>
            <input type={input.type} id={input.id} />
          </form>
        </div>
      );
    } else {
      return (
        <div className="input-container" key={input.key}>
          <div className="input-title-div">
            <h1>{input.label}</h1>
            <button
              className="toggle-input-visibility-button"
              onClick={(e) => {
                toggleInputVisibility(e, index);
              }}
            >
              <img className="icon" src={pencilIcon} />
            </button>
          </div>
          <span className="input-span">{Object.values(person)[index]}</span>
        </div>
      );
    }
  });

  return <div className="user-info-container">{inputElements}</div>;
}

export default GeneralInformation;
