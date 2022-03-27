import { combineReducers, createStore } from "redux";
import { todos, todosReducer } from "../features/todos/todosSlice";

const store = createStore( combineReducers({
  todos: todosReducer,
}),
  {
    todos: todos
  }
);

export default store;
