import React from "react";
import { Route, Routes } from "react-router-dom";
import TodosRedux from "./redux/TodosRedux";

function AppRedux() {
  return (
    <Routes>
      <Route path="/redux" element={<TodosRedux />} />
    </Routes>
  );
}

export default AppRedux;
