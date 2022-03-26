import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Exercises from './Exercises';
import LocalStorage from './LocalStorage/LocalStorage';
import Todos from './ToDo/Todos';

function HomeWork(props) {
    return (
        <div>
            <Routes>
            <Route path="/homework" element={<Exercises/>} />
        <Route path="/homework/localstorage" element={<LocalStorage/>} />
        <Route path="/homework/todos" element={<Todos/>} />
        {/* <Route path="/products/:productId" element={<SingleProduct/>} /> */}
      </Routes>
        </div>
    );
}

export default HomeWork;