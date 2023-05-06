import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.typefunction}
        type="text"
        value={props.inputvalue}
      />
      <button onClick={props.addfunction}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
