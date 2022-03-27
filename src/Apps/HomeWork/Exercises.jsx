import React from "react";
import { Link } from "react-router-dom";

function Exersices(props) {
  return (
    <>
      <Link to="/">←Back To Home</Link>
      <div className="App">
        <h1>Exercises</h1>
        <div className="appBoard">
          <div className="app">
            <Link to="/homework/localstorage">Local Storage</Link>
          </div>
          <div className="app">
            <Link to="/homework/todos">To Do</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exersices;
