
export function todosReducer (state=[], action) {
    if (action.type === "add-new-toDo") {
      return {
        ...state,

        todos: [
          ...state.todos,
          {
            id: Math.random(),
            text: action.payload.text,
            isDone: false,
          },
        ],
      };
    }
    if (action.type === "delete-todo-item") {
      return {
        todos: todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    if (action.type === "isDone") {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }

          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }),
      };
    }

    if (action.type === "clear-all") {
      return {
        todos: [],
      };
    }
    return state;
  }

  export const todos = [
    {
      id: Math.random(),
      text: "Learn React",
      isDone: false,
    },
  ]