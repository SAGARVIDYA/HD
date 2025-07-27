import React from "react";

function InputContainer({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputVal}
        onChange={writeTodo}
        placeholder="Enter your task..."
      />
      <button className="button" onClick={addTodo}>
        +
      </button>
    </div>
  );
}

export default InputContainer;


