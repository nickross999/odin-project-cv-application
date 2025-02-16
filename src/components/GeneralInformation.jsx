import { useState } from "react";
import pencilIcon from "../assets/pencil.png";
import closeIcon from "../assets/close.png"

function Section({ input }) {
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
      <>
        <form key={inputState.key}>
          <label className="input-label" htmlFor={inputState.id}>{input.label}</label>
          <input
            value={inputState.value}
            type={inputState.type}
            id={inputState.id}
            onChange={(e) => {
              setInputState({ ...inputState, value: e.target.value });
            }}
          />
        </form>
        <button
          className="toggle-input-visibility-button"
          onClick={toggleInputVisibility}
        >
          <img src={closeIcon} className="icon" />
        </button>
      </>
    );
  } else {
    return (
      <>
        <div key={inputState.key}>
          <h1>{inputState.label}</h1>
          <span>{inputState.value}</span>
        </div>
        <button
          className="toggle-input-visibility-button"
          onClick={toggleInputVisibility}
        >
          <img className="icon" src={pencilIcon} />
        </button>
      </>
    );
  }
}

function GeneralInformation() {
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
          <div className="input-container" key={input.key}>
            <Section input={input} />
          </div>
        );
      })}
    </div>
  );
}

export default GeneralInformation;
