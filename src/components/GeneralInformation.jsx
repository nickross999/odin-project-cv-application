import { useState } from "react";
import "../css/GeneralInformation.css";
import pencilIcon from "../assets/pencil.png";
import closeIcon from "../assets/close.png";

function Section({ input, eventHandler }) {
  const [inputState, setInputState] = useState({
    value: "",
    id: input.value,
    label: input.label,
    type: input.type,
    key: crypto.randomUUID(),
    visible: false,
  });

  const toggleInputVisibility = () => {
    setInputState({ ...inputState, visible: !inputState.visible });
  };

  if (inputState.visible) {
    return (
      <div className="input-container" key={input.key}>
        <form
          key={inputState.key}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="input-title-div">
            <h1>{input.label}</h1>
            <button
              className="toggle-input-visibility-button"
              onClick={toggleInputVisibility}
            >
              <img src={closeIcon} className="icon" />
            </button>
          </div>
          <label className="input-label hidden" htmlFor={inputState.id}>
            {input.label}
          </label>
          <input
            value={inputState.value}
            type={inputState.type}
            id={inputState.id}
            onChange={(e) => {
              setInputState({ ...inputState, value: e.target.value });
              eventHandler(e, 0);
            }}
          />
        </form>
      </div>
    );
  } else {
    return (
      <div className="input-container" key={input.key}>
        <div key={inputState.key}>
          <div className="input-title-div">
            <h1>{inputState.label}</h1>
            <button
              className="toggle-input-visibility-button"
              onClick={toggleInputVisibility}
            >
              <img className="icon" src={pencilIcon} />
            </button>
          </div>
          <span className="input-span">{inputState.value}</span>
        </div>
      </div>
    );
  }
}

function GeneralInformation( {eventHandler} ) {
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

  return (
    <div className="user-info-container">
      {inputs.map((input) => {
        return (
          <Section input={input} eventHandler={eventHandler} key={input.key} />
        );
      })}
    </div>
  );
}

export default GeneralInformation;
