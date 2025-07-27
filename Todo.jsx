import React from "react";

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="todo">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="check"
        />
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </p>
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
