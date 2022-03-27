export const todos = [
  {
    id: Math.random(),
    text: "Learn React",
    isDone: false,
  },
];

export function todosReducer(state = [], action) {
  if (action.type === "add-new-toDo") {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isDone: false,
      },
    ];
  }
  if (action.type === "delete-todo-item") {
    return state.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "isDone") {
    return state.map((todo) => {
      if (todo.id !== action.payload.id) {
        return todo;
      }

      return {
        ...todo,
        isDone: !todo.isDone,
      };
    });
  }

  if (action.type === "clear-all") {
    return []
  }
  return state;
}
