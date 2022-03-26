import React, { useState } from "react";
import { ACTIONS } from "./Reducer";
import { reducer } from "./Reducer";
import useReducerWithLocalStorage from "../../../Hooks/useLocalStorageWithReducer";
import TodoItem from "./TodoItem";
import DoneTodos from "./DoneTodos";
import "./Todos.css";
import { Link } from "react-router-dom";

export const TodoContext = React.createContext();

function Todos() {
  const [todos, dispatch] = useReducerWithLocalStorage({
    initialArg: [
      {
        id: Math.random(),
        text: "Learn React",
        isDone: false,
      },
    ],

    key: "Todos",
    reducer,
  });

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { text: text } });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Link to="/homework">←Back To HomeWorks</Link>
      <div className="todo-container">
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={handleChange}></input>
          <button>Add</button>
        </form>
        <div className="clear-all-items">
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.CLEAR });
            }}
          >
            Clear the board
          </button>
        </div>
        <div className="todo-board">
          <div className="todo-header">
            <h1>To Do</h1>
            <div className="todo-items">
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
              ))}
            </div>
          </div>

          <div className="todo-header">
            <h1>Done </h1>
            <div className="done-todos">
              <TodoContext.Provider value={todos}>
                <DoneTodos />
              </TodoContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
