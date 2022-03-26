import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import "./LocalStorage.css";

function LocalStorage() {
  const [data, setData] = useLocalStorage("MyForm", []);

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setData([...data, text]);
    setText("");
  };

  const onBtnClick = ({ e, i }) => {
    const newData = data.filter((el, index) => index !== i);
    setData(newData);
  };

  console.log(data);

  return (
    <>
      <Link to="/homework">←Back To Home Work</Link>

      <div className="todo-container">
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={handleChange}></input>
          <button>Add</button>
        </form>

        <div className="todo-board2">
          {data.map((e, i) => (
            <div key={i} className="todo-items2">
              <div className="todo-item2">
                {e}
                <button onClick={() => onBtnClick({ e, i })}>X</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default LocalStorage;
