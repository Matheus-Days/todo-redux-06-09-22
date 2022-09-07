import { ADD_TODO, DELETE_TODO, MARK_TODO } from './actionTypes';

const INITIAL_STATE = {
  todos: []
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            completed: false
          }
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    case MARK_TODO:
      const temp = {
        ...state,
        todos: state.todos.map(todo => {
          const completed = todo.id === action.payload.id ? !todo.completed : todo.completed;
          return {
            id: todo.id,
            title: todo.title,
            completed
          };
        })
      }
      console.log(temp)
      return temp;
    default:
      return state;
  };
}