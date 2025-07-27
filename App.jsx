import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputVal,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputVal("");
    }
  }

  function toggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app-container"> {/* ✅ Box with rounded corners */}
      <main>
        <h1>To Do List</h1>
        <InputContainer
          inputVal={inputVal}
          writeTodo={writeTodo}
          addTodo={addTodo}
        />
        <TodoContainer
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;
