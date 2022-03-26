export const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  DONE: "done",
};

export function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, addedTodo(action.payload.text)];
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.DONE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case ACTIONS.CLEAR:
      return [
        {
          id: Math.random(),
          text: "First ToDo",
          isDone: false,
        },
      ];

    default:
      return todos;
  }
}

export function addedTodo(text) {
  return { id: Math.random(), text: text, isDone: false };
}
