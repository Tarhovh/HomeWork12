import React from "react";
import { ACTIONS } from "./Reducer";

function TodoItem({ todo, dispatch }) {
  return (
    <>
      <div
        className="todo-item"
        style={{
          display: todo.isDone ? "none" : "normal",
        }}
      >
        <div>
          <input
            type="checkbox"
            onClick={() => {
              dispatch({ type: ACTIONS.DONE, payload: { id: todo.id } });
            }}
          ></input>
        </div>
        <div
          style={{
            color: todo.isDone ? "#000" : "red",
          }}
        >
          {todo.text}
        </div>
        <input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required></input>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
          }
        >
          X
        </button>
      </div>
    </>
  );
}

export default TodoItem;
