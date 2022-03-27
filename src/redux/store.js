import { createStore } from "redux";
import { todos, todosReducer } from "../features/todos/todosSlice";

const store = createStore( todosReducer, todos)

console.log(store.getState());

export default store;
