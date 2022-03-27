import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TodosRedux() {
  
  const todos = useSelector(function (state) {
    return state;
  });

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add-new-toDo",
      payload: {
        text: text,
      },
    });
    setText("");
  };

  console.log(todos);

  return (
    <>
      <Link to="/">←Back To Home</Link>
      <div className="todo-container">
        <h1>To Do with Redux</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={handleChange}></input>
          <button>Add</button>
        </form>
        <div className="clear-all-items">
          <button
            onClick={() => {
              dispatch({ type: "clear-all" });
            }}
          >
            Clear the board
          </button>
        </div>
        <div className="todo-header">
          <h1>To Do</h1>
          <div className="todo-items">
            {todos?.map((todo) => (
              <div
                key={todo.id}
                className="todo-item"
                style={{
                  color: todo.isDone ? "green" : "red",
                }}
              >
                <input
                  type="checkbox"
                  onClick={() => {
                    dispatch({ type: "isDone", payload: { id: todo.id } });
                  }}
                ></input>

                {todo.text}

                <button
                  onClick={() =>
                    dispatch({
                      type: "delete-todo-item",
                      payload: { id: todo.id },
                    })
                  }
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodosRedux;
