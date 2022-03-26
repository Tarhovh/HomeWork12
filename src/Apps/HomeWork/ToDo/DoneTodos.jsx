import React, { useContext } from "react";
import { TodoContext } from "./Todos";

function DoneTodos() {
  const todos = useContext(TodoContext);

  console.log(todos);

  return (
    <>
      {todos.map((todo) => {
        if (todo.isDone) {
          return (
            <div className=".todo-item" key={todo.id}>
              ✔️ {todo.text}
            </div>
          );
        }
        return "";
      })}
    </>
  );
}

export default DoneTodos;
